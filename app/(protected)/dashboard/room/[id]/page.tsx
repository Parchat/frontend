'use client';
import { useQuery } from '@tanstack/react-query';
import MessagesList from '../_components/MessagesList';
import LoadingEmoji from '@/app/_components/LoadingEmoji';
import { use } from 'react';
import { getRoomById } from '../../_apis/rooms';
import { useRoomMessages } from '../hooks/useRoomMessages';
import { toast } from 'react-toastify';

interface RouterProps {
  params: Promise<{
    id: string;
  }>;
}
export default function RoomPage({ params }: RouterProps) {
  const id = use(params).id;

  const { messages, loading } = useRoomMessages({ id });

  const { data: room, isLoading: roomLoading } = useQuery({
    queryKey: [`room-${id}`],
    queryFn: () => getRoomById(id),
  });

  if (loading || roomLoading) return <LoadingEmoji />;

  const handleCopyUrl = () => {
    const url = `${window.location.origin}/dashboard/room/${id}`;
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('URL copiada al portapapeles');
      })
      .catch(() => {
        toast.error('Error al copiar la URL');
      });
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-full overflow-auto">
      <div className="p-2 lg:p-4 bg-semidarkpurple w-full flex items-center justify-between">
        <div>
          <h2 className="text-lg lg:text-2xl font-bold">{room?.name}</h2>
          <p className="text-xs">{room?.isPrivate ? 'Privada' : 'Pública'}</p>
        </div>
        <div className="cursor-pointer">
          <button onClick={handleCopyUrl}>📋</button>
        </div>
      </div>
      {room && <MessagesList room={room} initial_messages={messages ?? []} />}
    </div>
  );
}
