import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FloatingCross from "@/modules/home/ui/components/floating-cross";

export default function SecondaryFooter() {
  return (
    <section className='border relative grid grid-cols-3'>
      <FloatingCross />

      {/* Grid block for borders */}
      <div
        aria-hidden={true}
        className='absolute inset-0 pointer-events-none grid grid-cols-3 z-0'
      >
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className={cn(i < 2 ? "border-r border-dashed" : "")} />
        ))}
      </div>

      <div className='col-span-2 py-12 pl-12 pr-6 z-10 flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-4'>
          <p className='text-muted-foreground text-2xl font-semibold'>
            <span>
              <span className='text-foreground'>Ready to deploy?</span> Start
              building with a free account.
            </span>
            <br />
            <span>
              Speak to an expert for your{" "}
              <span className=' text-blue-400'>Pro</span> or{" "}
              <span className='text-purple-400'>Eterprise</span> needs.
            </span>
          </p>
          <div className='flex gap-3'>
            <Button className='rounded-full '>Start Deploying</Button>
            <Button className='rounded-full dark:invert border border-muted-foreground'>
              Talk to an Expert
            </Button>
          </div>
        </div>
      </div>

      <div className='col-span-1 p-12 flex flex-col items-center justify-center'>
        <div className='flex flex-col gap-3'>
          <p className='text-lg text-muted-foreground font-semibold'>
            <span className='text-foreground'>Explore Vercel Enterprise</span>{" "}
            with an interactive product tour, trial, or a personalized demo
          </p>
          <Button className='dark:invert border border-muted-foreground rounded-full w-fit'>
            Explore Enterprice
          </Button>
        </div>
      </div>
    </section>
  );
}
