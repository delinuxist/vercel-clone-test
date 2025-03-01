import { LucideIcon } from "lucide-react";

export type FooterLinkType = {
  name: string;
  href?: string;
  dropdown?: boolean;
  external?: boolean;
  icon?: LucideIcon;
  subItems?: { name: string; href: string }[];
};

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export interface NavMenuContent {
  sections: NavSection[];
  width?: string;
  gridCols?: number;
}

export interface NavMenuItem {
  title: string;
  href?: string;
  content?: NavMenuContent;
  isLink?: boolean;
}

export interface NavigationConfig {
  mainNav: NavMenuItem[];
  rightNav: NavItem[];
}
