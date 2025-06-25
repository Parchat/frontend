'use client';

import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import ChatsInit from '../../_components/ChatsInit';
import { useRoomSocket } from '@/app/_hooks/useRoomSocket';

interface Props {
  room: IRoom;
  initial_messages: IMessage[];
}

export default function MessagesList({ room, initial_messages }: Props) {
  const { messages, sendMessage, pendingMessages } = useRoomSocket({ room, initial_messages });

  return (
    <ChatsInit
      messages={messages}
      pendingMessages={pendingMessages}
      sendMessage={sendMessage}
      room={room}
    />
  );
}
