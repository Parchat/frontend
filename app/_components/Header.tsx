'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
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
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="w-full justify-between items-center gap-5 p-4 px-8 font-semibold text-white text-[14px] hidden sm:flex">
        <Link href="/" className="items-center gap-4 block">
          <Image src="/w-logo.png" alt="ParChat Logo" width={160} height={20} draggable={false} />
        </Link>
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
