'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { create } from 'zustand';
import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { auth, googleProvider } from '../_lib/_firebase/firebase.config';
import { loginSchema, registerSchema } from '../(auth)/login/_lib/_schemas/auth';
import { registerUser } from '../_apis/auth';
import { createSession, deleteSession } from '../(auth)/login/_lib/_actions/session';
import { GoogleAuthProvider } from 'firebase/auth/web-extension';

type Auth = {
  user: User | null | undefined;
  initializeAuth: () => void;
  login: (formData: FormData) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  register: (formData: FormData) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuth = create<Auth>()(set => ({
  user: null,
  initializeAuth: () => {
    // Retornamos directamente la función de unsubscribe
    return onAuthStateChanged(auth, () => {
      // Forzar una verificación inmediata del estado actual
      const currentUser = auth.currentUser;
      if (currentUser) {
        set({ user: currentUser });
      }

      // Configurar el observer para cambios futuros
      return onAuthStateChanged(auth, user => {
        set({
          user,
        });
      });
    });
  },

  login: async (formData: FormData) => {
    const result = loginSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!result.success) {
      toast.error(Object.values(result.error.flatten().fieldErrors).flat().join(', '));
      return;
    }

    const { email, password } = result.data;
    try {
      await setPersistence(auth, browserLocalPersistence);

      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.getIdToken();

      await createSession(token);

      toast.success('Usuario logueado correctamente');
    } catch (error: any) {
      const mensaje =
        error.code === 'auth/user-not-found' ? 'Usuario no encontrado' : error.message;
      toast.error(mensaje);
    }
  },
  loginWithGoogle: async () => {
    try {
      await setPersistence(auth, browserLocalPersistence);

      // Iniciar sesión con Google usando el proveedor de autenticación
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      if (!token) {
        throw new Error('No se pudo obtener el token de acceso de Google');
      }

      // Crear una sesión con el token obtenido
      await createSession(token);
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  },
  register: async (formData: FormData) => {
    const result = registerSchema.safeParse(Object.fromEntries(formData.entries()));

    if (!result.success) {
      toast.error(Object.values(result.error.flatten().fieldErrors).flat().join(', '));
      return;
    }

    const { email, password, displayName } = result.data;
    try {
      await registerUser({ email, password, displayName });
      toast.success('Usuario registrado correctamente');

      // Logear al usuario después de registrarse
      await useAuth.getState().login(formData);
    } catch (error: any) {
      console.error(error);
      const mensaje = error.response?.data || 'Error al registrar usuario';
      toast.error(mensaje);
    }
  },
  logout: async () => {
    await auth.signOut();
    window.localStorage.removeItem('user');
    await deleteSession();
    set({ user: null });
    toast.success('Usuario deslogueado correctamente');
  },
}));
