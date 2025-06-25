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

export async function createPendingPath(path: string) {
  (await cookies()).set('pendingPath', path, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 1, // 1 dia
  });
}

export async function deletePendingPath() {
  (await cookies()).delete('pendingPath');
}

export async function deleteSession() {
  (await cookies()).delete('session');
}
