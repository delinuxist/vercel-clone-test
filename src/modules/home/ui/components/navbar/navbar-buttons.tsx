import { Button } from "@/components/ui/button";

export default function NavbarButtons() {
  return (
    <div className='flex items-center gap-3'>
      <Button variant={"outline"} size={"sm"}>
        Log In
      </Button>
      <Button variant={"outline"} size={"sm"}>
        Contact
      </Button>
      <Button size={"sm"}>Sign Up</Button>
    </div>
  );
}
