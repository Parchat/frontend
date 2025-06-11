import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
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
    return NextResponse.redirect(new URL('/login', req.url));
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
