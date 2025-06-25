'use client';

import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { joinRoom } from '../../_apis/rooms';

interface Props {
  room: IRoom;
}
export default function MessagesInputBlocked({ room }: Props) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => joinRoom(room.id),
    onSuccess: res => {
      if (!res) return;
      queryClient.invalidateQueries({ queryKey: [`room-${room.id}`] });
    },
  });

  const handleJoinRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate();
  };

  return (
    <form className="w-full h-full flex justify-center items-center" onSubmit={handleJoinRoom}>
      <h2 className="text-lg text-gray-500">Únete al chat para enviar mensajes</h2>
      <button className="ml-4 bg-purple text-white px-4 py-2 rounded flex justify-center items-center cursor-pointer">
        Unirme
      </button>
    </form>
  );
}
