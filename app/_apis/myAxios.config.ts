import axios from 'axios';
import { auth } from '@/app/_lib/_firebase/firebase.config';

const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

myAxios.interceptors.request.use(
  async config => {
    // Esperar a que Firebase termine de verificar la sesión
    await auth.authStateReady();

    const user = auth.currentUser;

    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default myAxios;
