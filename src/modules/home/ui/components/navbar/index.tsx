import Link from "next/link";
import Image from "next/image";
import NavbarLinks from "@/modules/home/ui/components/navbar/navbar-links";
import NavbarButtons from "@/modules/home/ui/components/navbar/navbar-buttons";

export default function Navbar() {
  return (
    <div className='min-h-16 max-w-full px-6 sticky top-0 z-[101] flex  justify-center border items-center'>
      <header className='max-w-7xl mx-auto  w-full'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-8'>
            {/* Logo */}
            <div>
              <Link href={"/"} className='flex items-center'>
                <Image
                  className=''
                  src='/vercel.svg'
                  alt='Vercel logomark'
                  width={20}
                  height={20}
                />
                <span className='text-2xl font-semibold'>Vercel</span>
              </Link>
            </div>
            {/* Links */}
            <NavbarLinks />
          </div>
          {/* Buttons */}
          <NavbarButtons />
        </div>
      </header>
    </div>
  );
}
