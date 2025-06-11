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
            <Image src="/w-logo.png" alt="ParChat Logo" width={130} height={20} draggable={false} />
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
          className={`${opened ? 'top-[10dvh]' : 'top-[-20dvh]'} transition-all duration-1000 ease-in-out w-[100dvw] h-[20dvh] bg-darkblue absolute z-10 border-t-2 border-t-purple border-b-2 border-b-purple`}
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
      <div className="w-full justify-between items-center gap-5 p-4 px-8 font-semibold text-white text-[14px] hidden sm:flex">
        <Link href="/" className="items-center gap-4 hidden lg:block">
          <Image src="/w-logo.png" alt="ParChat Logo" width={160} height={20} draggable={false} />
        </Link>
        <div className="flex">
          <ul className="flex justify-between gap-12 text-slate-300">
            <li>
              <Link
                href="/"
                className="hover:text-violet-300 hover:tracking-wider transition-all duration-300"
              >
                Información
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-violet-300 hover:tracking-wider transition-all duration-300"
              >
                Salas
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="hover:text-violet-300 hover:tracking-wider transition-all duration-300"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-8">
          <Link
            href="/login"
            className="bg-purple-900 rounded p-2 px-4 hover:bg-purple-800 transition-all duration-300"
          >
            Parchemos
          </Link>
        </div>
      </div>
    </header>
  );
}
