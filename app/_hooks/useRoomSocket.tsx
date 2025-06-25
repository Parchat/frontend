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

export function useRoomSocket({ initial_messages, room }: Props) {
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
      const tempId = `pending-${Date.now()}`;

      // Añade el mensaje al estado local como "pendiente"
      setPendingMessages(prev => [
        ...prev,
        {
          id: tempId,
          content: msg,
          createdAt: new Date().toISOString(),
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

  return { messages, sendMessage, pendingMessages };
}
