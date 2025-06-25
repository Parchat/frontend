'use client';

import LoadingEmoji from '@/app/_components/LoadingEmoji';
import { RoomIcon } from '@/app/_ui/icons';
import RoomList from './RoomList';
import { useGetPublicRooms } from '../_hooks/useGetPublicRooms';

export default function RoomSearch() {
  const { isLoading, fileteredRooms, handleSubmit } = useGetPublicRooms();

  if (isLoading) return <LoadingEmoji />;

  return (
    <>
      <form className="w-full flex justify-center items-center">
        <input
          type="text"
          placeholder="Buscar sala"
          className="w-full border border-violet-400 px-4 py-2 flex-11/12 outline-none rounded-l-md"
          name="search"
          onChange={handleSubmit}
        />
        <button className="flex justify-center items-center w-full bg-purple text-white cursor-pointer flex-1/12 h-full rounded-r-md">
          <RoomIcon width={30} height={30} />
        </button>
      </form>
      {fileteredRooms ? (
        <RoomList rooms={fileteredRooms} />
      ) : (
        <div className="w-full h-full flex justify-center items-center">
          <h2 className="text-lg text-gray-500">No encontramos salas</h2>
        </div>
      )}
    </>
  );
}
