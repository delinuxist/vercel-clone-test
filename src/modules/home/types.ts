import { LucideIcon } from "lucide-react";

export type FooterLinkType = {
  name: string;
  href?: string;
  dropdown?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  subItems?: { name: string; href: string }[];
};
