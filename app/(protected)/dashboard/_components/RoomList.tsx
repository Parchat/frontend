import { CancelIcon, DoorBellIcon } from '@/app/_ui/icons';
import { Tooltip } from '@mui/material';
import Link from 'next/link';

const salas = [
  {
    id: 1,
    name: 'Sala 1',
    created_by: 'Usuario 1',
    created_at: '2023-10-01',
  },
  {
    id: 2,
    name: 'Sala 2',
    created_by: 'Usuario 2',
    created_at: '2023-10-02',
  },
  {
    id: 3,
    name: 'Sala 3',
    created_by: 'Usuario 3',
    created_at: '2023-10-03',
  },
  {
    id: 4,
    name: 'Sala 4',
    created_by: 'Usuario 4',
    created_at: '2023-10-04',
  },
  {
    id: 5,
    name: 'Sala 5',
    created_by: 'Usuario 5',
    created_at: '2023-10-05',
  },
  {
    id: 6,
    name: 'Sala 6',
    created_by: 'Usuario 6',
    created_at: '2023-10-06',
  },
  {
    id: 7,
    name: 'Sala 7',
    created_by: 'Usuario 7',
    created_at: '2023-10-07',
  },
  {
    id: 8,
    name: 'Sala 8',
    created_by: 'Usuario 8',
    created_at: '2023-10-08',
  },
  {
    id: 9,
    name: 'Sala 9',
    created_by: 'Usuario 9',
    created_at: '2023-10-09',
  },
  {
    id: 10,
    name: 'Sala 10',
    created_by: 'Usuario 10',
    created_at: '2023-10-10',
  },
  {
    id: 11,
    name: 'Sala 11',
    created_by: 'Usuario 11',
    created_at: '2023-10-11',
  },
  {
    id: 12,
    name: 'Sala 12',
    created_by: 'Usuario 12',
    created_at: '2023-10-12',
  },
  {
    id: 13,
    name: 'Sala 13',
    created_by: 'Usuario 13',
    created_at: '2023-10-13',
  },
  {
    id: 14,
    name: 'Sala 14',
    created_by: 'Usuario 14',
    created_at: '2023-10-14',
  },
  {
    id: 15,
    name: 'Sala 15',
    created_by: 'Usuario 15',
    created_at: '2023-10-14',
  },
];

export default function RoomList() {
  return (
    <section className="w-full h-full flex flex-col gap-5 overflow-auto px-[5vw] py-5">
      {salas.map(sala => (
        <article key={sala.id} className="w-full flex gap-5 items-center justify-between">
          <Link
            href={`dashboard/room/${sala.id}`}
            className="flex gap-5 items-center justify-between bg-purple w-full p-3 rounded-2xl"
          >
            <p className="font-bold text-2xl lg:text-4xl">{sala.name}</p>
            <div className="hidden sm:flex flex-col items-center">
              <p className="font-semibold text-sm">
                Creado por: <span className="font-medium text-purple">{sala.created_by}</span>
              </p>
              <p className="font-semibold text-sm">
                Fecha: <span className="font-medium text-sm text-purple">{sala.created_at}</span>
              </p>
            </div>
          </Link>
          <div className="flex gap-5">
            <Tooltip title="Salir de la sala" placement="top">
              <button className="bg-purple rounded-full">
                <CancelIcon className="w-10 h-10 cursor-pointer" />{' '}
              </button>
            </Tooltip>
            <Tooltip title="Notificaciones" placement="top">
              <button className="bg-purple rounded-full">
                <DoorBellIcon className="w-10 h-10 cursor-pointer" />{' '}
              </button>
            </Tooltip>
          </div>
        </article>
      ))}
    </section>
  );
}
