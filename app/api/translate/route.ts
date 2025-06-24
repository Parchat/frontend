/* eslint-disable @typescript-eslint/no-require-imports */
import { NextRequest } from 'next/server';
const { Translate } = require('@google-cloud/translate').v2;

const getGoogleTranslateClient = () => {
  const apiKey = process.env.GOOGLE_TRANSLATE_API_KEY;

  return new Translate({
    key: apiKey,
  });
};

interface TranslationRequest {
  content: string[];
  languageCode: string;
}

export async function POST(req: NextRequest) {
  const body: TranslationRequest = await req.json();
  const client = getGoogleTranslateClient();
  const [translatedText] = await client.translate(body.content, body.languageCode);
  return Response.json(translatedText);
}
