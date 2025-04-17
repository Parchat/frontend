'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [opened, setOpened] = useState(false);
  return (
    <header>
      {/* Mobile */}
      <div className="w-full relative">
        <div className="flex bg-darkblue justify-between items-center p-4 sm:hidden w-full relative z-20 gap-5">
          <Link href="/" className="items-center gap-4 block lg:hidden">
            <Image src="/w-logo.png" alt="ParChat Logo" width={130} height={20} />
          </Link>
          <div className="flex items-center gap-5">
            <Link href="/login" className="bg-purple rounded p-2">
              Parchemos
            </Link>
            <Link href="/login-gest">Invitado</Link>
            <button onClick={() => setOpened(!opened)} className="text-white w-5">
              {opened ? 'X' : '☰'}
            </button>
          </div>
        </div>
        <div
          className={`${opened ? 'top-[10vh]' : 'top-[-20vh]'} transition-all duration-1000 ease-in-out w-[100vw] h-[20vh] bg-darkblue absolute z-10 border-t-2 border-t-purple border-b-2 border-b-purple`}
        >
          <ul className="flex flex-col justify-evenly items-center h-full w-full">
            <li>
              <Link href="/">Información</Link>
            </li>
            <li>
              <Link href="/">Salas</Link>
            </li>
            <li>
              <Link href="/">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full justify-between items-center gap-5 p-4 font-semibold text-white text-[14px] hidden sm:flex">
        <Link href="/" className="items-center gap-4 hidden lg:block">
          <Image src="/w-logo.png" alt="ParChat Logo" width={160} height={20} />
        </Link>
        <div className="flex">
          <ul className="flex justify-between gap-5">
            <li>
              <Link href="/">Información</Link>
            </li>
            <li>
              <Link href="/">Salas</Link>
            </li>
            <li>
              <Link href="/">Contacto</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Link href="/login" className="bg-purple rounded p-2">
            Parchemos
          </Link>
          <Link href="/login-gest">Entrar como Invitado</Link>
        </div>
      </div>
    </header>
  );
}
