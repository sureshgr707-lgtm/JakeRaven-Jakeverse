// Single source of truth for site content.

export const site = {
  name: "Suresh G",
  brand: "Jakeverse",
  role: "RCM AI Architect",
  tagline:
    "I combine 6+ years of healthcare RCM operations expertise with AI-driven tooling to turn messy operational data into clear, actionable systems.",
  location: "Chennai, India",
  email: "sureshgr707@gmail.com",
};

export const links = {
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
    slug: "ai-rcm-dashboards",
    title: "AI-Powered RCM Dashboards",
    summary:
      "Designed AI-assisted executive dashboards that turn raw AR and claims data into real-time operational visibility.",
    tags: ["AI Dashboards", "Data Viz", "Reporting"],
    year: "2025",
  },
  {
    slug: "denials-appeals-optimization",
    title: "Denial & Appeals Workflow Optimization",
    summary:
      "Streamlined denial review and appeals workflows to cut resolution time and improve first-pass claim recovery.",
    tags: ["Denials & Appeals", "Process Improvement"],
    year: "2024",
  },
  {
    slug: "payer-change-automation",
    title: "Payer Change & Authorization Tracking",
    summary:
      "Built structured tracking systems for payer change, authorization follow-up, and split-chart workflows.",
    tags: ["Automation", "Payer Coordination"],
    year: "2024",
  },
  {
    slug: "production-reporting",
    title: "Production & Performance Reporting",
    summary:
      "Automated production tracking and reporting frameworks for AR teams, cutting manual reporting time significantly.",
    tags: ["Excel", "Power BI", "Automation"],
    year: "2023",
  },
];

export const skills = [
  "AR Operations",
  "Denials & Appeals",
  "Authorization Follow-up",
  "Payer Coordination",
  "Process Improvement",
  "AI-Assisted Reporting",
  "Excel & Power BI",
  "Python",
  "HIPAA Compliance",
];

export const timeline = [
  {
    year: "2025 — Present",
    title: "Subject Matter Expert → RCM AI Architect",
    detail:
      "Applying AI tools to build dashboards, automate reporting, and modernize healthcare RCM operational workflows.",
  },
  {
    year: "2019 — 2025",
    title: "AR Associate → Senior AR Associate → SME",
    detail:
      "6+ years progressing through healthcare RCM roles — denial management, appeals, authorization follow-up, and payer coordination.",
  },
  {
    year: "Education",
    title: "B.Tech, Computer Science & Engineering",
    detail: "Dr. MGR University, Chennai.",
  },
];
