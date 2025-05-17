/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useAuth } from '@/app/_hooks/useAuth';
import { updateEmail, updatePassword, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useUserProfile = () => {
  const { user } = useAuth();

  const [loading, setLoading] = useState(true);
  const [userForm, setUserForm] = useState({
    displayName: user?.displayName || '',
    photoURL: user?.photoURL || null,
    email: user?.email || '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    if (user) {
      setUserForm({
        displayName: user.displayName || '',
        photoURL: user.photoURL || null,
        email: user.email || '',
        password: '',
        confirmPassword: '',
      });
    }
    setLoading(false);
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!user) {
      toast.error('No hay usuario autenticado');
      return;
    }

    // Validar que la contraseña y la confirmación coincidan
    if (userForm.password || userForm.confirmPassword) {
      if (userForm.password !== userForm.confirmPassword) {
        toast.error('Las contraseñas no coinciden');
        return;
      }
    }

    setLoading(true);

    try {
      // Actualizar email si cambió
      if (userForm.email !== user.email) {
        await updateEmail(user, userForm.email);
      }

      // Actualizar perfil (displayName y photoURL) si cambiaron
      if (userForm.displayName !== user.displayName) {
        await updateProfile(user, {
          displayName: userForm.displayName,
        });
      }
      if (userForm.photoURL !== user.photoURL) {
        await updateProfile(user, {
          photoURL: userForm.photoURL,
        });
      }

      // Actualizar contraseña si se proporcionó
      if (userForm.password) {
        await updatePassword(user, userForm.password);
      }

      toast.success('Perfil actualizado correctamente');
    } catch (error: any) {
      toast.error(`Error al actualizar perfil: ${error.message}`);
    }

    setLoading(false);
  };

  return {
    userForm,
    handleChange,
    handleSubmit,
    user,
    loading,
  };
};
