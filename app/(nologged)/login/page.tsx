'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Login() {
  const [mode, setMode] = useState('login');

  return (
    <main className="flex items-center min-h-screen w-full overflow-hidden">
      <Image
        src="/squares/multicolor_dark.png"
        alt="multicolor"
        width={0}
        height={0}
        className={`absolute w-[50vw] transition-all duration-700 ease-in-out ${mode === 'login' ? 'left-[-45%]' : 'left-0'} rounded-br-2xl rounded-tr-2xl`}
      />
      <div className="w-full">
        <div className="flex gap-10 justify-between w-full">
          <section className="w-[100%] flex flex-col items-center gap-5 max-w-[600px] mx-auto">
            <header className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-extrabold">Mantente Comunicado en Cualquier Lugar</h1>
              <h2>Inicia sesión para acceder a tus salas</h2>
            </header>
            <form className="flex flex-col gap-5 w-[80%]">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-bold">
                  Tu correo
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Correo electrónico"
                  className="w-full border-1 border-purple-300 p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-bold">
                  Tu contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className="w-full border-1 border-purple-300 p-2 rounded"
                />
              </div>
              <button className="bg-purple rounded p-2">Ingresar a la plataforma</button>
            </form>
            <div className="flex gap-1">
              <p>¿Aún no tienes una cuenta?</p>
              <button className="text-purple cursor-pointer" onClick={() => setMode('register')}>
                Regístrate
              </button>
            </div>
          </section>

          <section className="w-[100%] flex flex-col items-center gap-5 max-w-[600px] mx-auto">
            <header className="flex flex-col items-center gap-1">
              <h1 className="text-2xl font-extrabold">Regístrate y Conecta</h1>
              <h2>Podrás guardar tus conversaciones y salas</h2>
            </header>
            <form className="flex flex-col gap-5 w-[80%]">
              <div className="flex flex-col gap-1">
                <label htmlFor="user" className="font-bold">
                  Tu ususuario
                </label>
                <input
                  id="user"
                  type="text"
                  placeholder="Correo electrónico"
                  className="w-full border-1 border-purple-300 p-2 rounded"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-bold">
                  Tu correo
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="Correo electrónico"
                  className="w-full border-1 border-purple-300 p-2 rounded"
                />
              </div>
              <div>
                <label htmlFor="password" className="font-bold">
                  Tu contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Contraseña"
                  className="w-full border-1 border-purple-300 p-2 rounded"
                />
              </div>
              <button className="bg-purple rounded p-2">Crear cuenta</button>
            </form>
            <div className="flex gap-1">
              <p>¿Ya tienes una cuenta?</p>
              <button className="text-purple" onClick={() => setMode('login')}>
                Inicia sesión
              </button>
            </div>
          </section>
        </div>
      </div>
      <Image
        src="/squares/multicolor_dark.png"
        alt="multicolor"
        width={0}
        height={0}
        className={`absolute w-[50vw] transition-all duration-1000 ease-in-out ${mode === 'login' ? 'right-0' : 'right-[-45%]'} rounded-bl-2xl rounded-tl-2xl`}
      />
    </main>
  );
}
