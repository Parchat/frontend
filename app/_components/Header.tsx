import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      {/* Desktop */}
      <div className="w-full flex justify-between items-center gap-5 py-6 font-semibold text-white text-[14px]">
        <Link href="/" className="items-center gap-4 hidden lg:block">
          <Image src="/w-logo.png" alt="ParChat Logo" width={160} height={20} />
        </Link>
        <div className="flex">
          <ul className="flex justify-between gap-5">
            <li>Información</li>
            <li>Salas</li>
            <li>Contacto</li>
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
