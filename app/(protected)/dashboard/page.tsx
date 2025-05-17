'use client';
import { useQuery } from '@tanstack/react-query';
import { getRoomsImIn } from './_apis/rooms';
import RoomList from './_components/RoomList';
import LoadingEmoji from '@/app/_components/LoadingEmoji';

export default function Dashboard() {
  const { data: rooms, isLoading } = useQuery({
    queryKey: ['my-rooms'],
    queryFn: getRoomsImIn,
  });

  if (isLoading) return <LoadingEmoji />;

  return (
    <section className="w-full h-full overflow-auto flex flex-col">
      <header className="w-full h-15 bg-semidarkpurple flex justify-center items-center">
        <h1 className="font-bold text-2xl">Mis Chats</h1>
      </header>
      <div className="w-full h-full flex flex-col gap-5 overflow-auto px-[5vw] py-5">
        {rooms ? (
          <RoomList rooms={rooms} />
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <h2 className="text-lg text-gray-500">Aun no tienes chats</h2>
          </div>
        )}
      </div>
    </section>
  );
}
