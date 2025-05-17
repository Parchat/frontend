'use client';
import { useEffect } from 'react';
import AsideDashboard from '../_components/AsideDashboard';
import { useAuth } from '../_hooks/useAuth';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initializeAuth = useAuth(state => state.initializeAuth);

  useEffect(() => {
    const unsubscribe = initializeAuth() as (() => void) | undefined;

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [initializeAuth]);

  return (
    <div>
      <main className="text-white flex flex-col-reverse lg:grid lg:grid-cols-[15rem_auto] h-dvh w-screen bg-darkpurple">
        <AsideDashboard />
        {children}
      </main>
    </div>
  );
}
