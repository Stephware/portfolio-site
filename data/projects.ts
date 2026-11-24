export type Project = {
  number: string;
  title: string;
  description: string;
  homepageSummary?: string;
  tags: string[];
  featured?: boolean;
  homepage?: "featured" | "more";
  imageLabel: string;
  ownership: string;
  role: string;
  contribution: string;
  scope?: string;
  status?: string;
  repository?: string;
  repositoryLabel?: string;
  detailPath?: string;
  detailLabel?: string;
  liveUrl?: string;
  previewImage?: string;
  previewAlt?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "INNOVET",
    homepageSummary: "Multi-branch veterinary platform connecting scheduling, pet records, medical histories, branch operations, and network administration.",
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
    status: "Production system",
    repositoryLabel: "Private source",
    detailPath: "/projects/innovet",
    liveUrl: "https://apcc-innovet.runasp.net/",
    previewImage: "/projects/innovet/Screenshot 2026-08-30 at 11.58.07 AM.png",
    previewAlt: "INNOVET veterinary clinic management system interface",
  },
  {
    number: "02",
    title: "VITALLY",
    homepageSummary: "Clinic operations platform for sales, expenses, inventory, reporting, audit records, and role-based daily workflows across two clinics.",
    description:
      "A mobile-friendly clinic operations and transaction platform built for two clinics, with expansion in mind as additional clinics express interest. It supports role-based workspaces, sales and expense records, inventory monitoring, transaction history, and daily operational summaries.",
    tags: ["ASP.NET Core", ".NET 9", "EF Core", "SQL Server"],
    homepage: "featured",
    imageLabel: "CLINIC OPERATIONS SYSTEM",
    ownership: "Solo project",
    role: "Full-stack Developer",
    contribution:
      "Built the application end to end, including role-based authentication, sales and payment workflows, expenses, inventory and stock movement logic, reporting, auditability, responsive interfaces, PWA support, and production deployment.",
    scope: "Built for 2 clinics · designed to expand",
    status: "Client system",
    repositoryLabel: "Private source",
    detailPath: "/projects/vitally",
    previewImage: "/projects/vitally/mainpage-vitally.png",
    previewAlt: "Sanitized VITALLY clinic operations dashboard",
  },
  {
    number: "03",
    title: "TUKI",
    homepageSummary: "AI-assisted Pampanga commuter navigation combining conversational trip intent with deterministic multimodal routing and live trip guidance.",
    description:
      "An AI-assisted multimodal public-transport navigation app for Pampanga that combines conversational commuter intent with deterministic route planning across walking, tricycle, and jeepney legs, including transfers, fares, ETA, live trip state, navigation guidance, and rerouting.",
    tags: ["Kotlin", "Jetpack Compose", "ASP.NET Core", "SQL Server"],
    homepage: "featured",
    imageLabel: "MULTIMODAL TRANSPORT NAVIGATION",
    ownership: "Team project",
    role: "Full-stack / Mobile Developer",
    contribution:
      "Worked across routing and navigation flows, map behavior, backend integration, live-trip behavior, Android implementation, and the commuter-facing experience from onboarding through active navigation.",
    scope: "Multimodal commuter navigation for Pampanga",
    status: "Hackathon / team product",
    repository: "https://github.com/Mark-Batongbacal/AUP",
    detailPath: "/projects/tuki",
    previewImage: "/projects/tuki/Screenshot 2026-08-30 at 9.01.43 PM.png",
    previewAlt: "TUKI onboarding screen featuring the app mascot",
  },
  {
    number: "04",
    title: "AniGo",
    homepageSummary: "Completed farmer-first web and Android system for crop planning, fieldwork, stock use, partial harvests, weather reminders, and offline recording.",
    description:
      "A completed academic farm-management MVP built by a two-developer team. AniGo connects farm and plot setup, crop calendars, daily field activities, inspections with optional photos, supply inventory, partial harvest records, and saved weather reminders across a .NET web app and Kotlin Android app with selected offline workflows.",
    tags: [".NET 10", "ASP.NET Core", "SQL Server", "Kotlin", "Hangfire"],
    featured: true,
    homepage: "featured",
    imageLabel: "FARM MANAGEMENT · WEB + ANDROID",
    ownership: "Two-developer team",
    role: "Full-stack / Android Developer",
    contribution:
      "Co-developed farm-management workflows and the web/Android experience, integrating backend services, API-backed field recording, inventory, harvest reporting, scheduled tasks, and offline synchronization.",
    scope: "Web · Android · API · background worker",
    status: "Completed academic MVP",
    repository: "https://github.com/Stephware/SmartFarm",
    detailPath: "/projects/anigo",
    previewImage: "/projects/anigo/Screenshot 2026-11-24 at 8.32.41 PM.png",
    previewAlt: "AniGo web dashboard showing farm priorities, tasks and weather",
  },
  {
    number: "05",
    title: "AUFTHORIZE",
    homepageSummary: "Digital university request and approval workflows with multi-stage review, e-signatures, generated PDF outputs, and email notifications.",
    description:
      "A digital request and approval platform for AUF workflows covering venue, budget, liquidation, reimbursement, and material requests, with multi-stage review, e-signatures, attachments, email notifications, review queues, and generated signed PDF e-copies.",
    tags: ["PHP", "MySQLi", "mPDF / FPDI", "PHPMailer"],
    homepage: "more",
    imageLabel: "DIGITAL APPROVAL WORKFLOW",
    ownership: "Team of 2 developers",
    role: "Full-stack Developer",
    contribution:
      "Co-developed the end-to-end approval system, including workflow logic, role-based review behavior, request handling, generated document outputs, e-signature flows, attachments, and email notifications.",
    scope: "Venue · Budget · Liquidation · Reimbursement · Materials",
    status: "Academic team project",
    repository: "https://github.com/KurtSarmiento/auf-requests-system",
    detailPath: "/projects/aufthorize",
    detailLabel: "View project",
    previewImage: "/projects/aufthorize/aufthorize-5.png",
    previewAlt: "AUFTHORIZE officer dashboard showing request workflow summaries",
  },
  {
    number: "06",
    title: "ENGRLINK",
    homepageSummary: "Role-based AUF CEA academic portal prototype for enrollment, records, schedules, grades, balances, and announcements.",
    description:
      "An academic portal prototype designed around the workflows of the AUF College of Engineering and Architecture, supporting role-based access to enrollment, student and faculty records, schedules, grades, balances, subject offerings, and announcements.",
    tags: ["C#", "WinUI 3", ".NET", "Supabase"],
    homepage: "more",
    imageLabel: "AUF CEA ACADEMIC PORTAL",
    ownership: "Team of 3 developers",
    role: "Desktop / Full-stack Developer",
    contribution:
      "Co-developed the academic portal, enrollment workflows, role-based experiences, academic data handling, and Supabase-backed application behavior for AUF CEA.",
    scope: "AUF College of Engineering and Architecture",
    status: "Academic team project",
    repository: "https://github.com/Mark-Batongbacal/EngrLink",
    detailPath: "/projects/engrlink",
    detailLabel: "View project",
    previewImage: "/projects/engrlink/engrlink-1.png",
    previewAlt: "ENGRLINK AUF College of Engineering and Architecture desktop portal",
  },
  {
    number: "07",
    title: "GAUSS BUSTERS",
    homepageSummary: "Desktop numerical-methods solver with traceable iteration steps, equation processing, and plotted numerical results.",
    description:
      "An interactive numerical-methods desktop solver with a Ghostbusters-inspired interface, supporting equation parsing, Bisection, Newton-Raphson, Secant, Gaussian Elimination, regression methods, step-by-step iteration data, and plotted numerical results.",
    tags: ["C#", ".NET 8", "WinUI 3", "ScottPlot"],
    homepage: "more",
    imageLabel: "NUMERICAL METHODS SOLVER",
    ownership: "Solo project",
    role: "Desktop Developer",
    contribution:
      "Implemented the numerical algorithms, equation-processing flow, iterative result presentation, plotting, and desktop interface as a numerical-methods learning tool.",
    scope: "Root finding · Linear systems · Regression",
    status: "Academic solo project",
    repository: "https://github.com/gutierrez-jv/LVS-Gauss-Busters",
    detailPath: "/projects/gauss-busters",
    detailLabel: "View project",
    previewImage: "/projects/gauss-busters/gaussbusters-1.png",
    previewAlt: "GAUSS BUSTERS numerical methods solver showing Newton-Raphson iteration results",
  },
];
