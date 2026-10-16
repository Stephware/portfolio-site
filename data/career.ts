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

export const currentBuilds = [
  {
    title: "AUF NAVI",
    status: "Active thesis project",
    description:
      "A campus information and navigation system for Angeles University Foundation built around structured campus data, building and floor information, campus entities, location records, and working navigation for campus guidance.",
    stack: ["ASP.NET Core MVC", ".NET 10", "EF Core", "SQL Server"],
    repository: "https://github.com/Stephware/auf-navi-vision",
  },
  {
    title: "Be My Parol",
    status: "Active collaborative project",
    description:
      "A mobile-first Filipino Christmas parol experience where a host shares a lantern with friends, guests contribute lights and private messages, and the parol grows through curated visual stages while keeping guest participation lightweight.",
    stack: ["React", "TypeScript", "ASP.NET Core", ".NET 10", "SQL Server"],
    repository: "https://github.com/Stephware/DecoMyLantern",
  },
  {
    title: "ICpEP Region 3 Hub",
    status: "Active regional platform build",
    description:
      "A centralized platform for ICpEP.se Region 3 chapters covering announcements, events, chapter information, assistance requests, collaboration workflows, account management, role-based access, and regional administration.",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "TypeScript"],
    repository: "https://github.com/Stephware/IcpepRegionHub",
  },
];

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
