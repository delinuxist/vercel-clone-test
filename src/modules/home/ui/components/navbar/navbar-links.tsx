"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { navigationConfig } from "@/modules/home/constants";
import Link from "next/link";

export default function NavbarLinks() {
  return (
    <div className='hidden lg:block'>
      <nav>
        <NavigationMenu>
          <NavigationMenuList>
            {navigationConfig.mainNav.map((item) => (
              <NavigationMenuItem key={item.title}>
                {item.isLink && item.href ? (
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </Link>
                ) : (
                  <>
                    <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                    {item.content && (
                      <NavigationMenuContent>
                        <div
                          className={cn(
                            "grid gap-3 p-4",
                            item.content.width
                              ? `w-[${item.content.width}]`
                              : "w-[600px]",
                            item.content.gridCols
                              ? `grid-cols-${item.content.gridCols}`
                              : "md:grid-cols-2",
                          )}
                          style={{ width: item.content.width }}
                        >
                          {item.content.sections.map((section, index) => (
                            <div
                              key={section.title || index}
                              className='space-y-3'
                            >
                              {section.title && (
                                <h4 className='text-sm font-medium leading-none text-muted-foreground'>
                                  {section.title}
                                </h4>
                              )}
                              {section.items.map((navItem) => (
                                <NavigationMenuLink key={navItem.title} asChild>
                                  <Link
                                    href={navItem.href}
                                    className='group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
                                  >
                                    <div className='flex items-center gap-3'>
                                      {navItem.icon && (
                                        <div className='flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary'>
                                          <navItem.icon className='h-4 w-4' />
                                        </div>
                                      )}
                                      <div>
                                        <div className='text-sm font-medium leading-none'>
                                          {navItem.title}
                                        </div>
                                        {navItem.description && (
                                          <p className='line-clamp-1 text-sm leading-snug text-muted-foreground'>
                                            {navItem.description}
                                          </p>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    )}
                  </>
                )}
              </NavigationMenuItem>
            ))}
            {navigationConfig.rightNav.map((item) => (
              <NavigationMenuItem key={item.title}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  );
}
