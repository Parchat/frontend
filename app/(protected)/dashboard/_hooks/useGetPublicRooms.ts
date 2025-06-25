import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { getAllRooms } from '../_apis/rooms';

export const useGetPublicRooms = () => {
  const { data: rooms, isLoading } = useQuery({
    queryKey: ['all-rooms-dashboard'],
    queryFn: getAllRooms,
  });

  const [fileteredRooms, setFilteredRooms] = useState<IRoom[] | undefined>(rooms);

  useEffect(() => {
    if (rooms) {
      setFilteredRooms(rooms);
    }
  }, [rooms]);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchValue = e.currentTarget.value;

    // Aquí puedes manejar la búsqueda con el valor de searchValue
    if (searchValue.trim() === '' || !rooms) {
      setFilteredRooms(rooms);
      return;
    }

    const filtered = rooms.filter(room =>
      room.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    setFilteredRooms(filtered.length > 0 ? filtered : []);
  };

  return {
    isLoading,
    fileteredRooms,
    handleSubmit,
  };
};
