import { useState } from 'react';
import { getTranslatedMessage } from '../(protected)/dashboard/_apis/messages';

export const useTranslateMessage = () => {
  const [translated, setTranslated] = useState<string | null>(null);
  const [translating, setTranslating] = useState<boolean>(false);

  const handleTranslate = async (content: string) => {
    setTranslating(true);

    if (translated) {
      setTranslated(null);
      setTranslating(false);
      return;
    }

    const translatedMessage = await getTranslatedMessage(content);

    if (translatedMessage) {
      setTranslated(translatedMessage);
    } else {
      setTranslated(null);
    }

    setTranslating(false);
  };

  return {
    translated,
    translating,
    handleTranslate,
  };
};
