'use client';
import { useEffect, useRef, useState } from 'react';
import { IMessage } from '../_lib/_interfaces/IMessage';
import { IRoom } from '../_lib/_interfaces/IRoom';
import { auth } from '../_lib/_firebase/firebase.config';
import { toast } from 'react-toastify';

interface Props {
  room: IRoom;
  initial_messages: IMessage[];
}

export function useChatSocket({ initial_messages, room }: Props) {
  const [messages, setMessages] = useState<IMessage[]>(initial_messages);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const initSocket = async () => {
      const token = await auth.currentUser?.getIdToken();
      const socket = new WebSocket(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/chat/ws?token=${token}`
      );
      socketRef.current = socket;

      socket.onopen = () => {
        console.log('WebSocket abierto');
        socket.send(
          JSON.stringify({
            type: 'JOIN_ROOM',
            payload: room.id,
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
  }, [room]);

  const receiveMessage = (data: IMessage) => {
    setMessages(prev => {
      // Busca y reemplaza el mensaje pendiente (si existe)
      const updatedMessages = prev.map(msg => {
        // Compara por contenido y timestamp aproximado (o usa otro criterio único)
        if (
          msg.status === 'pending' &&
          msg.content === data.content &&
          // Si el backend devuelve el mismo timestamp (o casi)
          Math.abs(new Date(msg.createdAt).getTime() - new Date(data.createdAt).getTime()) < 1000
        ) {
          return { ...data, status: 'delivered' } as IMessage; // Mensaje confirmado
        }
        return msg;
      });

      // Si no era un mensaje pendiente, añádelo normalmente
      if (!updatedMessages.some(msg => msg.id === data.id)) {
        updatedMessages.push({ ...data, status: 'delivered' });
      }

      return updatedMessages;
    });
  };

  const sendMessage = (msg: string) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      // Genera un ID temporal único (puedes usar Date.now() o UUID)
      const tempId = `pending-${Date.now()}`;

      // Añade el mensaje al estado local como "pendiente"
      setMessages(prev => [
        ...prev,
        {
          id: tempId,
          content: msg,
          createdAt: new Date().toISOString(), // Timestamp local
          status: 'pending',
          roomId: room.id,
          userId: auth.currentUser?.uid,
        } as IMessage,
      ]);

      // Envía el mensaje al servidor
      const messageToSend = {
        type: 'CHAT_ROOM',
        payload: {
          content: msg,
          roomID: room.id,
          type: 'text',
        },
        timestamp: new Date().toISOString(),
      };
      socketRef.current.send(JSON.stringify(messageToSend));
    }
  };

  return { messages, sendMessage };
}
