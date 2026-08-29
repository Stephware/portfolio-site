export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  imageLabel: string;
  repository?: string;
  repositoryLabel?: string;
};

export const projects: Project[] = [
  {
    number: "01",
    title: "INNOVET",
    description:
      "A centralized veterinary clinic management platform designed for 10 branches and one veterinary hospital. It brings branch-aware appointment booking, client and pet records, medical and vaccination histories, file-backed records, promotions, notifications, and client-to-branch inquiries into one role-based system.",
    tags: ["ASP.NET Core", ".NET 9", "EF Core", "SQL Server"],
    featured: true,
    imageLabel: "MULTI-BRANCH VETERINARY PLATFORM",
    repositoryLabel: "Private repository",
  },
  {
    number: "02",
    title: "VITALLY",
    description:
      "A mobile-friendly clinic operations and transaction system designed for two clinics, with expansion in mind as additional clinics express interest. It supports role-based workspaces, sales and expense records, inventory and low-stock monitoring, searchable transaction history, and daily activity summaries.",
    tags: ["React", "ASP.NET Core", "JWT", "SQL Server"],
    imageLabel: "CLINIC OPERATIONS SYSTEM",
    repositoryLabel: "Private repository",
  },
  {
    number: "03",
    title: "TUKI",
    description:
      "An AI-assisted multimodal public-transport navigation app for Pampanga that combines conversational commuter intent with deterministic route planning across walking, tricycle, and jeepney legs. It handles transfers, fare and ETA calculations, route ranking, live trip state, navigation guidance, and rerouting.",
    tags: ["Kotlin", "Jetpack Compose", "ASP.NET Core", "SQL Server"],
    imageLabel: "MULTIMODAL TRANSPORT NAVIGATION",
    repository: "https://github.com/Mark-Batongbacal/AUP",
  },
  {
    number: "04",
    title: "AUFTHORIZE",
    description:
      "A digital request and approval platform for AUF workflows covering venue, budget, liquidation, reimbursement, and material requests. It implements role-based multi-stage review, e-signatures, attachments, email notifications, review queues, and generated PDF e-copies that carry completed approvals and signatures.",
    tags: ["PHP", "MySQLi", "mPDF / FPDI", "PHPMailer"],
    imageLabel: "DIGITAL APPROVAL WORKFLOW",
    repository: "https://github.com/KurtSarmiento/auf-requests-system",
  },
  {
    number: "05",
    title: "ENGRLINK",
    description:
      "An academic portal prototype designed around the workflows of AUF's College of Engineering and Architecture (CEA). It supports students, faculty, accounting, and department chairs through subject enrollment and offerings, schedules, grades and GWA, balances, faculty assignments, and role-based academic workflows.",
    tags: ["C#", "WinUI 3", ".NET 6", "Supabase"],
    imageLabel: "AUF CEA ACADEMIC PORTAL",
    repository: "https://github.com/Mark-Batongbacal/EngrLink",
  },
  {
    number: "06",
    title: "Mallow's Cafe Kiosk",
    description:
      "A digital transformation of the cafe ordering experience, designed around a self-service kiosk that makes menu browsing and order entry clearer and more efficient while providing a foundation for a more streamlined cafe order workflow.",
    tags: ["Kiosk", "Ordering UX", "Cafe Operations"],
    imageLabel: "SELF-SERVICE CAFE ORDERING",
    repositoryLabel: "Project source not linked",
  },
  {
    number: "07",
    title: "GAUSS BUSTERS",
    description:
      "An interactive numerical-methods desktop solver with a Ghostbusters-inspired interface. It implements equation parsing, Bisection, Newton-Raphson, Secant, Gaussian Elimination, regression methods, step-by-step iteration data, and plotted numerical results.",
    tags: ["C#", ".NET 8", "WinUI 3", "ScottPlot"],
    imageLabel: "NUMERICAL METHODS SOLVER",
    repository: "https://github.com/gutierrez-jv/LVS-Gauss-Busters",
  },
];
