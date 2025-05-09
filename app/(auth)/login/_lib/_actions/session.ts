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
}

export async function deleteSession() {
  (await cookies()).delete('session');
}
