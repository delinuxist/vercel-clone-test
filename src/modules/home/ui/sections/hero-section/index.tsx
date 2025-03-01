import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import LogoPrisma from "@/modules/home/ui/sections/hero-section/logo-prisma";
import FloatingCross from "@/modules/home/ui/components/floating-cross";
import GridBlocks from "@/modules/home/ui/sections/hero-section/grid-block";

export default function HeroSection() {
  return (
    <main className='relative w-full'>
      <section className='border'>
        <div className='relative grid w-full grid-cols-8 grid-rows-8 md:grid-cols-12'>
          <FloatingCross />

          <LogoPrisma />

          {/* Grid blocks */}
          <GridBlocks />

          {/* Heading block */}
          <div className='className="border-3 relative z-10 col-span-full col-start-1 row-span-1 row-start-1 flex flex-col items-center justify-center gap-2  p-5 md:col-span-10 md:col-start-2 md:row-span-4 md:row-start-2 md:gap-4 md:bg-transparent'>
            <h1 className='max-w-[80%] text-balance text-center text-[clamp(24px,3.75vw,48px)] font-bold tracking-tighter md:max-w-none xs-h:text-[22px]'>
              Your complete platform for the web.
            </h1>
            <p className='max-w-[80%] text-balance text-center text-sm leading-relaxed tracking-tight text-muted-foreground sm:text-base md:max-w-xl md:text-xl md:leading-loose'>
              Vercel provides the developer tools and cloud infrastructure to
              build, scale, and secure a faster, more personalized web.
            </p>
            <div className='flex gap-6 mt-3'>
              <Link
                href={"#"}
                className={buttonVariants({
                  className: "rounded-full! font-semibold px-5!",
                })}
              >
                <Image
                  className='dark:invert'
                  src='/vercel.svg'
                  alt='Vercel logomark'
                  width={16}
                  height={16}
                />{" "}
                Start Deploying
              </Link>
              <Link
                href={"#"}
                className={buttonVariants({
                  className:
                    "rounded-full! font-semibold dark:invert border-muted-foreground! border!",
                })}
              >
                Get a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
