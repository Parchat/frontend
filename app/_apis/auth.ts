'use client';
import { RegisterUserData } from '../_lib/_interfaces/IAuth';
import myAxios from './myAxios.config';

export const registerUser = async (data: RegisterUserData) => myAxios.post('/auth/signup', data);

export const verifySession = async () => myAxios.get('/api/v1/auth/me');

export const generateUser = async () => myAxios.post('/api/v1/user/create');
