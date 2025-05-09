import AsideDashboard from '../_components/AsideDashboard';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="text-white flex flex-col-reverse lg:grid lg:grid-cols-[15rem_auto] h-dvh w-screen bg-darkpurple">
        <AsideDashboard />
        {children}
      </main>
    </div>
  );
}
