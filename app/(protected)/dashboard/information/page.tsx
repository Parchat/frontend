import RoomSearch from '../_components/RoomSearch';
import CreateChat from '../room/_components/CreateChat';

export default function InformationPage() {
  return (
    <section className="w-full h-full overflow-auto flex flex-col">
      <header className="w-full h-15 bg-semidarkpurple flex justify-center items-center">
        <h1 className="font-bold text-2xl">Información</h1>
      </header>
      <div className="w-full flex flex-col p-5 justify-center items-center">
        <p>
          Parchat está diseñado para facilitar la comunicación entre diferentes personas y
          comunidades manteniendo la privacidad de los usuario. Puedes crear salas de chat, unirte a
          ellas y participar en conversaciones en tiempo real.
        </p>
        <CreateChat />
      </div>
      <div className="w-full h-1 bg-gray-300 my-1" />
      <div className="w-full h-full p-5 flex flex-col gap-5">
        <RoomSearch />
      </div>
    </section>
  );
}
