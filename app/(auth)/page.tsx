import Image from 'next/image';
import homeDecoration from '@/public/home-decoration.svg';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-6 px-5 md:px-2 lg:px-4">
      <section className="flex flex-row justify-between items-start space-x-4">
        <div className="space-y-8 pt-16">
          <div className="text-left">
            <p className="text-[15px] font-semibold italic text-babyblue">
              Para todas tus necesidades
            </p>
            <h1 className="text-[2rem] lg:text-[3rem] font-black">
              Una web creada por personas para conectar con personas
            </h1>
          </div>
          <p className="text-[1rem] lg:text-[1.4rem] text-babyblue tracking-wider">
            Transmite tu mensaje en segundos con tus compañeros de trabajo, estudio, viaje, fiesta y
            completos desconocidos.
          </p>
          <Link href="/login-gest">
            <div className="px-4 py-2 inline-block bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
              Ingresar a una Sala
            </div>
          </Link>
        </div>
        <div className="hidden md:block lg:block relative w-[1400px] h-[600px] overflow-visible lg:mt-2">
          <Image
            src="/home-decoration-bg.svg"
            alt="Background Decoration"
            layout="responsive"
            width={1400}
            height={600}
            objectFit="cover"
            draggable={false}
            className="absolute md:mt-10 lg:mt-0 top-0 left-0 z-0 animate-rotate-slow"
          />
          <Image
            src={homeDecoration}
            alt="Chat Simulation"
            width={570}
            height={562}
            draggable={false}
            className="absolute w-[65%] lg:mt-8 md:top-2/5 lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-103 transition-transform duration-500 ease-in-out"
            placeholder="blur"
            blurDataURL="/home-decoration.svg"
          />
        </div>
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
        <div className="flex flex-col lg:flex-row gap-8 justify-between items-center">
          <div className="relative overflow-hidden rounded-xl w-[80vw] flex justify-center">
            <Image
              src="/home-decoration-2.svg"
              alt="Event"
              width={506}
              height={424}
              draggable={false}
              className="transition-transform duration-800 ease-in-out transform hover:scale-120 object-contain"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="bg-mediumblue text-white p-4 gap-2 flex flex-col rounded-xl transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-sm hover:shadow-blue-900">
              <h3 className="text-lg font-bold">Ideal para Eventos</h3>
              <p className="text-babyblue">
                Parchat es la solución perfecta para mantener a tus asistentes conectados y bien
                informados durante eventos y reuniones. Crea salas de chat personalizadas, comparte
                un código de acceso y permite que todos participen fácilmente desde cualquier lugar.
              </p>
            </div>

            <div className="bg-mediumblue text-white p-4 gap-2 flex flex-col rounded-xl transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-sm hover:shadow-blue-900">
              <h3 className="text-lg font-bold">Comunicación al Instante</h3>
              <p className="text-babyblue">
                Al igual que los servicios de mensajería más populares, aquí los mensajes llegan al
                momento de ser enviados, no te perderás ningún detalle.
              </p>
            </div>

            <div className="bg-mediumblue text-white p-4 gap-2 flex flex-col rounded-xl transition-all duration-300 ease-in-out hover:scale-103 hover:shadow-sm hover:shadow-blue-900">
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
              draggable={false}
              className="w-[50%] min-w-[350px] max-w-[400px] transition-all duration-500 ease-in-out hover:scale-104 hover:animate-pulse"
            />
            <div className="flex-col">
              <h3 className="text-2xl font-semibold text-purple mb-4">Eventos y Convenciones</h3>
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
              draggable={false}
              className="w-[50%] min-w-[350px] max-w-[400px] transition-all duration-500 ease-in-out hover:scale-104 hover:animate-pulse"
            />
            <div className="flex-col">
              <h3 className="text-2xl font-semibold text-purple mb-4">Universidades</h3>
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
              draggable={false}
              className="w-[50%] min-w-[350px] max-w-[400px] transition-all duration-500 ease-in-out hover:scale-104 hover:animate-pulse"
            />
            <div className="flex-col">
              <h3 className="text-2xl font-semibold text-purple mb-4">Ambientes Empresariales</h3>
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
