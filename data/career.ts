export type PlaceholderLink = {
  label: string;
  href?: string;
  note: string;
};

export type ExperiencePlaceholder = {
  period: string;
  organization: string;
  role: string;
  description: string;
  bullets: string[];
  reserved: boolean;
};

export const careerLinks: PlaceholderLink[] = [
  {
    label: "Resume",
    note: "Professional resume",
  },
  {
    label: "LinkedIn",
    note: "Professional profile",
  },
  {
    label: "Email",
    href: "mailto:pinacate.stephen@gmail.com",
    note: "pinacate.stephen@gmail.com",
  },
];

export const experiencePlaceholders: ExperiencePlaceholder[] = [
  {
    period: "2023 — PRESENT",
    organization: "Independent & academic projects",
    role: "Full-stack Software Developer",
    description:
      "Hands-on software development across web, mobile, desktop, and AI-assisted systems for operational and academic use cases.",
    bullets: [
      "Application architecture and backend API development",
      "Database-backed workflows and role-based systems",
      "Responsive web, mobile, and desktop interfaces",
      "Deployment, source control, and collaborative development",
    ],
    reserved: false,
  },
];

export const currentBuild = {
  title: "AUF NAVI",
  status: "Active thesis project",
  description:
    "AI-powered smart campus information platform using retrieval-augmented generation, verified university knowledge sources, campus guidance, and one responsive web application for kiosk, web, and PWA use.",
  stack: ["ASP.NET Core", ".NET 10", "OpenAI", "SQL Server", "PWA"],
};

export const futureProofPlaceholders = [
  {
    title: "Software engineering focus",
    description:
      "Production-oriented full-stack development with maintainable architecture, database-backed workflows, and practical AI integration.",
    examples: "ASP.NET Core · SQL Server · Kotlin · React",
  },
  {
    title: "Engineering documentation",
    description:
      "Technical documentation centered on systems, architecture decisions, workflows, testing, and implementation details.",
    examples: "Architecture · APIs · RAG · deployment",
  },
];

export const postGraduationProfile = {
  eyebrow: "Full-stack software developer",
  lead:
    "I build production-oriented web and mobile systems using .NET, C#, SQL Server, Kotlin, and practical AI integrations.",
  educationLine: "BS Computer Engineering · Angeles University Foundation",
  availability: "Open to software opportunities",
  heroStatReminder: "Full-stack software · practical systems · continuous learning",
};
