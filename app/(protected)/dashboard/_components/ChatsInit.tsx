import { IChat } from '@/app/_lib/_interfaces/IChat';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import Message from '../room/_components/Message';
import { useState } from 'react';
import MessageInput from '../room/_components/MessageInput';
import MessagesInputBlocked from '../room/_components/MessagesInputBlocked';
import UserModal from './UserModal';
import { useAuth } from '@/app/_hooks/useAuth';
import useIsBottom from '@/app/_hooks/useScroll';

interface Props {
  room?: IRoom;
  chat?: IChat;
  messages: IMessage[];
  pendingMessages: IMessage[];
  sendMessage: (msg: string) => void;
}

export default function ChatsInit({
  room,
  chat,
  messages,
  pendingMessages = [],
  sendMessage,
}: Props) {
  const user = useAuth(state => state.user);
  const [userSelected, setUserSelected] = useState<{ userId: string; displayName: string } | null>(
    null
  );
  const { containerRef, bottomRef } = useIsBottom({ items: [pendingMessages, messages] });

  const handleUserSelect = (user: { userId: string; displayName: string }) => {
    setUserSelected(user);
  };

  const handleCloseUserModal = () => {
    setUserSelected(null);
  };

  const canSendMessage = () => {
    if (room) {
      return room.members.some(member => member === user?.uid);
    }
    if (chat) {
      return true;
    }
    return false;
  };

  return (
    <>
      <div ref={containerRef} className="p-4 h-full flex flex-col gap-5 lg:gap-7 overflow-auto">
        {messages.map(msg => (
          <Message key={msg.id} message={msg} selectUser={handleUserSelect} />
        ))}
        {pendingMessages.map(msg => (
          <Message key={msg.id} message={msg} selectUser={handleUserSelect} />
        ))}
        <div ref={bottomRef} />
      </div>
      <div className="p-4 px-6 bg-purple-2">
        {canSendMessage() ? (
          <MessageInput bottomRef={bottomRef} onSend={sendMessage} />
        ) : (
          room && <MessagesInputBlocked room={room} />
        )}
      </div>
      {userSelected && <UserModal user={userSelected} handleClose={handleCloseUserModal} />}
    </>
  );
}
