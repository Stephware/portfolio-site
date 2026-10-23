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
    title: "AUF NAVI Vision",
    status: "Individual thesis · Active development",
    description:
      "A context-aware campus information and navigation platform designed to connect verified institutional knowledge directly with mapped university destinations. Shared campus-entity records link authority- and time-aware RAG with cited answers to GPS outdoor guidance and vision/OCR-assisted checkpoint-based indoor navigation, while physical routes are computed deterministically with A* on approved 2D map graphs.",
    stackLabel: "Current + planned stack",
    stack: [
      "ASP.NET Core MVC",
      ".NET 10",
      "EF Core",
      "SQL Server",
      "Kotlin / Jetpack Compose",
      "OpenAI API / RAG",
      "CameraX / ML Kit OCR",
      "MapLibre / A*",
    ],
    repository: "https://github.com/Stephware/auf-navi-vision",
  },
  {
    title: "Be My Parol",
    status: "Active collaborative project",
    description:
      "A mobile-first Filipino Christmas parol experience where a host shares a lantern with friends, guests contribute lights and private messages, and the parol grows through curated visual stages while keeping guest participation lightweight.",
    stackLabel: "Current stack",
    stack: ["React", "TypeScript", "ASP.NET Core", ".NET 10", "SQL Server"],
    repository: "https://github.com/Stephware/DecoMyLantern",
  },
  {
    title: "ICpEP Region 3 Hub",
    status: "Active regional platform build",
    description:
      "A centralized platform for ICpEP.se Region 3 chapters covering announcements, events, chapter information, assistance requests, collaboration workflows, account management, role-based access, and regional administration.",
    stackLabel: "Current stack",
    stack: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "TypeScript"],
    repository: "https://github.com/Stephware/IcpepRegionHub",
  },
  {
    title: "SmartFarm",
    status: "Collaborative farm-management platform",
    description:
      "A web-and-Android farm-management platform designed to help farm owners and field teams manage multiple farms, plots, crop cycles, daily field activities, supply inventory, harvest records, and weather-related reminders, with selected Android workflows supporting offline use and synchronization when connectivity returns.",
    stackLabel: "Technology stack",
    stack: [
      ".NET 10 / ASP.NET Core",
      "EF Core 10",
      "SQL Server 2022",
      "Hangfire",
      "Kotlin / Jetpack Compose",
      "Room",
      "Retrofit / OkHttp",
      "WorkManager",
    ],
    repository: "https://github.com/Stephware/SmartFarm",
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
