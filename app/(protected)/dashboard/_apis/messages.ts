'use client';
import myAxios from '@/app/_apis/myAxios.config';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

export const getRoomMessages = async (roomId: string) => {
  try {
    const res = await myAxios.get<IMessage[]>(`/api/v1/chat/rooms/${roomId}/messages`);
    return res.data;
  } catch (error) {
    console.error('Error fetching room messages:', error);
    return [];
  }
};

export const getChatMessages = async (chatId: string) => {
  try {
    const res = await myAxios.get<IMessage[]>(`/api/v1/chat/direct/${chatId}/messages`);
    return res.data;
  } catch {
    return [];
  }
};

export const getTranslatedMessage = async (content: string, languageCode?: string) => {
  try {
    const res = await axios.post<string>(`/api/translate`, {
      content,
      languageCode: languageCode || 'en',
    });
    return res.data;
  } catch (error) {
    console.error('Error translating message:', error);
    return null;
  }
};

export const sendReport = async (message: IMessage) => {
  try {
    const res = await myAxios.post(`/api/v1/chat/rooms/${message.roomId}/report`, {
      messageId: message.id,
      reason: 'Misconduct or inappropriate content',
    });

    toast.success('Report sent successfully');

    return res.data;
  } catch (error) {
    toast.error(
      error instanceof AxiosError
        ? error.response?.data
        : 'An error occurred while sending the report'
    );
    return null;
  }
};

export const clearReports = async (message: IMessage) => {
  try {
    const res = await myAxios.post(`/api/v1/chat/rooms/${message.roomId}/clear-reports`, {
      userId: message.userId,
    });
    toast.success('Reports cleared successfully');
    return res.data;
  } catch (error) {
    toast.error(
      error instanceof AxiosError
        ? error.response?.data
        : 'An error occurred while clearing reports'
    );
    return null;
  }
};
