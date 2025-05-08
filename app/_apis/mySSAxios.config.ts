import axios from 'axios';

const mySSAxios = axios.create({
  baseURL: process.env.API_URL_SS,
  headers: {
    'Content-Type': 'application/json',
  },
});

mySSAxios.interceptors.request.use(
  // config => {
  //   const token = localStorage.getItem('token');
  //   if (token) {
  //     config.headers['Authorization'] = `Bearer ${token}`;
  //   }
  //   return config;
  // },
  config => {
    console.log(process.env.API_URL_SS);
    return config;
  },
  error => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

export default mySSAxios;
