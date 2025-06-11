import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createChat } from '../_apis/chats';
import { useRouter } from 'next/navigation';

interface Props {
  user: { userId: string; displayName: string } | null;
  handleClose: () => void;
}
export default function UserModal({ handleClose, user }: Props) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const open = Boolean(user);

  const handleClickOutside = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const mutation = useMutation({
    mutationFn: (data: string) => createChat(data),
    onSuccess: res => {
      if (!res) return;
      queryClient.invalidateQueries({ queryKey: [`all-chats-dashboard`] });
      router.push(`/dashboard/chat/${res.id}`);
    },
  });

  if (!user) return null;

  return (
    <div
      onClick={handleClickOutside}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${open ? 'block' : 'hidden'}`}
    >
      <div className="w-[80%] lg:w-[60%] flex flex-col gap-4 bg-semidarkpurple p-4 rounded-lg shadow-lg">
        <h3 className="font-bold">Envía un mensaje directo</h3>
        <p>Puedes establecer una conversación privada con {user.displayName}</p>
        <div className="flex gap-2">
          <button
            className="cursor-pointer p-1 w-full rounded-md bg-lightblue"
            onClick={handleClose}
          >
            Cerrar
          </button>
          <button
            className="cursor-pointer p-1 w-full rounded-md bg-purple"
            onClick={() => mutation.mutate(user.userId)}
          >
            Enviar mensaje
          </button>
        </div>
      </div>
    </div>
  );
}
