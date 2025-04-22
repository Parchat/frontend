'use client';

import { useChatSocket } from '@/app/_hooks/useChatSocket';
import { IMessage } from '@/app/_interfaces/IMessage';
import { useEffect, useRef, useState } from 'react';
import Message from './Message';
import useIsBottom from '@/app/_hooks/useScroll';
import MessageInput from './MessageInput';

interface Props {
  room_id: string;
  initial_messages: IMessage[];
}

export default function MessagesList({ room_id, initial_messages }: Props) {
  const { messages, sendMessage } = useChatSocket({ room_id, initial_messages });
  const { containerRef, bottomRef } = useIsBottom({ items: messages });

  return (
    <>
      <div ref={containerRef} className="p-4 h-full flex flex-col gap-5 lg:gap-10 overflow-auto">
        {messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="p-4 px-6 bg-purple-2">
        <MessageInput bottomRef={bottomRef} onSend={sendMessage} />
      </div>
    </>
  );
}

