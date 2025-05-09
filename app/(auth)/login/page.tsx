'use client';
import Image from 'next/image';
import { useState } from 'react';
import DesktopForm from './_components/DesktopForm';
import MobileForm from './_components/MobileForm';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/_hooks/useAuth';

export default function Login() {
  const [mode, setMode] = useState('login');
  const { login, register } = useAuth();
  const router = useRouter();

  const handleLogin = async (payload: FormData) => {
    await login(payload);
    router.push('/dashboard');
  };

  const handleRegister = async (payload: FormData) => {
    await register(payload);
    router.push('/dashboard');
  };

  return (
    <section className="flex items-center min-h-screen w-full">
      <Image
        src="/squares/multicolor_dark.png"
        alt="multicolor"
        width={0}
        height={0}
        className={`hidden lg:block absolute w-[50vw] transition-all duration-700 ease-in-out ${mode === 'login' ? 'left-[-45%]' : 'left-0'} rounded-br-2xl rounded-tr-2xl`}
      />
      <div className="w-full">
        {/* Desktop */}
        <DesktopForm setMode={setMode} registerAction={handleRegister} loginAction={handleLogin} />

        {/* Mobile */}
        <MobileForm registerAction={handleRegister} loginAction={handleLogin} />
      </div>
      <Image
        src="/squares/multicolor_dark.png"
        alt="multicolor"
        width={0}
        height={0}
        className={`hidden lg:block absolute w-[50vw] transition-all duration-1000 ease-in-out ${mode === 'login' ? 'right-0' : 'right-[-45%]'} rounded-bl-2xl rounded-tl-2xl`}
      />
    </section>
  );
}
