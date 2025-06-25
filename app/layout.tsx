import '@/app/_ui/globals.css';
import '@fontsource/quicksand/300.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';
import '@fontsource/raleway/300.css';
import '@fontsource/raleway/400.css';
import '@fontsource/raleway/500.css';
import '@fontsource/raleway/600.css';
import '@fontsource/raleway/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from 'next';
import { ToastContainer } from 'react-toastify';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Parchat',
  description:
    'Comunícate y conecta con diferentes comunidades a través de salas de chat en tiempo real',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Parchat - Salas de chat para comunidades',
    description:
      'Únete a diferentes comunidades y chatea en tiempo real. Crea tus propias salas y conecta con personas que comparten tus intereses.',
    images: ['/favicon.png'], // Ruta de la imagen para compartir
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
      <body className="font-raleway overflow-x-hidden">
        <Providers>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
