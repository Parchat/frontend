import AsideRoom from '@/app/_components/AsideRoom';

export default function RoomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex lg:grid lg:grid-cols-[15rem_auto] h-screen w-full overflow-auto bg-darkpurple">
      <AsideRoom />
      {children}
    </div>
  );
}
