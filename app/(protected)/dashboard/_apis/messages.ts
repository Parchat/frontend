import myAxios from '@/app/_apis/myAxios.config';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';

export const getRoomMessages = async (roomId: string) => {
  try {
    const res = await myAxios.get<IMessage[]>(`/api/v1/chat/rooms/${roomId}/messages`);
    return res.data;
  } catch (error) {
    console.error('Error fetching room messages:', error);
    return [];
  }
};
