// data/projects.ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  tech: string[];
  url?: string;       
  repo?: string;       
  image?: string;      
  publishAt?: string;  
};

export const projects: Project[] = [

  {
    slug: "portfolio-site",
    title: "Portfolio website",
    summary: "Moderne, snelle portfolio met Next.js, Tailwind en micro-animaties.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    url: "https://jouw-live-url.vercel.app",    // of laat leeg
    repo: "https://github.com/jouwnaam/portfolio", // of laat leeg
    publishAt: "2025-09-30" // of laat weg om meteen te tonen
  },

  {
    slug: "design-system",
    title: "Case Study: Design System",
    summary: "Herbruikbare UI-componenten, theming en documentatie met Storybook.",
    tech: ["React", "Tailwind", "Storybook"],
    publishAt: "2099-12-31" 
  },

  {
    slug: "saas-dashboard",
    title: "SaaS Dashboard",
    summary: "Charts, tabellen en toegankelijke filters met Next.js.",
    tech: ["Next.js", "TypeScript", "Recharts"],
    publishAt: "2099-12-31"
  },
  
  {
    slug: "ecommerce-frontend",
    title: "E-commerce Frontend",
    summary: "Product listing, winkelwagen en checkout flow.",
    tech: ["Next.js", "Tailwind"],
    publishAt: "2099-12-31"
  }
];
