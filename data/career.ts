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

export type RecommendationPlaceholder = {
  relationship: string;
  name: string;
  role: string;
  quote: string;
  reserved: boolean;
};

export const careerLinks: PlaceholderLink[] = [
  {
    label: "Resume",
    note: "Add final graduate resume PDF once ready",
  },
  {
    label: "LinkedIn",
    note: "Add LinkedIn profile URL once finalized",
  },
  {
    label: "Email",
    note: "Add professional contact email once finalized",
  },
];

export const experiencePlaceholders: ExperiencePlaceholder[] = [
  {
    period: "2026",
    organization: "OJT / Internship",
    role: "Software Development Intern",
    description:
      "Reserved for completed professional experience. Replace this card with the company, role, actual responsibilities, technologies used, and outcomes after OJT.",
    bullets: [
      "Add the product, system, or team you worked with",
      "Add 2–4 specific responsibilities you personally handled",
      "Add technologies used in the actual work environment",
      "Add a measurable result, shipped feature, or concrete improvement when available",
    ],
    reserved: true,
  },
];

export const currentBuild = {
  title: "AUF NAVI",
  status: "Thesis · In development",
  description:
    "AI-powered smart campus information platform using retrieval-augmented generation, verified university knowledge sources, campus guidance, and one responsive web application for kiosk, web, and PWA use.",
  stack: ["ASP.NET Core", ".NET 10", "OpenAI", "SQL Server", "PWA"],
  reminder: "Add screenshots, milestones, evaluation results, and deployment link as the thesis progresses.",
};

export const recommendationPlaceholders: RecommendationPlaceholder[] = [
  {
    relationship: "Professor / Adviser",
    name: "Recommendation reserved",
    role: "Academic / technical perspective",
    quote: "Add a short verified recommendation about technical ability, initiative, problem-solving, or project ownership.",
    reserved: true,
  },
  {
    relationship: "OJT Supervisor",
    name: "Recommendation reserved",
    role: "Professional work perspective",
    quote: "Add a short verified recommendation about performance in a real software team or workplace.",
    reserved: true,
  },
  {
    relationship: "Teammate / Stakeholder",
    name: "Recommendation reserved",
    role: "Collaboration / delivery perspective",
    quote: "Add a short verified recommendation about reliability, collaboration, leadership, or delivering a working system.",
    reserved: true,
  },
];

export const futureProofPlaceholders = [
  {
    title: "Certifications",
    description:
      "Reserve this for a small number of meaningful, verifiable certifications that support your software engineering direction.",
    examples: "Microsoft · GitHub · AWS / Azure",
  },
  {
    title: "Technical writing",
    description:
      "Reserve this for 3–5 useful engineering write-ups based on systems you actually built rather than generic tutorial posts.",
    examples: "ASP.NET Core architecture · RAG · multimodal navigation",
  },
];

export const postGraduationProfile = {
  eyebrow: "Full-stack software developer",
  lead:
    "I build production-oriented web and mobile systems using .NET, C#, SQL Server, Kotlin, and practical AI integrations.",
  educationLine: "Computer Engineering Graduate · Angeles University Foundation",
  availability: "Available for full-stack / software engineering roles",
  heroStatReminder:
    "After graduation, consider replacing one academic hero credential with a technical or shipped-system signal.",
};
