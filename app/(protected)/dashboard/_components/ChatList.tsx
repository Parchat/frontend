import { IChat } from '@/app/_lib/_interfaces/IChat';
import Link from 'next/link';

interface Props {
  chats: IChat[];
}

export default function ChatList({ chats }: Props) {
  return (
    <>
      {chats.map(sala => (
        <article key={sala.id} className="w-full flex gap-5 items-center justify-between">
          <Link
            href={`/dashboard/chat/${sala.id}`}
            className="flex gap-5 items-center justify-between bg-purple w-full p-3 rounded-2xl min-w-0 flex-11/12"
          >
            <p className="font-bold text-2xl lg:text-4xl truncate min-w-0 flex-1">
              Chat con {sala.userIds[0]}
            </p>
            <div className="hidden sm:flex flex-col items-center flex-shrink-0">
              <p className="font-semibold text-sm">
                <span className="font-medium text-sm text-purple">
                  {new Date(sala.createdAt).toLocaleDateString('es-ES')}
                </span>
              </p>
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
