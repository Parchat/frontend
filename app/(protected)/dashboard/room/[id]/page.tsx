import MessagesList from '../_components/MessagesList';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';

interface RouterProps {
  params: Promise<{
    id: string;
  }>;
}
export default async function RoomPage({ params }: RouterProps) {
  const { id } = await params;
  const messages = await fetchMessages();
  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-full overflow-auto">
      <div className="p-2 lg:p-4 bg-semidarkpurple w-full">
        <h2 className="text-lg lg:text-2xl font-bold">Nombre de la sala {id}</h2>
        <p className="text-xs">Pública</p>
      </div>
      <MessagesList room_id={id} initial_messages={messages} />
    </div>
  );
}

async function fetchMessages(): Promise<IMessage[]> {
  // Simula una llamada a una API externa
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          send_by: 'Danils',
          send_at: new Date().toISOString(),
          content: 'Hola, bienvenido a la sala!',
        },
        {
          id: '2',
          send_by: 'Valtimore',
          send_at: new Date().toISOString(),
          content: 'Hola! ¿Cómo están?',
        },
        {
          id: '3',
          send_by: 'Zers',
          send_at: new Date().toISOString(),
          content: '¡Todo bien! ¿Y tú?',
        },
        {
          id: '4',
          send_by: 'Liferip',
          send_at: new Date().toISOString(),
          content: '¡Genial! ¿Qué tal el clima?',
        },
        {
          id: '5',
          send_by: 'LIFERIP',
          send_at: new Date().toISOString(),
          content: 'Sigue lloviendo, pero no importa.',
        },
        {
          id: '6',
          send_by: 'user1',
          send_at: new Date().toISOString(),
          content: '¡Qué suerte! Aquí hace mucho calor.',
        },
        {
          id: '7',
          send_by: 'user2',
          send_at: new Date().toISOString(),
          content: '¿Alguien sabe qué hora es?',
        },
        {
          id: '8',
          send_by: 'user1',
          send_at: new Date().toISOString(),
          content: 'Son las 3 PM.',
        },
        {
          id: '9',
          send_by: 'user2',
          send_at: new Date().toISOString(),
          content: 'Gracias!',
        },
        {
          id: '10',
          send_by: 'user1',
          send_at: new Date().toISOString(),
          content: 'De nada!',
        },
        {
          id: '11',
          send_by: 'user2',
          send_at: new Date().toISOString(),
          content: '¿Alguien quiere jugar un juego?',
        },
        {
          id: '12',
          send_by: 'user1',
          send_at: new Date().toISOString(),
          content: '¡Sí! ¿Qué juego?',
        },
        {
          id: '13',
          send_by: 'user2',
          send_at: new Date().toISOString(),
          content:
            'Podemos jugar a adivinar el tamaño de mi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aa a a a aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' +
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        },
      ]);
    }, 2000);
  });
}
