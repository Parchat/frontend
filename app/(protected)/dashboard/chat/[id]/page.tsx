'use client';
import { useQuery } from '@tanstack/react-query';
import LoadingEmoji from '@/app/_components/LoadingEmoji';
import { use } from 'react';
import MessagesList from '../_components/MessageList';
import { getChatById } from '../../_apis/chats';
import { useChatMessages } from '../hooks/useChatMessages';

interface RouterProps {
  params: Promise<{
    id: string;
  }>;
}
export default function ChatPage({ params }: RouterProps) {
  const id = use(params).id;

  const { messages, loading } = useChatMessages({ id });

  const { data: chat, isLoading: chatLoading } = useQuery({
    queryKey: [`chat-${id}`],
    queryFn: () => getChatById(id),
  });

  if (loading || chatLoading) return <LoadingEmoji />;

  if (!chat) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <h2 className="text-lg text-gray-500">Chat no encontrado</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[auto_1fr_auto] w-full h-full overflow-auto">
      <div>
        <div className="p-3 lg:p-5 bg-semidarkpurple w-full">
          <h2 className="text-lg lg:text-2xl font-bold">Chat Directo</h2>
        </div>
      </div>
      {chat && <MessagesList chat={chat} initial_messages={messages ?? []} />}
    </div>
  );
}
