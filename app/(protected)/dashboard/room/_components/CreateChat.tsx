'use client';

import { CancelIcon } from '@/app/_ui/icons';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { createRoom } from '../../_apis/rooms';
import { ICreateRoom } from '@/app/_lib/_interfaces/IRoom';
import { auth } from '@/app/_lib/_firebase/firebase.config';
import { useRouter } from 'next/navigation';

export default function CreateChat() {
  const [createMode, setCreateMode] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: ICreateRoom) => createRoom(data),
    onSuccess: res => {
      if (!res) return;
      queryClient.invalidateQueries({ queryKey: [`all-rooms-dashboard`] });
      setCreateMode(false);
      router.push(`/dashboard/room/${res.id}`);
    },
  });

  const handleCreateRoom = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const description = (form.elements.namedItem('description') as HTMLTextAreaElement).value;
    const isPrivate = (form.elements.namedItem('isPrivate') as HTMLSelectElement).value === 'true';
    const data: ICreateRoom = {
      name,
      description,
      isPrivate,
      userIds: [auth.currentUser?.uid as string],
    };
    mutation.mutate(data);
  };

  return (
    <section className="w-full mt-5 mb-5">
      {createMode ? (
        <form onSubmit={handleCreateRoom} className="w-full flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-semibold">
              Nombre de la sala
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Nombre de la sala"
              name="name"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="description" className="text-sm font-semibold">
              Descripción
            </label>
            <textarea
              id="description"
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Descripción de la sala"
              name="description"
            />
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="isPrivate" className="text-sm font-semibold">
              Privacidad
            </label>
            <select
              id="isPrivate"
              className="w-full border border-gray-300 rounded px-3 py-2"
              name="isPrivate"
            >
              <option className="bg-purple" value="false">
                Pública
              </option>
              <option className="bg-purple" value="true">
                Privada
              </option>
            </select>
          </div>
          <div className="flex mt-5">
            <button
              type="button"
              className="flex-1/12 bg-purple text-white flex justify-center items-center cursor-pointer rounded-l"
              onClick={() => setCreateMode(false)}
            >
              <CancelIcon className="h-10" />
            </button>
            <button
              type="submit"
              className="flex-11/12 text-white flex justify-center items-center cursor-pointer border border-violet-400 rounded-r"
            >
              Crear sala
            </button>
          </div>
        </form>
      ) : (
        <button
          onClick={() => setCreateMode(true)}
          className="w-full bg-purple text-white px-4 py-2 rounded flex justify-center items-center cursor-pointer"
        >
          Crear nuevo chat
        </button>
      )}
    </section>
  );
}
