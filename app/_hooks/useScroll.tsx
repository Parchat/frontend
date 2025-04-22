import { useEffect, useRef, useState } from 'react';
interface Props<T> {
  items: T[];
}
export default function useIsBottom<T>({ items }: Props<T>) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [isInBottom, setIsInBottom] = useState(true);

  // Detectar si el usuario scrollea manualmente
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const nearBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 50;
      setIsInBottom(nearBottom);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto scroll solo si el usuario está al fondo
  useEffect(() => {
    if (isInBottom) {
      bottomRef.current?.scrollIntoView({ behavior: 'auto' });
    }
  }, [items, isInBottom]);

  return { containerRef, bottomRef };
}
