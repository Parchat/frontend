'use client';

import { IMessage } from '@/app/_lib/_interfaces/IMessage';
import { IChat } from '@/app/_lib/_interfaces/IChat';
import ChatsInit from '../../_components/ChatsInit';
import { useChatSocket } from '@/app/_hooks/useChatSocket';

interface Props {
  chat: IChat;
  initial_messages: IMessage[];
}

export default function MessagesList({ chat, initial_messages }: Props) {
  const { messages, pendingMessages, sendMessage } = useChatSocket({ initial_messages, chat });
  return (
    <ChatsInit
      messages={messages}
      pendingMessages={pendingMessages}
      sendMessage={sendMessage}
      chat={chat}
    />
  );
}
