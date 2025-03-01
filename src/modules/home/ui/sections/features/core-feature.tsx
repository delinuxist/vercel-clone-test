import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUp, MessageCircle, MousePointer2, Terminal } from "lucide-react";

export default function CoreFeature() {
  return (
    <section className='grid grid-cols-2 border'>
      {/* left side */}
      <div className='p-12 border-r flex flex-col gap-4'>
        <div className='flex items-center gap-2 text-muted-foreground text-lg'>
          <Terminal size={20} />
          <span>Git-connected Deploys</span>
        </div>
        <p className='text-xl font-semibold text-muted-foreground'>
          <span className='text-foreground'>
            From localhost to https,inseconds.
          </span>{" "}
          Deploy from Git or your CLI.
        </p>
        <div className='w-full relative'>
          {/* Terminal Window */}
          <div className='border rounded-2xl'>
            <div className='p-3 '>
              <div className='flex gap-1.5'>
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className='size-3 rounded-full bg-muted' />
                ))}
              </div>
            </div>
            <div className=' p-4 font-mono text-sm'>
              <p className='text-gray-300'>~ vercel-site/ git push</p>
              <p className='text-gray-300'>Enumerating objects: 1, done.</p>
              <p className='text-gray-300'>
                Counting objects: 100% (1/1), done.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className='p-12 flex flex-col gap-4'>
        <div className='flex items-center gap-2 text-muted-foreground text-lg'>
          <MessageCircle size={20} />
          <span>Collaborative pre-production</span>
        </div>
        <p className='text-xl font-semibold text-muted-foreground'>
          <span className='text-foreground'>Every deploy is remarkable.</span>{" "}
          Chat with your team on real, production-grade UI, not just designs.
        </p>
        <div className='flex flex-col gap-5'>
          <Card className='block w-fit p-3 leading-5'>
            <p className='text-sm'>
              Swapped out the{" "}
              <code className='bg-muted-foreground px-2 py-0.5 rounded text-muted'>
                button
              </code>{" "}
              for
              <span className='block' />
              some variants we needed.
            </p>
          </Card>
          <div className='flex justify-end'>
            <div className='flex items-end gap-10'>
              <div className='relative'>
                <div className='absolute -right-4 -top-4'>
                  <MousePointer2
                    className='size-5 rotate-90 text-blue-700'
                    fill={"#1447e6"}
                  />
                </div>
                <div className='p-1 text-xs w-fit rounded-md bg-blue-700 text-black'>
                  Pranathi
                </div>
              </div>
              <Card className='block w-fit p-3 leading-5'>
                <p className='text-sm'>How about this instead?</p>
              </Card>
            </div>
          </div>
          <div className='flex justify-start'>
            <div className='flex items-end gap-10'>
              <Card className='block w-fit p-3 leading-5'>
                <p className='text-sm'>
                  I like it. Does this work with
                  <span className='block' />
                  the brand tweaks @mamuso?
                </p>
              </Card>

              <div className='relative'>
                <div className='absolute -left-4 -top-4'>
                  <MousePointer2
                    className='size-5 text-[#f13342]'
                    fill={"#f13342"}
                  />
                </div>
                <div className='p-1 text-xs w-fit rounded-md bg-[#f13342] text-black'>
                  Pranathi
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-end'>
            <Card className='block w-fit p-3 leading-5'>
              <div className='flex gap-3 items-center'>
                <p>This looks great!</p>
                <Button size={"icon"} className='rounded-full size-6 '>
                  <ArrowUp className='size-3' />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
