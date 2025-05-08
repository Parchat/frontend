import { useEffect, useRef, useState } from 'react';
import { IMessage } from '../_lib/_interfaces/IMessage';

interface Props {
  room_id: string;
  initial_messages: IMessage[];
}

export function useChatSocket({ initial_messages }: Props) {
  const [messages, setMessages] = useState<IMessage[]>(initial_messages);
  const socketRef = useRef<WebSocket | null>(null);

  // useEffect(() => {
  //   const socket = new WebSocket(`ws://localhost:8080/ws/${room_id}`);
  //   socketRef.current = socket;

  //   socket.onmessage = event => {
  //     setMessages(prev => [...prev, event.data]);
  //   };

  //   socket.onerror = err => {
  //     console.error('WebSocket error:', err);
  //   };

  //   socket.onclose = () => {
  //     console.log('WebSocket cerrado');
  //   };

  //   return () => {
  //     socket.close();
  //   };
  // }, [room_id]);

  useEffect(() => {
    // Simula WebSocket: llega un nuevo mensaje cada 5 segundos
    const interval = setInterval(() => {
      setMessages(prev => [
        ...prev,
        {
          id: String(prev.length + 1),
          send_by: 'system',
          send_at: new Date().toISOString(),
          content: `Mensaje simulado ${prev.length + 1}`,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = (msg: string) => {
    // if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
    //   socketRef.current.send(msg);
    // }
    setMessages(prev => [
      ...prev,
      {
        id: String(new Date().getTime()),
        send_by: 'Danils',
        send_at: 'pending',
        content: msg,
      },
    ]);

    // Simula la respuesta del servidor
    setTimeout(() => {
      setMessages(prev => {
        return prev.map(msg =>
          msg.send_at === 'pending'
            ? {
                ...msg,
                send_at: new Date().toISOString(),
              }
            : msg
        );
      });
    }, 2000);
  };

  return { messages, sendMessage };
}
