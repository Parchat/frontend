export default function AsideRoom() {
  return (
    <aside className="hidden lg:flex flex-col w-60 bg-semidarkpurple h-screen border-r border-gray-700">
      <div className="flex flex-col p-4 overflow-y-auto">
        {/* Aquí puedes agregar la lista de salas de chat */}
        <p className="text-gray-400">Lista de salas de chat aquí</p>
      </div>
    </aside>
  );
}
