'use client';

import { useChatSocket } from '@/app/_hooks/useChatSocket';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import Message from './Message';
import useIsBottom from '@/app/_hooks/useScroll';
import MessageInput from './MessageInput';
import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import { useAuth } from '@/app/_hooks/useAuth';
import MessagesInputBlocked from './MessagesInputBlocked';

interface Props {
  room: IRoom;
  initial_messages: IMessage[];
}

export default function MessagesList({ room, initial_messages }: Props) {
  const { messages, sendMessage } = useChatSocket({ room, initial_messages });
  const { containerRef, bottomRef } = useIsBottom({ items: messages });
  const user = useAuth(state => state.user);

  const canSendMessage = () => room?.members.some(member => member === user?.uid);

  return (
    <>
      <div ref={containerRef} className="p-4 h-full flex flex-col gap-5 lg:gap-10 overflow-auto">
        {messages.map(msg => (
          <Message key={msg.id} message={msg} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="p-4 px-6 bg-purple-2">
        {canSendMessage() ? (
          <MessageInput bottomRef={bottomRef} onSend={sendMessage} />
        ) : (
          <MessagesInputBlocked room={room} />
        )}
      </div>
    </>
  );
}
