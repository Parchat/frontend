import { auth } from '@/app/_lib/_firebase/firebase.config';
import { IRoom } from '@/app/_lib/_interfaces/IRoom';
import { CancelIcon, DoorBellIcon } from '@/app/_ui/icons';
import { Tooltip } from '@mui/material';
import Link from 'next/link';

interface Props {
  rooms: IRoom[];
}

export default function RoomList({ rooms }: Props) {
  const userId = auth.currentUser?.uid;

  const CanExitRoom = (room: IRoom) => {
    return room.members.some(member => member === userId);
  };

  return (
    <>
      {rooms.map(sala => (
        <article key={sala.id} className="w-full flex gap-5 items-center justify-between">
          <Link
            href={`/dashboard/room/${sala.id}`}
            className="flex gap-5 items-center justify-between bg-purple w-full p-3 rounded-2xl min-w-0 flex-11/12"
          >
            <p className="font-bold text-2xl lg:text-4xl truncate min-w-0 flex-1">{sala.name}</p>
            <div className="hidden sm:flex flex-col items-center flex-shrink-0">
              <p className="font-semibold text-sm">
                <span className="font-medium text-sm text-purple">
                  {new Date(sala.createdAt).toLocaleDateString('es-ES')}
                </span>
              </p>
            </div>
          </Link>
          {/* <div className="flex gap-5 justify-end flex-2/12">
            {CanExitRoom(sala) && (
              <Tooltip title="Salir de la sala" placement="top">
                <button className="bg-purple rounded-full">
                  <CancelIcon className="w-10 h-10 cursor-pointer" />{' '}
                </button>
              </Tooltip>
            )}
            <Tooltip title="Notificaciones" placement="top">
              <button className="bg-purple rounded-full">
                <DoorBellIcon className="w-10 h-10 cursor-pointer" />{' '}
              </button>
            </Tooltip>
          </div> */}
        </article>
      ))}
    </>
  );
}
