import Footer from "@/modules/home/ui/components/footer";
import Navbar from "@/modules/home/ui/components/navbar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <main className='flex flex-col w-full min-h-screen'>
      <Navbar />
      <section className='flex-1 flex-col flex py-4 md:py-8 lg:py-[90px] xl:py-[90px] w-full px-6'>
        {children}
      </section>
      <Footer />
    </main>
  );
}
