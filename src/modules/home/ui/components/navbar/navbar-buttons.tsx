import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

export default function NavbarButtons() {
  return (
    <>
      <div className=' items-center gap-3 hidden lg:flex'>
        <Button
          variant={"outline"}
          size={"sm"}
          className='hover:cursor-pointer'
        >
          Log In
        </Button>
        <Button
          variant={"outline"}
          size={"sm"}
          className='hover:cursor-pointer'
        >
          Contact
        </Button>
        <Button size={"sm"} className='hover:cursor-pointer'>
          Sign Up
        </Button>
      </div>
      <Button
        variant={"outline"}
        size={"icon"}
        className='rounded-full lg:hidden hover:cursor-pointer'
      >
        <MenuIcon className='size-5' />
      </Button>
    </>
  );
}
