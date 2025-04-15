import '@/app/_ui/globals.css';
import { raleway } from '../_ui/fonts';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${raleway.className} antialiased px-16 bg-darkblue text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
