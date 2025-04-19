import AsideDashboard from '../_components/AsideDashboard';

export default function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main className="text-white flex flex-col lg:grid lg:grid-cols-[15rem_auto] h-screen w-screen bg-darkpurple">
        <AsideDashboard />
        {children}
        <div className="block lg:hidden h-10 rounded-2xl w-full bg-darkblue" />
      </main>
    </div>
  );
}
