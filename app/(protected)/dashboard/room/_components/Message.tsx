import { useAuth } from '@/app/_hooks/useAuth';
import { useTranslateMessage } from '@/app/_hooks/useTranslateMessage';
import { IMessage } from '@/app/_lib/_interfaces/IMessage';

interface Props {
  message: IMessage;
  selectUser: (message: IMessage) => void;
}

const colorList = [
  'rgba(255, 99, 132, 0.1)', // Rojo opaco
  'rgba(54, 162, 235, 0.1)', // Azul opaco
  'rgba(255, 159, 64, 0.1)', // Naranja opaco
  'rgba(75, 192, 192, 0.1)', // Verde opaco
  'rgba(153, 102, 255, 0.1)', // Púrpura opaco
  'rgba(255, 205, 86, 0.1)', // Amarillo opaco
  'rgba(255, 99, 71, 0.1)', // Tomate opaco
  'rgba(173, 216, 230, 0.1)', // Azul claro opaco
  'rgba(240, 128, 128, 0.1)', // Rosa claro opaco
  'rgba(144, 238, 144, 0.1)', // Verde claro opaco
];

function stringToRGBa(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash += str.charCodeAt(i);
  }
  const index = hash % colorList.length;
  return colorList[index];
}

export default function Message({ message, selectUser }: Props) {
  const { user } = useAuth();
  const { translated, translating, handleTranslate } = useTranslateMessage();

  const handleSelectUser = () => {
    if (message.userId !== user?.uid) {
      selectUser(message);
    }
  };

  if (!message.id) return null;

  const color = stringToRGBa(message.userId);

  return (
    <div
      className="relative rounded-2xl py-4 px-4 pr-20 flex flex-col gap-2 w-full h-fit max-w-fit group"
      style={{ backgroundColor: color }}
    >
      {message.userId !== user?.uid ? (
        <p className="text-xs lg:text-sm font-bold cursor-pointer" onClick={handleSelectUser}>
          {message.displayName}
        </p>
      ) : (
        <p className="text-xs lg:text-sm font-bold">Tú</p>
      )}
      <p className="text-xs lg:text-sm break-words whitespace-pre-wrap">
        {translated ? translated : message.content}
      </p>
      <div className="absolute opacity-0 group-hover:opacity-100 top-0 left-0 w-full h-full flex items-center justify-end pointer-events-none">
        <button
          className="pointer-events-auto px-2 cursor-pointer"
          disabled={translating}
          onClick={() => handleTranslate(message.content)}
        >
          {translating ? '🔄' : '🌐'}
        </button>
      </div>
      <p className="text-xs text-gray-400 absolute bottom-2 right-2">
        {message.status === 'pending'
          ? '⏱'
          : new Date(message.createdAt).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
      </p>
    </div>
  );
}
