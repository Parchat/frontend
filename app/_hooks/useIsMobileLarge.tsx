'use client';
import { useEffect, useState } from 'react';

export const useIsMobileLarge = () => {
  const [isMobileLg, setIsMobileLg] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobileLg(true);
      } else {
        setIsMobileLg(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { isMobileLg };
};
