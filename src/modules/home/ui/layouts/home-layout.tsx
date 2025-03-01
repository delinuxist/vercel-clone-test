import Footer from "@/modules/home/ui/components/footer";
import Navbar from "@/modules/home/ui/components/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className='flex flex-col w-full min-h-screen'>
      <Navbar />
      <section className='flex-1'>{children}</section>
      <Footer />
    </main>
  );
}
