import { Button } from "@/components/ui/button";
import { Building2Icon, ShieldCheckIcon } from "lucide-react";
import React from "react";

export default function TrustSection() {
  return (
    <section className='border border-t-0 p-12 flex flex-col items-center justify-center'>
      <div className='text-xl font-semibold flex gap-3'>
        Scale your{" "}
        <Button className='dark:invert rounded-full border border-muted-foreground'>
          {" "}
          <Building2Icon className='size-4 mr-2' /> Enterprise
        </Button>
        without compromising{" "}
        <Button className='dark:invert rounded-full border border-muted-foreground'>
          {" "}
          <ShieldCheckIcon className='size-4 mr-2' />
          Security
        </Button>
      </div>
    </section>
  );
}
