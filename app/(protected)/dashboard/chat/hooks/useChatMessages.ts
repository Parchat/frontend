import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import { useEffect, useState } from 'react';
import { getChatMessages } from '../../_apis/messages';

interface Props {
  id: string;
}

export const useChatMessages = ({ id }: Props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMessages = async () => {
      const newMessages = await getChatMessages(id);
      setMessages(newMessages);
      setLoading(false);
    };
    getMessages();
  }, [id]);

  return {
    messages,
    loading,
  };
};
