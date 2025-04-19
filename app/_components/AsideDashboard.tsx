'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AnonymousMaskIcon, GearIcon, InfoIcon, LinkIcon, RoomIcon } from '../_ui/icons';
import { useIsMobileLarge } from '../_hooks/useIsMobileLarge';

export default function AsideDashboard() {
  const { isMobileLg } = useIsMobileLarge();

  return (
    <>
      {/* Desktop aside */}
      {!isMobileLg && (
        <aside className="hidden lg:flex lg:flex-col justify-around h-100vh bg-darkblue text-white p-5">
          <div>
            <h1>Parchat</h1>
          </div>
          <nav>
            <ul className="flex flex-col gap-10">
              <li>
                <Link href={`/dashboard`} className="flex items-center gap-2">
                  <RoomIcon className="w-7 h-7" />
                  <span>Mis Chats</span>
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/profile`} className="flex items-center gap-2">
                  <AnonymousMaskIcon className="w-7 h-7" />
                  Mi perfil
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/configuration`} className="flex items-center gap-2">
                  <GearIcon className="w-7 h-7" />
                  Configuración
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/information`} className="flex items-center gap-2">
                  <InfoIcon className="w-7 h-7" />
                  Información
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/owners`} className="flex items-center gap-2">
                  <LinkIcon className="w-7 h-7" />
                  Autores
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex items-center gap-2 w-full">
              <Image
                width={50}
                height={50}
                alt="image of user"
                src="https://picsum.photos/400/300"
                className="rounded-full w-12 h-12 object-cover"
              />
              <div>
                <h3 className="font-semibold">Valentina londoño</h3>
                <p className="text-sm text-gray-400">
                  &quot;<span>admirando un felino</span>&quot;
                </p>
              </div>
            </div>
            <button className="bg-purple rounded p-2 w-[80%] cursor-pointer font-bold">
              Cerrar sesión
            </button>
          </div>
        </aside>
      )}
      {/* Mobile aside */}
      {isMobileLg && (
        <aside className="absolute lg:hidden bottom-0 left-0 right-0 h-10 flex justify-between items-center">
          <nav className="w-full h-full">
            <ul className="w-full h-full grid grid-cols-5 bg-darkblue rounded-tl-2xl rounded-tr-2xl items-center justify-items-center">
              <li>
                <Link href={`/dashboard`} className="flex items-center gap-2">
                  <RoomIcon className="w-7 h-7" />
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/profile`} className="flex items-center gap-2">
                  <AnonymousMaskIcon className="w-7 h-7 text-white" />
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/configuration`} className="flex items-center gap-2">
                  <GearIcon className="w-7 h-7" />
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/information`} className="flex items-center gap-2">
                  <InfoIcon className="w-7 h-7" />
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/owners`} className="flex items-center gap-2">
                  <LinkIcon className="w-7 h-7" />
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
}
