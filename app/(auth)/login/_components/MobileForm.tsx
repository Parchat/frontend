interface Props {
  mobileModeLogin: boolean;
  setMobileModeLogin: (value: boolean) => void;
}
export default function MobileForm({ mobileModeLogin, setMobileModeLogin }: Props) {
  return (
    <div className="flex lg:hidden gap-10 justify-between w-full">
      <section
        className={`${mobileModeLogin ? 'visible opacity-100' : 'invisible opacity-0'} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in w-[100%] flex flex-col items-center gap-5 max-w-[600px] mx-auto`}
      >
        <header className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-extrabold text-center">
            Mantente Comunicado en Cualquier Lugar
          </h1>
          <h2>Inicia sesión para acceder a tus salas</h2>
        </header>
        <form className="flex flex-col gap-5 w-[80%]">
          <div className="flex flex-col gap-1">
            <label htmlFor="email-login-mobile" className="font-bold">
              Tu correo
            </label>
            <input
              id="email-login-mobile"
              type="text"
              placeholder="Correo electrónico"
              autoComplete="email"
              className="w-full border-1 border-purple-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="password-login-mobile" className="font-bold">
              Tu contraseña
            </label>
            <input
              id="password-login-mobile"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              className="w-full border-1 border-purple-300 p-2 rounded"
            />
          </div>
          <button className="bg-purple rounded p-2">Ingresar a la plataforma</button>
        </form>
        <div className="flex gap-1">
          <p>¿Aún no tienes una cuenta?</p>
          <button className="text-purple cursor-pointer" onClick={() => setMobileModeLogin(false)}>
            Regístrate
          </button>
        </div>
      </section>

      <section
        className={`${mobileModeLogin ? 'invisible opacity-0' : 'visible opacity-100'} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-500 ease-in w-[100%] flex flex-col items-center gap-5 max-w-[600px] mx-auto`}
      >
        <header className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-extrabold text-center">Regístrate y Conecta</h1>
          <h2>Podrás guardar tus conversaciones y salas</h2>
        </header>
        <form className="flex flex-col gap-5 w-[80%]">
          <div className="flex flex-col gap-1">
            <label htmlFor="user-register-mobile" className="font-bold">
              Tu ususuario
            </label>
            <input
              id="user-register-mobile"
              type="text"
              placeholder="Correo electrónico"
              className="w-full border-1 border-purple-300 p-2 rounded"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email-register-mobile" className="font-bold">
              Tu correo
            </label>
            <input
              id="email-register-mobile"
              type="text"
              placeholder="Correo electrónico"
              autoComplete="email"
              className="w-full border-1 border-purple-300 p-2 rounded"
            />
          </div>
          <div>
            <label htmlFor="password-register-mobile" className="font-bold">
              Tu contraseña
            </label>
            <input
              id="password-register-mobile"
              type="password"
              placeholder="Contraseña"
              autoComplete="current-password"
              className="w-full border-1 border-purple-300 p-2 rounded"
            />
          </div>
          <button className="bg-purple rounded p-2">Crear cuenta</button>
        </form>
        <div className="flex gap-1">
          <p>¿Ya tienes una cuenta?</p>
          <button className="text-purple cursor-pointer" onClick={() => setMobileModeLogin(true)}>
            Inicia sesión
          </button>
        </div>
      </section>
    </div>
  );
}
