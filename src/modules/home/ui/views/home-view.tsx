import HeroPitch from "@/modules/home/ui/sections/hero-pitch";
import HeroSection from "@/modules/home/ui/sections/hero-section";
import SecondaryFooter from "@/modules/home/ui/sections/secondary-footer";
import TrustSection from "@/modules/home/ui/sections/trust-section";

export default function HomeView() {
  return (
    <div className='max-w-[70rem] mx-auto w-full flex flex-col'>
      <HeroSection />
      <HeroPitch />
      <TrustSection />
      <div className='h-4 border border-y-0 w-full' />
      <SecondaryFooter />
    </div>
  );
}
