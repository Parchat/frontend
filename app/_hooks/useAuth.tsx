/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from 'react-toastify';
import { create } from 'zustand';
import {
  browserLocalPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { auth } from '../_lib/_firebase/firebase.config';
import { loginSchema, registerSchema } from '../(auth)/login/_lib/_schemas/auth';
import { registerUser } from '../_apis/auth';
import { createSession, deleteSession } from '../(auth)/login/_lib/_actions/session';

type Auth = {
  user: User | null | undefined;
  initializeAuth: () => void;
  login: (formData: FormData) => Promise<void>;
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
