import HeroPitch from "@/modules/home/ui/sections/hero-pitch";
import HeroSection from "@/modules/home/ui/sections/hero-section";

export default function HomeView() {
  return (
    <div className='max-w-[70rem] mx-auto w-full flex flex-col'>
      <HeroSection />
      <HeroPitch />
    </div>
  );
}
