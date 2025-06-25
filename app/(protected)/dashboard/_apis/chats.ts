import myAxios from '@/app/_apis/myAxios.config';
import { IChat } from '@/app/_lib/_interfaces/IChat';
import { toast } from 'react-toastify';

export const createChat = async (otherUserId: string) => {
  try {
    const res = await myAxios.post<IChat>(`/api/v1/chat/direct/${otherUserId}`);
    return res.data;
  } catch (error) {
    console.error('Error creating chat message:', error);
    toast.error('Error al crear el chat');
    return null;
  }
};

export const getChatById = async (chatId: string) => {
  try {
    const res = await myAxios.get<IChat>(`/api/v1/chat/direct/${chatId}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching chat by ID:', error);
    return null;
  }
};

export const getAllChats = async () => {
  try {
    const res = await myAxios.get<IChat[]>('/api/v1/chat/direct/me');
    return res.data;
  } catch (error) {
    console.error('Error fetching chats:', error);
    return [];
  }
};
