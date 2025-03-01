import { cn } from "@/lib/utils";

export default function GridBlocks() {
  return (
    <>
      <div
        aria-hidden={true}
        className='pointer-events-none relative col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid md:hidden'
      >
        <div className='col-span-full row-span-1' />
        {Array.from({ length: 32 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "border-r border-t ",
              // MF: added later
              // Hide right border if last column (prevent double border)
              (i + 1) % 8 === 0 && "border-r-0",
              // Hide bottom border if last row
              i > 23 && "border-b-0",
            )}
          />
        ))}
      </div>
      {/* Medium size grid */}
      <div
        aria-hidden={true}
        className='pointer-events-none relative col-span-full row-span-full hidden grid-cols-subgrid grid-rows-subgrid md:grid'
      >
        {Array.from({ length: 96 }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "border border-l-0 border-t-0",
              i > 12 && i < 22 && "border-0",
              i === 22 && "border-b-0",
              i > 24 && i < 34 && "border-0",
              i === 34 && "border-b-0",
              i > 36 && i < 46 && "border-0",
              i === 46 && "border-b-0",
              i > 48 && i < 58 && "border-r-0",
              // hide right border if last column
              (i + 1) % 12 === 0 && "border-r-0",
              // hide bottom border if last row
              i > 83 && "border-b-0",
            )}
          />
        ))}
      </div>
    </>
  );
}
