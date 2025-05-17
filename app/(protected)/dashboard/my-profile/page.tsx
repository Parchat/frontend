'use client';
import { WrenchIcon } from '@/app/_ui/icons';
import Image from 'next/image';
import { useUserProfile } from '../_hooks/useUserProfile';
import LoadingEmoji from '@/app/_components/LoadingEmoji';

export default function MyProfile() {
  const { userForm, handleChange, handleSubmit, loading } = useUserProfile();

  if (loading) return <LoadingEmoji />;

  return (
    <section className="w-full h-full overflow-y-auto flex flex-col justify-center items-center">
      <button className="lg:hidden bg-transparent rounded p-2 m-1.5 ml-auto cursor-pointer font-bold h-fit w-fit border-2 border-red-400 text-xs md:text-base">
        Cerrar sesión
      </button>
      <div className="flex flex-col gap-5 items-center justify-center h-full w-[80%]">
        <div className="flex items-center justify-center gap-2 p-5 bg-lightblue rounded-lg shadow-md">
          <WrenchIcon />
          <p className="to-black text-xs md:text-base">
            En esta sección puedes personalizar tu perfil a tu gusto, ¡recuerda no usar palabras{' '}
            <strong>ofensivas</strong>!
          </p>
        </div>
        <div className="flex justify-start items-center gap-5 w-full flex-col sm:flex-row">
          <Image
            width={150}
            height={150}
            alt="image of user"
            src="https://picsum.photos/400/300"
            className="rounded-full w-full max-w-[150px] object-cover aspect-square flex-1/4"
          />
          <button className="bg-purple rounded p-2 cursor-pointer font-bold w-fit text-xs md:text-base">
            Editar foto
          </button>
          <button className="bg-transparent rounded p-2 cursor-pointer font-bold w-fit border-2 border-violet-400 text-xs md:text-base">
            Eliminar foto
          </button>
        </div>
        <form className="w-full flex flex-col gap-5" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="displayName" className="font-bold">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="displayName"
                name="displayName"
                placeholder="Nombre de usuario"
                className="w-full p-2 rounded bg-transparent border-2 border-violet-400 placeholder:text-violet-300 text-violet-300"
                value={userForm.displayName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="font-bold">
                Correo electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                className="w-full p-2 rounded bg-transparent border-2 border-violet-400 placeholder:text-violet-300 text-violet-300"
                value={userForm.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="font-bold">
                Nueva contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nueva contraseña"
                className="w-full p-2 rounded bg-transparent border-2 border-violet-400 placeholder:text-violet-300 text-violet-300"
                value={userForm.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="font-bold">
                Confirmar contraseña
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirmar contraseña"
                className="w-full p-2 rounded bg-transparent border-2 border-violet-400 placeholder:text-violet-300 text-violet-300"
                value={userForm.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="bg-transparent rounded p-2 cursor-pointer font-bold w-fit border-2 border-violet-400 text-xs md:text-base m-auto">
            Guardar cambios
          </button>
        </form>
      </div>
    </section>
  );
}
