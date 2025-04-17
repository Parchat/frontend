import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-6">
      <section className="flex flex-row justify-between items-start space-x-4">
        <div className="space-y-8 pt-16">
          <div className="text-left">
            <p className="text-[20px] font-semibold italic text-babyblue">
              Para todas tus necesidades
            </p>
            <h1 className="text-[2rem] lg:text-[3rem] font-black">
              Una web creada por personas para conectar con personas
            </h1>
          </div>
          <p className="text-[1rem] lg:text-[2rem] text-babyblue">
            Transmite tu mensaje en segundos con tus compañeros de trabajo, estudio, viaje, fiesta y
            completos desconocidos.
          </p>
          <button className="px-4 py-2 bg-blue rounded">Ingresar a una sala</button>
        </div>
        <Image
          src="/home-decoration.svg"
          alt="Chat Simulation"
          width={670}
          height={662}
          className="hidden lg:block"
        />
      </section>

      <section className="flex flex-col gap-8 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold capitalize">
            Entérate siempre de indicaciones, actualizaciones y alertas que se presenten
          </h2>
          <p className="text-lg text-babyblue">
            Gracias a nuestra plataforma, no volverás a perderte en los eventos. Recibe
            retroalimentación cuando lo necesites e interactúa con nuevas personas.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <Image src="/home-decoration-2.svg" alt="Event" width={506} height={424} className="" />
          <div className="flex flex-col gap-6">
            <div className="bg-mediumblue text-white p-4 gap-2 flex flex-col rounded-xl">
              <h3 className="text-lg font-bold">Ideal para Eventos</h3>
              <p className="text-babyblue">
                Parchat es la solución perfecta para mantener a tus asistentes conectados y bien
                informados durante eventos y reuniones. Crea salas de chat personalizadas, comparte
                un código de acceso y permite que todos participen fácilmente desde cualquier lugar.
              </p>
            </div>
            <div className="bg-mediumblue text-white p-4 gap-2 flex flex-col rounded-xl">
              <h3 className="text-lg font-bold">Comunicación al Instante</h3>
              <p className="text-babyblue">
                Al igual que los servicios de mensajería más populares, aquí los mensajes llegan al
                momento de ser enviados, no te perderás ningún detalle.
              </p>
            </div>
            <div className="bg-mediumblue text-white p-4 gap-2 flex flex-col rounded-xl">
              <h3 className="text-lg font-bold">Siempre Tienes el Control</h3>
              <p className="text-babyblue">
                Gestiona fácilmente los asistentes en tu evento, y elimina rápidamente a quienes
                puedan interferir con el ambiente de este.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-8 py-16">
        <div className="space-y-2">
          <p className="text-[16px] text-purple font-semibold">¿Dónde usar ParChat?</p>
          <h2 className="text-3xl font-bold capitalize">
            Conecta y comunica con nuestra plataforma
          </h2>
          <p>
            La forma más rápida y efectiva de mantener a todos conectados y bien informados. Ya sea
            en eventos, oficinas o aulas, Parchat facilita la comunicación en tiempo real y sin
            complicaciones.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between space-x-8 gap-10 ">
          <div className="flex flex-col gap-4">
            <Image
              src="/home-decoration-3.svg"
              alt="Event"
              width={0}
              height={0}
              className="w-[50%] min-w-[200px] max-w-[300px]"
            />
            <div className="flex-col">
              <h3 className="text-2xl font-semibold text-purple ">Eventos y Convenciones</h3>
              <p className="text-[14px]">
                Mantén a todos los asistentes conectados y al tanto de anuncios importantes.
                Perfecto para convenciones, conciertos y festivales.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/home-decoration-4.svg"
              alt="Event"
              width={0}
              height={0}
              className="w-[50%] min-w-[200px] max-w-[300px]"
            />
            <div className="flex-col">
              <h3 className="text-2xl font-semibold text-purple ">Universidades</h3>
              <p className="text-[14px]">
                Resuelve dudas de clase, organiza trabajos en grupo o coordina transporte con tus
                compañeros. ¡Comunicación sin complicaciones!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src="/home-decoration-5.svg"
              alt="Event"
              width={0}
              height={0}
              className="w-[50%] min-w-[200px] max-w-[300px]"
            />
            <div className="flex-col">
              <h3 className="text-2xl font-semibold text-purple ">Ambientes Empresariales</h3>
              <p className="text-[14px]">
                Crea chats de oficina para coordinar tareas sin necesidad de compartir números
                personales. Comunicación rápida y efectiva en el trabajo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
