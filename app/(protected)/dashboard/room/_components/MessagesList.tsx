interface Props {
  id: string;
}

export default async function MessagesList({ id }: Props) {
  const messages = await fetchMessages(id);
  return (
    <div className="overflow-y-auto p-4 overflow-auto">
      {messages.map(msg => (
        <div key={msg} className="bg-darkblue-2 p-4 rounded-2xl mb-4">
          <p className="text-sm">{msg}</p>
        </div>
      ))}
    </div>
  );
}

async function fetchMessages(roomId: string): Promise<string[]> {
  // Simula una llamada a una API externa
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([`Mensaje 1 de la sala ${roomId}`, `Mensaje 2 de la sala ${roomId}`]);
    }, 1000);
  });
}
