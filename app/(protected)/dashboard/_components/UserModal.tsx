'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChat } from '../_apis/chats';
import { useRouter } from 'next/navigation';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import { clearReports, sendReport } from '../_apis/messages';
import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import { useAuth } from '@/app/_hooks/useAuth';

interface Props {
  room?: IRoom | null;
  message: IMessage | null;
  handleClose: () => void;
}
export default function UserModal({ handleClose, message, room }: Props) {
  const user = useAuth(state => state.user);
  const queryClient = useQueryClient();
  const router = useRouter();
  const open = Boolean(message);

  const DoIHaveAdmin = () => room?.admins.some(admin => admin === user?.uid);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const mutation_send_message = useMutation({
    mutationFn: (data: string) => createChat(data),
    onSuccess: res => {
      if (!res) return;
      queryClient.invalidateQueries({ queryKey: [`all-chats-dashboard`] });
      router.push(`/dashboard/chat/${res.id}`);
    },
  });

  if (!message) return null;

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${open ? 'block' : 'hidden'}`}
    >
      <div className="w-[80%] lg:w-[60%] flex flex-col gap-4 bg-semidarkpurple p-4 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Envía un mensaje directo</h3>
          <div className="flex gap-2">
            {room && DoIHaveAdmin() && (
              <p className="cursor-pointer" onClick={() => clearReports(message)}>
                🧹
              </p>
            )}
            <p className="cursor-pointer" onClick={() => sendReport(message)}>
              ❗
            </p>
          </div>
        </div>
        <p>Puedes establecer una conversación privada con {message.displayName}</p>
        <div className="flex gap-2">
          <button
            className="cursor-pointer p-1 w-full rounded-md bg-lightblue"
            onClick={handleClose}
          >
            Cerrar
          </button>
          <button
            className="cursor-pointer p-1 w-full rounded-md bg-purple"
            onClick={() => mutation_send_message.mutate(message.userId)}
          >
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
}
