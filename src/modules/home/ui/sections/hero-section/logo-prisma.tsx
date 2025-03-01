import Image from "next/image";
import Triangle from "@/assets/svg/triangle.svg";

export default function LogoPrisma() {
  return (
    <div className='z-10 col-span-full row-span-2 w-full  row-start-6 col-start-6'>
      <Image src={Triangle} alt='triangle prism' className=' object-contain' />
    </div>
  );
}
