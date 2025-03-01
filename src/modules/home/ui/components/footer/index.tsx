import { ThemeToggle } from "@/components/theme-toggle";
import { FOOTER_LINKS } from "@/modules/home/constants";
import FooterColumn from "@/modules/home/ui/components/footer/footer-column";

export default function Footer() {
  return (
    <footer className='px-6 w-full'>
      <div className=' mx-auto max-w-[70rem]'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-4'>
          <FooterColumn title='Products' links={FOOTER_LINKS.products} />
          <FooterColumn title='Resources' links={FOOTER_LINKS.resources} />
          <FooterColumn title='Company' links={FOOTER_LINKS.company} />
          <FooterColumn title='Social' links={FOOTER_LINKS.social} />
        </div>

        {/* Status Bar and Theme Toggle */}
        <div className='flex flex-col md:flex-row justify-between items-start md:items-center py-8'>
          <div className='flex items-center text-sm'>
            <span className='inline-block size-2 bg-blue-500 rounded-full mr-2' />
            <span className='text-blue-500'>All systems normal</span>
          </div>
          <div className='flex items-center gap-4 mt-4 md:mt-0'>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
}
