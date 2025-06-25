'use client';
import { useEffect, useRef, useState } from 'react';
import { IMessage } from '../_lib/_interfaces/IMessage';
import { auth } from '../_lib/_firebase/firebase.config';
import { toast } from 'react-toastify';
import { IChat } from '../_lib/_interfaces/IChat';

interface Props {
  chat: IChat;
  initial_messages: IMessage[];
}

export function useChatSocket({ initial_messages, chat }: Props) {
  const [messages, setMessages] = useState<IMessage[]>(initial_messages);
  const [pendingMessages, setPendingMessages] = useState<IMessage[]>([]);
  const socketRef = useRef<WebSocket | null>(null);

  const receiveMessage = (data: IMessage) => {
    setPendingMessages(prev => prev.filter(msg => msg.content !== data.content));

    setMessages(prev => {
      return [...prev, data];
    });
  };

  const sendMessage = (msg: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      // Genera un ID temporal único (puedes usar Date.now() o UUID)
      // const tempId = `pending-${Date.now()}`;
      // Añade el mensaje al estado local como "pendiente"
      // setPendingMessages(prev => [
      //   ...prev,
      //   {
      //     id: tempId,
      //     content: msg,
      //     createdAt: new Date().toISOString(),
      //     status: 'pending',
      //     roomId: room.id,
      //     userId: auth.currentUser?.uid,
      //   } as IMessage,
      // ]);
      // Envía el mensaje al servidor
      const messageToSend = {
        type: 'DIRECT_CHAT',
        payload: {
          content: msg,
          roomID: chat.id,
          type: 'text',
        },
        timestamp: new Date().toISOString(),
      };
      socketRef.current.send(JSON.stringify(messageToSend));
    }
  };

  useEffect(() => {
    const initSocket = async () => {
      const token = await auth.currentUser?.getIdToken();
      const socket = new WebSocket(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/chat/ws?token=${token}`
      );
      socketRef.current = socket;

      socket.onopen = () => {
        socket.send(
          JSON.stringify({
            type: 'JOIN_DIRECT_CHAT',
            payload: chat.id,
            timestamp: new Date().toISOString(),
          })
        );
      };

      socket.onmessage = event => {
        const data = JSON.parse(event.data);

        if (data.type === 'ERROR') {
          toast.error(data.payload);
          return;
        }

        receiveMessage(data.payload);
      };

      socket.onerror = err => {
        console.error('WebSocket error:', err);
      };

      socket.onclose = () => {
        console.log('WebSocket cerrado');
      };
    };

    initSocket();
    return () => {
      socketRef.current?.close();
    };
  }, [chat]);

  return { messages, sendMessage, pendingMessages };
}
