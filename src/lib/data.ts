// Single source of truth for site content.
// Swap every value below with your real details.

export const site = {
  name: "Jake Raven",
  brand: "Jakeverse",
  role: "Designer & Developer",
  tagline: "I build fast, thoughtful products at the edge of design and code.",
  location: "Based on Earth, working everywhere",
  email: "hello@jakeraven.dev",
};

export const links = {
  github: "https://github.com/jakeraven",
  linkedin: "https://linkedin.com/in/jakeraven",
  twitter: "https://x.com/jakeraven",
  email: `mailto:${site.email}`,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  href?: string;
};

export const projects: Project[] = [
  {
    slug: "aurora",
    title: "Aurora",
    summary:
      "A real-time collaboration tool for design teams, built for speed at scale.",
    tags: ["Product Design", "React", "WebSockets"],
    year: "2025",
    href: links.github,
  },
  {
    slug: "pulse",
    title: "Pulse",
    summary:
      "An analytics dashboard that turns raw event data into decisions in seconds.",
    tags: ["Data Viz", "TypeScript", "Next.js"],
    year: "2024",
    href: links.github,
  },
  {
    slug: "north",
    title: "North",
    summary:
      "A minimal, fast note-taking app with offline-first sync across devices.",
    tags: ["Mobile", "Swift", "CRDTs"],
    year: "2024",
    href: links.github,
  },
  {
    slug: "signal",
    title: "Signal",
    summary:
      "Brand identity and design system for an early-stage climate-tech startup.",
    tags: ["Branding", "Design System"],
    year: "2023",
    href: links.github,
  },
];

export const skills = [
  "Product Strategy",
  "Interaction Design",
  "Design Systems",
  "React / Next.js",
  "TypeScript",
  "Motion & Prototyping",
];

export const timeline = [
  {
    year: "2024 — Now",
    title: "Independent Designer & Developer",
    detail: "Partnering with startups on product design and full-stack builds.",
  },
  {
    year: "2021 — 2024",
    title: "Senior Product Designer",
    detail: "Led design for core product surfaces, scaling a small team's output 3x.",
  },
  {
    year: "2019 — 2021",
    title: "Product Designer",
    detail: "Shipped design systems and features across web and mobile.",
  },
];
