import Header from '../_components/Header';
import Footer from '../_components/Footer';

export default function NoLoggedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-darkblue text-white">
      <Header />
      <main className="px-5 lg:px-16">{children}</main>
      <Footer />
    </div>
  );
}
