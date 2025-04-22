import RoomList from './_components/RoomList';

export default function Dashboard() {
  return (
    <main className="w-full h-full overflow-auto flex flex-col">
      <header className="w-full h-15 bg-semidarkpurple flex justify-center items-center">
        <h1 className="font-bold text-2xl">Mis Chats</h1>
      </header>
      <div className="h-full w-full items-center justify-center overflow-auto">
        <RoomList />
      </div>
    </main>
  );
}
