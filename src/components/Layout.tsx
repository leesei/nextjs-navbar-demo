import Footer from "./Footer";
import Header from "./Header";

export default function Layout({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <main className={`flex flex-col ${className}`}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
