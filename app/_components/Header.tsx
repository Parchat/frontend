import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center  py-6 font-semibold text-white text-[14px]">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/w-logo.png" alt="ParChat Logo" width={160} height={20} />
      </Link>
      <div className="flex">
        <ul className="flex space-x-12">
          <li>Información</li>
          <li>Salas</li>
          <li>Contacto</li>
        </ul>
      </div>
      <div className="flex space-x-8 items-center">
        <Link href="/login" className="bg-purple rounded p-2">
          Parchemos
        </Link>
        <Link href="/login-gest">Entrar como Invitado</Link>
      </div>
    </header>
  );
}
