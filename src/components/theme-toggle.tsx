"use client";

import { useEffect, useState } from "react";
import { Monitor, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleGroup
      type='single'
      value={theme}
      onValueChange={(value) => value && setTheme(value)}
      className='rounded-full border'
    >
      <ToggleGroupItem
        value='system'
        aria-label='System theme'
        className='rounded-full'
      >
        <Monitor className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='light'
        aria-label='Light theme'
        className='rounded-full'
      >
        <Sun className='h-4 w-4' />
      </ToggleGroupItem>
      <ToggleGroupItem
        value='dark'
        aria-label='Dark theme'
        className='rounded-full'
      >
        <Moon className='h-4 w-4' />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
