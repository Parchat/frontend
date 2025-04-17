import Image from 'next/image';
import Link from 'next/link';

export default function Aside() {
  return (
    <aside className="flex flex-col justify-around h-full bg-darkblue text-white p-5">
      <div>
        <h1>Parchat</h1>
      </div>
      <nav>
        <ul className="flex flex-col gap-10">
          <li>
            {/* icon */}
            <Link href={`/dashboard`}>Mis Salas</Link>
          </li>
          <li>
            {/* icon */}
            <Link href={`/dashboard/profile`}>Mi perfil</Link>
          </li>
          <li>
            {/* icon */}
            <Link href={`/dashboard/configuration`}>Configuración</Link>
          </li>
          <li>
            {/* icon */}
            <Link href={`/dashboard/information`}>Información</Link>
          </li>
          <li>
            {/* icon */}
            <Link href={`/dashboard/owners`}>Autores</Link>
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
  );
}
