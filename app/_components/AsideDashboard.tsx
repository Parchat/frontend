'use client';
import Image from 'next/image';
import Link from 'next/link';
import { AnonymousMaskIcon, InfoIcon, RoomIcon } from '../_ui/icons';
import { useIsMobileLarge } from '../_hooks/useIsMobileLarge';
import { useAuth } from '../_hooks/useAuth';
import { useRouter } from 'next/navigation';

export default function AsideDashboard() {
  const { isMobileLg } = useIsMobileLarge();
  const router = useRouter();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    router.push('/login');
  };

  return (
    <>
      {/* Desktop aside */}
      {!isMobileLg && (
        <aside className="hidden lg:flex lg:flex-col justify-around h-100vh bg-darkblue text-white p-5">
          <div>
            <Link href={`/dashboard`}>
              <Image
                width={300}
                height={300}
                alt="logo of the app"
                src="/parchat-logo.png"
                className="object-cover mb-5 p-5"
              />
            </Link>
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
                <Link href={`/dashboard/my-profile`} className="flex items-center gap-2">
                  <AnonymousMaskIcon className="w-7 h-7" />
                  Mi perfil
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/information`} className="flex items-center gap-2">
                  <InfoIcon className="w-7 h-7" />
                  Descubre
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="flex flex-col gap-2 w-full">
              {/* <Image
                width={50}
                height={50}
                alt="image of user"
                src="https://picsum.photos/400/300"
                className="rounded-full w-12 h-12 object-cover"
              /> */}
              <h3 className="font-semibold text-center">{user?.displayName}</h3>
            </div>
            <button
              className="bg-purple rounded p-2 w-[80%] cursor-pointer font-bold"
              onClick={handleLogout}
            >
              Cerrar sesión
            </button>
          </div>
        </aside>
      )}
      {/* Mobile aside */}
      {isMobileLg && (
        <aside className="lg:hidden h-13 flex justify-between items-center">
          <nav className="w-full h-full">
            <ul className="w-full h-full grid grid-cols-3 bg-darkblue rounded-tl-2xl rounded-tr-2xl items-center justify-items-center">
              <li>
                <Link href={`/dashboard`} className="flex items-center gap-2">
                  <RoomIcon className="w-8 h-8" />
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/my-profile`} className="flex items-center gap-2">
                  <AnonymousMaskIcon className="w-8 h-8 text-white" />
                </Link>
              </li>
              <li>
                <Link href={`/dashboard/information`} className="flex items-center gap-2">
                  <InfoIcon className="w-8 h-8" />
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
}
