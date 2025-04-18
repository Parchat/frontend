import '@/app/_ui/globals.css';
import { raleway } from '../_ui/fonts';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parchat',
  description:
    'Comunícate y conecta con diferentes comunidades a través de salas de chat en tiempo real',
  icons: {
    icon: '/favicon.jpg',
  },
  openGraph: {
    title: 'Parchat - Salas de chat para comunidades',
    description:
      'Únete a diferentes comunidades y chatea en tiempo real. Crea tus propias salas y conecta con personas que comparten tus intereses.',
    images: ['/favicon.jpg'], // Ruta de la imagen para compartir
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.className} antialiased px-16 bg-darkblue text-white overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
