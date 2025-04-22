'use client';

import { SendIcon } from '@/app/_ui/icons';
import { useEffect, useRef, useState } from 'react';

interface Props {
  onSend: (msg: string) => void;
  bottomRef: React.RefObject<HTMLDivElement | null>;
}

export default function MessageInput({ onSend, bottomRef }: Props) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Resetear altura para cálculo
      textarea.style.height = 'auto';
      // Obtener altura máxima del CSS (max-h-48 = 192px)
      const maxHeight = parseInt(getComputedStyle(textarea).maxHeight, 10);
      // Aplicar la menor altura entre contenido y máximo
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight) - 10}px`;
    }
  }, [message]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message.trim());
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
    setMessage('');
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim()) {
        onSend(message.trim());
        setMessage('');
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full h-full bg-darkblue-2 flex items-center rounded-2xl"
    >
      <div className="w-full h-full">
        <label htmlFor="message" hidden />
        <textarea
          ref={textareaRef}
          id="message"
          className="w-full min-h-5 resize-none overflow-y-auto outline-none p-4 max-h-48"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={onKeyDown}
          rows={1}
          placeholder="Escribe un mensaje"
        />
      </div>
      <button type="submit" className="p-4 cursor-pointer">
        <SendIcon />
      </button>
    </form>
  );
}
