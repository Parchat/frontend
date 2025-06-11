'use client';
import { useQuery } from '@tanstack/react-query';
import { getRoomsImIn } from '../(protected)/dashboard/_apis/rooms';
import { getAllChats } from '../(protected)/dashboard/_apis/chats';
import LoadingEmoji from './LoadingEmoji';
import Link from 'next/link';

export default function AsideRoom() {
  const { data: rooms, isLoading } = useQuery({
    queryKey: ['my-rooms'],
    queryFn: getRoomsImIn,
  });

  const { data: chats, isLoading: chatsLoading } = useQuery({
    queryKey: ['all-chats-dashboard'],
    queryFn: getAllChats,
  });

  if (chatsLoading || isLoading) {
    return (
      <aside className="hidden lg:flex flex-col w-60 bg-semidarkpurple h-full border-r border-gray-700">
        <div className="flex flex-col p-4 overflow-y-auto">
          <LoadingEmoji />
        </div>
      </aside>
    );
  }

  return (
    <aside className="hidden lg:flex flex-col w-60 bg-semidarkpurple h-full border-r border-gray-700">
      <div className="flex flex-col p-4 overflow-y-auto">
        <h2 className="font-bold text-lg">Chats directos</h2>
        {chats && chats.length > 0 ? (
          <ul className="list-none">
            {chats.map(chat => (
              <li key={chat.id} className="text-white p-2 bg-purple-2 rounded-lg mb-2">
                <Link href={`/dashboard/chat/${chat.id}`}>
                  <p className="font-bold">{chat.lastMessage.displayName}</p>
                  <p>{chat.lastMessage.content}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Aun no tienes conversaciones</p>
        )}
        <h2 className="font-bold text-lg">Salas</h2>
        {rooms && rooms.length > 0 ? (
          <ul className="list-none">
            {rooms.map(room => (
              <li key={room.id} className="text-white p-2 bg-purple-2 rounded-lg mb-2">
                <Link href={`/dashboard/room/${room.id}`}>
                  <p className="font-bold truncate">{room.name}</p>
                  <p>{room.lastMessage.content}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">Aun no tienes conversaciones</p>
        )}
      </div>
    </aside>
  );
}
