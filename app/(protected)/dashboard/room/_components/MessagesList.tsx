'use client';

import { useChatSocket } from '@/app/_hooks/useChatSocket';
import { IMessage } from '@/app/_interfaces/IMessage';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';

interface Props {
  room_id: string;
  initial_messages: IMessage[];
}

export default function MessagesList({ room_id, initial_messages }: Props) {
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldScroll, setShouldScroll] = useState(true);
  const { messages } = useChatSocket({ room_id, initial_messages });

  // Detectar si el usuario scrollea manualmente
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const nearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 50;
      setShouldScroll(nearBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll solo si el usuario está al fondo
  useEffect(() => {
    if (shouldScroll) {
      bottomRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [messages, shouldScroll]);

  return (
    <div ref={containerRef} className="p-4 h-full flex flex-col gap-10 overflow-auto">
      {messages.map(msg => (
        <Message key={msg.id} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
