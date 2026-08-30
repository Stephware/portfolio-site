export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  homepage?: "featured" | "more";
  imageLabel: string;
  ownership: string;
  role: string;
  contribution: string;
  scope?: string;
  repository?: string;
  repositoryLabel?: string;
  detailPath?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "INNOVET",
    description:
      "A centralized veterinary clinic management platform designed for 10 branches and one veterinary hospital, bringing branch-aware appointments, client and pet records, medical histories, promotions, notifications, and clinic communication into one system.",
    tags: ["ASP.NET Core", ".NET 9", "EF Core", "SQL Server"],
    featured: true,
    homepage: "featured",
    imageLabel: "MULTI-BRANCH VETERINARY PLATFORM",
    ownership: "Solo project",
    role: "Full-stack Developer",
    contribution:
      "Designed and implemented the system end to end, including the application architecture, database-backed workflows, branch management, booking, records, notifications, and client-facing functionality.",
    scope: "10 branches + 1 veterinary hospital",
    repositoryLabel: "Private source",
    detailPath: "/projects/innovet",
    liveUrl: "https://apcc-innovet.runasp.net/",
  },
  {
    number: "02",
    title: "VITALLY",
    description:
      "A mobile-friendly clinic operations and transaction platform built for two clinics, with expansion in mind as additional clinics express interest. It supports role-based workspaces, sales and expense records, inventory monitoring, transaction history, and daily operational summaries.",
    tags: ["React", "ASP.NET Core", "JWT", "SQL Server"],
    homepage: "featured",
    imageLabel: "CLINIC OPERATIONS SYSTEM",
    ownership: "Solo project",
    role: "Full-stack Developer",
    contribution:
      "Built the frontend and backend, role-based authentication, clinic operations workflows, transaction tracking, inventory monitoring, and supporting data model.",
    scope: "Built for 2 clinics · designed to expand",
    repositoryLabel: "Private source",
  },
  {
    number: "03",
    title: "TUKI",
    description:
      "An AI-assisted multimodal public-transport navigation app for Pampanga that combines conversational commuter intent with deterministic route planning across walking, tricycle, and jeepney legs, including transfers, fares, ETA, live trip state, navigation guidance, and rerouting.",
    tags: ["Kotlin", "Jetpack Compose", "ASP.NET Core", "SQL Server"],
    homepage: "featured",
    imageLabel: "MULTIMODAL TRANSPORT NAVIGATION",
    ownership: "Team of 3 developers",
    role: "Full-stack / Mobile Developer",
    contribution:
      "Worked across routing and navigation flows, map behavior, backend integration, live-trip behavior, and Android implementation across the commuter journey.",
    scope: "Multimodal commuter navigation for Pampanga",
    repository: "https://github.com/Mark-Batongbacal/AUP",
  },
  {
    number: "04",
    title: "AUFTHORIZE",
    description:
      "A digital request and approval platform for AUF workflows covering venue, budget, liquidation, reimbursement, and material requests, with multi-stage review, e-signatures, attachments, email notifications, review queues, and generated signed PDF e-copies.",
    tags: ["PHP", "MySQLi", "mPDF / FPDI", "PHPMailer"],
    homepage: "featured",
    imageLabel: "DIGITAL APPROVAL WORKFLOW",
    ownership: "Team of 2 developers",
    role: "Full-stack Developer",
    contribution:
      "Co-developed the end-to-end approval system, including workflow logic, role-based review behavior, request handling, generated document outputs, e-signature flows, attachments, and email notifications.",
    scope: "Venue · Budget · Liquidation · Reimbursement · Materials",
    repository: "https://github.com/KurtSarmiento/auf-requests-system",
  },
  {
    number: "05",
    title: "ENGRLINK",
    description:
      "An academic portal prototype designed around the workflows of the AUF College of Engineering and Architecture (CEA), supporting students, faculty, accounting, and department chairs through enrollment, schedules, grades, balances, subject offerings, and role-based academic workflows.",
    tags: ["C#", "WinUI 3", ".NET", "Supabase"],
    homepage: "more",
    imageLabel: "AUF CEA ACADEMIC PORTAL",
    ownership: "Team of 3 developers",
    role: "Desktop / Full-stack Developer",
    contribution:
      "Co-developed the academic portal and enrollment workflows, role-based experiences, academic data handling, and Supabase-backed application behavior for AUF CEA.",
    scope: "AUF College of Engineering and Architecture",
    repository: "https://github.com/Mark-Batongbacal/EngrLink",
  },
  {
    number: "06",
    title: "GAUSS BUSTERS",
    description:
      "An interactive numerical-methods desktop solver with a Ghostbusters-inspired interface, supporting equation parsing, Bisection, Newton-Raphson, Secant, Gaussian Elimination, regression methods, step-by-step iteration data, and plotted numerical results.",
    tags: ["C#", ".NET 8", "WinUI 3", "ScottPlot"],
    homepage: "more",
    imageLabel: "NUMERICAL METHODS SOLVER",
    ownership: "Solo project",
    role: "Desktop Developer",
    contribution:
      "Implemented the numerical algorithms, equation-processing flow, iterative result presentation, plotting, and the desktop interface as a complete numerical-methods learning tool.",
    scope: "Root finding · Linear systems · Regression",
    repository: "https://github.com/gutierrez-jv/LVS-Gauss-Busters",
  },
];
