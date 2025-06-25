import Link from 'next/link';

export default function Footer() {
  return (
    <section className="flex flex-col p-8 lg:px-20 gap-8 bg-linear-to-b from-mediumblue via-slate-950 to-violet-950">
      <div className="flex flex-row justify-between py-16 border-b gap-10 flex-wrap lg:flex-nowrap">
        <div className="space-y-2 text-center lg:text-left">
          <h3 className="text-xl font-semibold motion-safe:animate-bounce">ParChat</h3>
          <h2 className="text-4xl font-bold">
            <span className="hover:text-purple-400 transition-colors duration-300">Comunica</span>,{' '}
            <span className="hover:text-indigo-400 transition-colors duration-300">Conecta</span> y{' '}
            <span className="hover:text-slate-400 transition-colors duration-300">Transmite</span>
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-end flex-wrap gap-10 lg:gap-32">
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-semibold">Equipo orgulloso</h3>
            <ul className="space-y-3">
              <li>Somos univallunos</li>
              <li>Otros Proyectos en Github!</li>
              <li>
                <a
                  href="https://github.com/Parchat"
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Parchat
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-semibold">En las salas puedes</h3>
            <ul className="space-y-3">
              <li>Buscar</li>
              <li>Crear</li>
              <li>
                <Link
                  href="/login"
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                >
                  Unirse
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li>Tuluá, Valle</li>
              <li>Colombia</li>
              <li>3000000000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center lg:justify-between px-4 text-[14px] text-purple flex-wrap lg:flex-nowrap">
        <p>© 2025 ParChat. Todos los derechos reservados.</p>
        <p>
          Hecho con amor por el equipo{' '}
          <a href="https://rippio.netlify.app" target="_blank" rel="noopener noreferrer">
            Rippio{' '}
          </a>
          ♥
        </p>
      </div>
    </section>
  );
}
