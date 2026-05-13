import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function KoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
