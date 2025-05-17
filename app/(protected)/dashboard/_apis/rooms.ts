/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import myAxios from '@/app/_apis/myAxios.config';
import { ICreateRoom, IRoom } from '@/app/_lib/_interfaces/IRoom';
import { toast } from 'react-toastify';

export const createRoom = async (data: ICreateRoom) => {
  const { name, description, userIds } = data;
  console.log('data', data);
  if (!name || !description || !userIds) {
    toast.error('Por favor completa todos los campos');
    return null;
  }

  try {
    const res = await myAxios.post<ICreateRoom>('/api/v1/chat/rooms', data);
    toast.success('Sala creada con éxito');
    return res.data;
  } catch (error: any) {
    toast.error(error.response?.data || 'Error al crear la sala');
    return null;
  }
};

export const getRoomsImIn = async () => {
  try {
    const res = await myAxios.get<IRoom[]>('/api/v1/chat/rooms/me');
    return res.data;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    return [];
  }
};

export const getAllRooms = async () => {
  try {
    const res = await myAxios.get<IRoom[]>('/api/v1/chat/rooms');
    return res.data.filter(room => !room.isPrivate);
  } catch (error) {
    console.error('Error fetching all rooms:', error);
    return [];
  }
};

export const getRoomById = async (roomId: string) => {
  try {
    const res = await myAxios.get<IRoom>(`/api/v1/chat/rooms/${roomId}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching room by ID:', error);
    return null;
  }
};

export const joinRoom = async (roomId: string) => {
  try {
    const res = await myAxios.post(`/api/v1/chat/rooms/${roomId}/join`);
    toast.success('Te has unido al chat');
    return res.data;
  } catch (error: any) {
    toast.error(error.response?.data || 'Error al unirte al chat');
    return null;
  }
};
