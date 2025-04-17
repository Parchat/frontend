export default function Footer() {
  return (
    <section className="flex flex-col p-8 gap-8 bg-linear-to-b from-black to-purple-950">
      <div className="flex flex-row justify-between py-16 border-b gap-10 flex-wrap">
        <div className="space-y-2 w-full">
          <h3 className="text-xl font-semibold">ParChat</h3>
          <h2 className="text-4xl font-bold whitespace-pre-line">Comunica, Conecta y Transmite</h2>
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-between flex-wrap gap-10">
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-semibold">Stacks</h3>
            <ul className="">
              <li>Sobre Nosotros</li>
              <li>Otros Proyectos</li>
              <li>GitHub</li>
            </ul>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-semibold">Info</h3>
            <ul className="">
              <li>Información</li>
              <li>Salas</li>
              <li>Registro</li>
            </ul>
          </div>
          <div className="text-center flex flex-col gap-2">
            <h3 className="font-semibold">Contacto</h3>
            <ul className="">
              <li>Tuluá, Valle</li>
              <li>Colombia</li>
              <li>3000000000</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between px-4 text-[14px] text-babyblue">
        <p>© 2025 ParChat. Todos los derechos reservados.</p>
        <p>Hecho con amor por el equipo de Rippio ♥</p>
      </div>
    </section>
  );
}
