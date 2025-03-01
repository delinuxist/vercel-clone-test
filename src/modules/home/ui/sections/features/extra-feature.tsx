import { LucideBookMarked, RotateCwIcon } from "lucide-react";

export default function ExtraFeature() {
  return (
    <section className='grid grid-cols-2 border'>
      {/* left side */}
      <div className='p-12 border-r flex flex-col gap-4'>
        <div className='flex items-center gap-2 text-muted-foreground text-lg'>
          <RotateCwIcon size={20} />
          <span>Instant Rollbacks</span>
        </div>
        <p className='text-xl font-semibold text-muted-foreground'>
          <span className='text-foreground'>Go ahead, deploy on Friday.</span>{" "}
          Instantly rollback to a working deployment
        </p>
      </div>

      {/* right side */}
      <div className='p-12 flex flex-col gap-4'>
        <div className='flex items-center gap-2 text-muted-foreground text-lg'>
          <LucideBookMarked size={20} className='rotate-180' />
          <span>Conformance</span>
        </div>
        <p className='text-xl font-semibold text-muted-foreground'>
          <span className='text-foreground'>
            Move fast, don&apos;t break things.
          </span>{" "}
          Keep quality high while maintaining velocity with Monorepos.
        </p>
      </div>
    </section>
  );
}
