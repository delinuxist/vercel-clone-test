import { FooterLinkType } from "@/modules/home/types";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FooterColumnProps {
  title: string;
  links: FooterLinkType[];
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className='text-sm font-medium mb-4'>{title}</h3>
      <ul className='space-y-3 text-sm text-muted-foreground'>
        {links.map((link) => (
          <li key={link.name}>
            {link.href && (
              <Link
                href={link.href}
                className='hover:text-foreground transition-colors flex items-center'
              >
                {link.icon && <link.icon className='mr-2 size-4' />}
                {link.name}
                {link.external && <ArrowUpRight className='ml-2 size-3' />}
              </Link>
            )}
            {link.dropdown && (
              <DropdownMenu>
                <DropdownMenuTrigger className='flex items-center hover:cursor-pointer hover:text-foreground transition-colors'>
                  {link.name}
                  <ChevronDown className='size-3 ml-2' />
                </DropdownMenuTrigger>

                <DropdownMenuContent className='w-56' align='end'>
                  {link.subItems!.map((subItem) => (
                    <DropdownMenuItem key={subItem.name}>
                      <Link href={subItem.href} className='w-full'>
                        {subItem.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
