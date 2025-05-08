import axios from 'axios';
import { getAuth } from 'firebase/auth';

const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

myAxios.interceptors.request.use(
  async config => {
    const user = getAuth().currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(process.env.NEXT_PUBLIC_API_URL, 'URL API');
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default myAxios;
