'use client';

import LoadingEmoji from '@/app/_components/LoadingEmoji';
import { RoomIcon } from '@/app/_ui/icons';
import { useQuery } from '@tanstack/react-query';
import { getAllRooms } from '../_apis/rooms';
import RoomList from './RoomList';

export default function RoomSearch() {
  const { data: rooms, isLoading } = useQuery({
    queryKey: ['all-rooms-dashboard'],
    queryFn: getAllRooms,
  });

  if (isLoading) return <LoadingEmoji />;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const searchValue = form.search.value;

    // Aquí puedes manejar la búsqueda con el valor de searchValue
    console.log('Buscando sala:', searchValue);
  };

  return (
    <>
      <form className="w-full flex justify-center items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Buscar sala"
          className="w-full border border-violet-400 px-4 py-2 flex-11/12 outline-none rounded-l-md"
          name="search"
        />
        <button className="flex justify-center items-center w-full bg-purple text-white cursor-pointer flex-1/12 h-full rounded-r-md">
          <RoomIcon width={30} height={30} />
        </button>
      </form>
      {rooms ? (
        <RoomList rooms={rooms} />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h2 className="text-lg text-gray-500">No encontramos salas</h2>
        </div>
      )}
    </>
  );
}
