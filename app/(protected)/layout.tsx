import Aside from '../_components/Aside';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="text-white flex flex-col lg:grid lg:grid-cols-[15rem_auto] antialiased h-screen w-screen bg-darkpurple">
        <Aside />
        {children}
        <div className="block lg:hidden h-15 rounded-2xl w-full" />
      </main>
    </div>
  );
}
