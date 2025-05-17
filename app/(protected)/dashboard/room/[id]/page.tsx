'use client';
import { useQuery } from '@tanstack/react-query';
import MessagesList from '../_components/MessagesList';
import LoadingEmoji from '@/app/_components/LoadingEmoji';
import { use } from 'react';
import { getRoomMessages } from '../../_apis/messages';
import { getRoomById } from '../../_apis/rooms';

interface RouterProps {
  params: Promise<{
    id: string;
  }>;
}
export default function RoomPage({ params }: RouterProps) {
  const id = use(params).id;

  const { data: messages, isLoading: messagesLoading } = useQuery({
    queryKey: [`room-messages-${id}`],
    queryFn: () => getRoomMessages(id),
  });

  const { data: room, isLoading: roomLoading } = useQuery({
    queryKey: [`room-${id}`],
    queryFn: () => getRoomById(id),
  });

  if (messagesLoading || roomLoading) return <LoadingEmoji />;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-full overflow-auto">
      <div className="p-2 lg:p-4 bg-semidarkpurple w-full">
        <h2 className="text-lg lg:text-2xl font-bold">{room?.name}</h2>
        <p className="text-xs">Pública</p>
      </div>
      {room && <MessagesList room={room} initial_messages={messages ?? []} />}
    </div>
  );
}
