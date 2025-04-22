import { IMessage } from '@/app/_interfaces/IMessage';

interface Props {
  message: IMessage;
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

export default function Message({ message }: Props) {
  const color = stringToRGBa(message.send_by);
  return (
    <div
      className="relative rounded-2xl py-4 px-4 pr-15 flex flex-col gap-2 w-full h-fit max-w-fit"
      style={{ backgroundColor: color }}
    >
      <p className="text-xs lg:text-sm font-bold">{message.send_by}</p>
      <p className="text-xs lg:text-sm break-words whitespace-pre-wrap">{message.content}</p>
      <p className="text-xs text-gray-400 absolute bottom-2 right-2">
        {message.send_at !== 'pending' &&
          message.send_at.toString().split('T')[1].split('.')[0].split(':').slice(0, 2).join(':')}
        {message.send_at === 'pending' && '⏱'}
      </p>
    </div>
  );
}

