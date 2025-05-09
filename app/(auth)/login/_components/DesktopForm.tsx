'use client';
import { useFormStatus } from 'react-dom';
interface Props {
  setMode: (mode: string) => void;
  registerAction: (payload: FormData) => void;
  loginAction: (payload: FormData) => void;
}

export default function DesktopForm({ setMode, registerAction, loginAction }: Props) {
  return (
    <div className="hidden lg:flex gap-10 justify-between w-full">
      <section className="w-[100%] flex flex-col items-center gap-5 max-w-[600px] mx-auto">
        <header className="flex flex-col items-center gap-1">
          <h1 className="text-2xl font-extrabold text-center">
            Mantente Comunicado en Cualquier Lugar
          </h1>
          <h2>Inicia sesión para acceder a tus salas</h2>
        </header>
        <form className="flex flex-col gap-5 w-[80%]" action={loginAction}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email-login-desktop" className="font-bold">
              Tu correo
            </label>
            <input
              id="email-login-desktop"
              type="text"
              placeholder="Correo electrónico"
              autoComplete="email"
              className="w-full border-1 border-purple-300 p-2 rounded"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password-login-desktop" className="font-bold">
              Tu contraseña
            </label>
            <input
              id="password-login-desktop"
              type="password"
              placeholder="Contraseña"
              className="w-full border-1 border-purple-300 p-2 rounded"
              autoComplete="current-password"
              name="password"
            />
          </div>
          <SubmitButton text="Ingresar a la plataforma" />
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
          <h1 className="text-2xl font-extrabold text-center">Regístrate y Conecta</h1>
          <h2>Podrás guardar tus conversaciones y salas</h2>
        </header>
        <form className="flex flex-col gap-5 w-[80%]" action={registerAction}>
          <div className="flex flex-col gap-1">
            <label htmlFor="user-register-desktop" className="font-bold">
              Tu usuario
            </label>
            <input
              id="user-register-desktop"
              type="text"
              placeholder="Usuario"
              className="w-full border-1 border-purple-300 p-2 rounded"
              name="displayName"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email-register-desktop" className="font-bold">
              Tu correo
            </label>
            <input
              id="email-register-desktop"
              type="text"
              placeholder="Correo electrónico"
              autoComplete="email"
              className="w-full border-1 border-purple-300 p-2 rounded"
              name="email"
            />
          </div>
          <div>
            <label htmlFor="password-register-desktop" className="font-bold">
              Tu contraseña
            </label>
            <input
              id="password-register-desktop"
              type="password"
              placeholder="Contraseña"
              className="w-full border-1 border-purple-300 p-2 rounded"
              autoComplete="current-password"
              name="password"
            />
          </div>
          <SubmitButton text="Crear cuenta" />
        </form>
        <div className="flex gap-1">
          <p>¿Ya tienes una cuenta?</p>
          <button className="text-purple cursor-pointer" onClick={() => setMode('login')}>
            Inicia sesión
          </button>
        </div>
      </section>
    </div>
  );
}

function SubmitButton({ text }: { text: string }) {
  const { pending } = useFormStatus();
  return (
    <button disabled={pending} className="bg-purple rounded p-2 cursor-pointer">
      {pending ? 'Cargando...' : text}
    </button>
  );
}
