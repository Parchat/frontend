import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { createPendingPath, deletePendingPath } from './app/(auth)/login/_lib/_actions/session';
const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/login', '/login-gest'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.some(
    route => path === route || path.startsWith(route + '/')
  );
  const isPublicRoute = publicRoutes.some(route => path === route || path.startsWith(route + '/'));

  const cookie = (await cookies()).get('session')?.value;
  const session = cookie ? cookie : null;

  if (isProtectedRoute && !session) {
    await createPendingPath(path);
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Obtener la ruta pendiente
  const pendingPath = (await cookies()).get('pendingPath')?.value;
  if (pendingPath && session) {
    console.log('Redirigiendo a la ruta pendiente:', pendingPath);
    await deletePendingPath();
    return NextResponse.redirect(new URL(pendingPath, req.url));
  }

  if (isPublicRoute && session) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

// Especifica en qué rutas debe ejecutarse
export const config = {
  matcher: ['/:path*'],
};
