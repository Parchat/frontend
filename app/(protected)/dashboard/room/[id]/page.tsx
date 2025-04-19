import { SendIcon } from '@/app/_ui/icons';
import MessagesList from '../_components/MessagesList';
import { Suspense } from 'react';
import LoadingEmoji from '@/app/_components/LoadingEmoji';

interface RouterProps {
  params: {
    id: string;
  };
}
export default async function RoomPage({ params }: RouterProps) {
  const { id } = await params;
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full">
      <div className="p-4 bg-semidarkpurple w-full">
        <h2 className="text-2xl font-bold">Nombre de la sala {id}</h2>
        <p className="text-sm">Pública</p>
      </div>
      <Suspense fallback={<LoadingEmoji />}>
        <MessagesList id={id} />
      </Suspense>
      <div className="p-4 px-6 bg-purple-2">
        <form className="w-full h-full bg-darkblue-2 flex items-center rounded-2xl">
          <div className="w-full h-full">
            <label htmlFor="message" hidden />
            <input id="message" type="text" className="w-full h-full outline-none p-4" />
          </div>
          <button className="p-4 cursor-pointer">
            <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
