import Link from 'next/link';

export default function LoginGest() {
  return (
    <section className="flex items-center justify-center min-h-screen w-full">
      <div className="flex flex-col w-full mx-auto max-w-[600px] gap-20">
        <div className="flex flex-col items-center gap-5">
          <h1 className="font-extrabold text-purple text-4xl text-center">
            Entra como Invitado y Únete a la Conversación
          </h1>
          <h2 className="italic text-sm">
            Conecta con otros asistentes desde cualquier parte del mundo.
          </h2>
        </div>
        <div className="flex flex-col items-center gap-10">
          <form className="flex flex-col gap-15 items-center w-full">
            <div className="flex border-2 border-purple-500 rounded-4xl items-center justify-center shadow-lg shadow-purple-300/50 w-full">
              <label htmlFor="username" className="sr-only" hidden>
                Nombre de usuario
              </label>
              <input
                id="username"
                className="w-full h-full p-4 border-none border-0 outline-none placeholder:text-center placeholder:font-semibold placeholder:text-white"
                type="text"
                placeholder="Tu usuario"
              />
            </div>
            <button className="bg-purple rounded p-2 w-[16rem] text-white font-semibold cursor-pointer">
              Entrar a las salas
            </button>
          </form>
          <div className="flex gap-1 text-center flex-col lg:flex-row">
            <p>¿Quieres crear una cuenta?</p>
            <Link className="text-purple" href={'/login'}>
              Click aquí
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
