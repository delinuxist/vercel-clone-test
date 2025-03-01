import Image from "next/image";
import Triangle from "@/assets/svg/triangle.svg";

export default function LogoPrisma() {
  return (
    <div className='z-10  col-span-full row-span-2 row-start-3 w-full place-items-center md:row-start-6 md:col-start-6'>
      <Image src={Triangle} alt='triangle prism' className=' object-contain' />
    </div>
  );
}
