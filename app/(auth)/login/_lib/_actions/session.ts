// app/actions/session.ts
'use server';

import { cookies } from 'next/headers';

export async function createSession(token: string) {
  (await cookies()).set('session', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 1 semana
  });
  console.log('Session created with token:', token);
}

export async function deleteSession() {
  (await cookies()).delete('session');
  console.log('Session deleted');
}
