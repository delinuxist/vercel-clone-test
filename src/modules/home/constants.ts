import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Activity,
  BarChart3,
  Box,
  Code,
  Cpu,
  FileCode,
  FlaskConical,
  Layers,
  LayoutGrid,
  Lock,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import type { NavigationConfig } from "./types";

export const FOOTER_LINKS = {
  products: [
    { name: "AI", href: "#" },
    { name: "Enterprise", href: "#" },
    { name: "Fluid Compute", href: "#" },
    { name: "Next.js", href: "#", external: true },
    { name: "Observability", href: "#" },
    { name: "Previews", href: "#" },
    { name: "Rendering", href: "#" },
    { name: "Security", href: "#" },
    { name: "Turbo", href: "#" },
    { name: "v0", href: "#", external: true },
  ],
  resources: [
    { name: "Community", href: "#", external: true },
    { name: "Docs", href: "#" },
    { name: "Guides", href: "#" },
    { name: "Help", href: "#" },
    { name: "Integrations", href: "#" },
    { name: "Pricing", href: "#" },
    { name: "Resources", href: "#" },
    { name: "Solution Partners", href: "#" },
    { name: "Templates", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Changelog", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Customers", href: "#" },
    { name: "Partners", href: "#" },
    { name: "Privacy Policy", href: "#" },
    {
      name: "Legal",
      dropdown: true,
      subItems: [
        { name: "Cookie Policy", href: "#/legal/cookie-policy" },
        { name: "Cookie Preferences", href: "#/legal/cookie-preferences" },
        { name: "DMCA Policy", href: "#/legal/dmca-policy" },
        { name: "DORA Addendum", href: "#/legal/dora-addendum" },
        { name: "DPA", href: "#/legal/dpa" },
        { name: "DRA", href: "#/legal/dra" },
        {
          name: "Event Code of Conduct",
          href: "#/legal/event-code-of-conduct",
        },
        { name: "Event Terms and Conditions", href: "#/legal/event-terms" },
        { name: "Inactivity Policy", href: "#/legal/inactivity-policy" },
        { name: "Job Applicant Privacy Notice", href: "#/legal/job-privacy" },
        { name: "Privacy Policy", href: "#/legal/privacy" },
        { name: "SLA", href: "#/legal/sla" },
        { name: "Sub-processors", href: "#/legal/sub-processors" },
        { name: "Support Terms", href: "#/legal/support-terms" },
        { name: "Terms of Service", href: "#/legal/terms" },
        { name: "Trademark Policy", href: "#/legal/trademark" },
      ],
    },
  ],
  social: [
    { name: "GitHub", href: "#", icon: Github },
    { name: "LinkedIn", href: "#", icon: Linkedin },
    { name: "Twitter", href: "#", icon: Twitter },
    { name: "YouTube", href: "#", icon: Youtube },
  ],
};

export const navigationConfig: NavigationConfig = {
  mainNav: [
    {
      title: "Products",
      content: {
        width: "800px",
        gridCols: 3,
        sections: [
          {
            title: "DX Platform",
            items: [
              {
                title: "Previews",
                href: "#",
                description: "Helping teams ship 6× faster",
                icon: Rocket,
              },
              {
                title: "AI",
                href: "#",
                description: "Powering breakthroughs",
                icon: Sparkles,
              },
            ],
          },
          {
            title: "Managed Infrastructure",
            items: [
              {
                title: "Fluid compute",
                href: "#",
                description: "Servers, in serverless form",
                icon: Cpu,
              },
              {
                title: "Rendering",
                href: "#",
                description: "Fast, scalable, and reliable",
                icon: Layers,
              },
              {
                title: "Observability",
                href: "#",
                description: "Trace every step",
                icon: BarChart3,
              },
              {
                title: "Security",
                href: "#",
                description: "Scale without compromising",
                icon: Lock,
              },
            ],
          },
          {
            title: "Open Source",
            items: [
              {
                title: "Next.js",
                href: "#",
                description: "The native Next.js platform",
                icon: Code,
              },
              {
                title: "Turborepo",
                href: "#",
                description: "Speed with Enterprise scale",
                icon: Zap,
              },
              {
                title: "AI SDK",
                href: "#",
                description: "The AI Toolkit for TypeScript",
                icon: FileCode,
              },
            ],
          },
        ],
      },
    },
    {
      title: "Solutions",
      content: {
        width: "600px",
        gridCols: 2,
        sections: [
          {
            title: "By Industry",
            items: [
              {
                title: "E-commerce",
                href: "#",
                description: "Build high-performance stores",
                icon: Box,
              },
              {
                title: "Healthcare",
                href: "#",
                description: "HIPAA-compliant applications",
                icon: Activity,
              },
            ],
          },
          {
            title: "By Team",
            items: [
              {
                title: "Marketing",
                href: "#",
                description: "Launch campaigns faster",
                icon: LayoutGrid,
              },
              {
                title: "Engineering",
                href: "#",
                description: "Ship with confidence",
                icon: FlaskConical,
              },
            ],
          },
        ],
      },
    },
    {
      title: "Resources",
      content: {
        width: "400px",
        gridCols: 1,
        sections: [
          {
            title: "",
            items: [
              {
                title: "Documentation",
                href: "#",
                description: "Learn how to integrate our products",
              },
              {
                title: "Blog",
                href: "#",
                description: "Read our latest news and articles",
              },
              {
                title: "Customers",
                href: "#",
                description: "See how others are using our platform",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Enterprise",
      href: "#",
      isLink: true,
    },
  ],
  rightNav: [
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ],
};
