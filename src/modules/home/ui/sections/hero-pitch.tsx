import FloatingCross from "@/modules/home/ui/components/floating-cross";
import { GitMergeIcon, GlobeIcon, TerminalIcon } from "lucide-react";

export default function HeroPitch() {
  return (
    <section className='border border-t-0 relative flex flex-col justify-center items-center w-full h-[270px]'>
      <FloatingCross position='top-right' />
      <div className='px-6 flex flex-col gap-2 text-center'>
        <h2 className='text-4xl tracking-tighter font-bold'>
          <span className='inline-flex items-center gap-x-2'>
            Develop with your favorite tools <TerminalIcon className='size-8' />
          </span>
          <br />
          <span className='inline-flex items-center gap-x-2 whitespace-nowrap'>
            Launch globally, instantly <GlobeIcon className='size-8' /> Keep
            pushing <GitMergeIcon className='size-8' />
          </span>
        </h2>
      </div>
    </section>
  );
}
