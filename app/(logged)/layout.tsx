import '@/app/_ui/globals.css';
import { raleway } from '../_ui/fonts';
import Aside from '../_components/Aside';

export default function NoLoggedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${raleway.className} antialiased bg-darkblue text-white h-screen w-screen overflow-hidden grid grid-cols-[15rem_auto]`}
      >
        <Aside />
        <main>{children}</main>
      </body>
    </html>
  );
}
