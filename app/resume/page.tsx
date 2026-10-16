import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/components/DirectoryPage.module.css";

export const metadata: Metadata = {
  title: "Resume | Stephen Pinacate",
  description:
    "Resume of Stephen Pinacate, a Computer Engineering student focused on software engineering, full-stack development, mobile applications, and embedded systems.",
};

const skills = [
  ["Programming languages", "C# · C · C++ · Python · JavaScript / TypeScript · SQL"],
  ["Web & backend", "ASP.NET Core · REST APIs · JWT · PHP · React.js · HTML / CSS"],
  ["Desktop & mobile", "WinUI 3 · .NET · Kotlin · Android Jetpack Compose · React Native"],
  ["Databases & persistence", "SQL Server · PostgreSQL · MySQL · MongoDB · Supabase · EF Core · SQLite"],
  ["Engineering workflow", "Git / GitHub · Agile collaboration · RBAC · offline-first synchronization concepts"],
];

const experience = [
  {
    title: "INNOVET — Multi-Branch Veterinary Clinic Management Platform",
    meta: "Solo · Full-stack Developer",
    description:
      "Engineered a veterinary operations platform for appointment scheduling, patient histories, client records, and branch administration across a planned network of 10 clinics and one veterinary hospital.",
    stack: "ASP.NET Core · C# · Entity Framework Core · SQL Server",
  },
  {
    title: "VITALLY — Clinic Operations and Transaction Platform",
    meta: "Solo · Full-stack Developer",
    description:
      "Independently delivered a production-used clinic management platform that centralizes financial transactions, inventory control, expense tracking, reporting, and audit records in a mobile-friendly system.",
    stack: "ASP.NET Core · SQL Server · Responsive Web / PWA",
  },
];

const softwareProjects = [
  {
    title: "TUKI — AI-Assisted Public Transport Navigation",
    meta: "Team · Full-stack / Mobile Developer",
    description:
      "Helped develop a multimodal public transportation navigation platform for realistic journeys involving walking, tricycles, and jeepneys across Pampanga, including routing, fares, transfers, live trip state, navigation guidance, and rerouting.",
    stack: "Kotlin · Jetpack Compose · ASP.NET Core · SQL Server",
  },
  {
    title: "AUFTHORIZE — Digital Request and Approval System",
    meta: "Two-developer team · Full-stack Developer",
    description:
      "Co-developed a digital approval platform for venue, budget, liquidation, reimbursement, and material requests with multi-stage review, role-based workflows, e-signatures, document generation, attachments, and email notifications.",
    stack: "PHP · MySQLi · PDF Generation · PHPMailer",
  },
  {
    title: "ENGRLINK — Academic Portal Prototype",
    meta: "Three-developer team · Desktop / Full-stack Developer",
    description:
      "Co-developed a role-based academic management prototype covering student records, enrollment, grading, scheduling, balances, subject offerings, and administrative workflows for AUF CEA.",
    stack: "C# · WinUI 3 · .NET · Supabase",
  },
  {
    title: "GAUSS BUSTERS — Numerical Methods Desktop Solver",
    meta: "Solo · Desktop Developer",
    description:
      "Built an interactive numerical computing application with traceable step-by-step solutions for root finding, Gaussian Elimination, regression methods, iteration results, and numerical plotting.",
    stack: "C# · .NET 8 · WinUI 3 · ScottPlot",
  },
  {
    title: "PORTFOLIO SITE — Personal Developer Portfolio",
    meta: "Solo · 2026",
    description:
      "Designed and deployed a responsive developer portfolio presenting software and embedded engineering work, technical competencies, achievements, and leadership experience.",
    stack: "Next.js · React · TypeScript · Tailwind CSS",
  },
];

const currentProjects = [
  {
    title: "AUF NAVI — AI-Assisted Smart Campus Platform",
    meta: "Thesis · Active development",
    description:
      "Developing a smart campus platform that combines campus guidance with answers grounded in verified institutional information through structured data and retrieval-augmented AI assistance.",
    stack: "ASP.NET Core · .NET 10 · SQL Server · RAG",
  },
  {
    title: "ICpEP Region 3 Hub — Regional Chapter Management Website",
    meta: "Solo · Full-stack Developer",
    description:
      "Developing a regional coordination platform for centralized announcements, event management, chapter directories, assistance requests, collaboration tools, account management, and administrative workflows.",
    stack: "Next.js · React · NestJS · Prisma · PostgreSQL",
  },
  {
    title: "Deco My Parol — Interactive Digital Christmas Lantern Platform",
    meta: "Three-developer team · Full-stack Developer",
    description:
      "Co-developing a collaborative digital lantern experience with account authentication, anonymous guest contributions, database-backed designs, and responsive SVG interfaces.",
    stack: "React · TypeScript · Vite · ASP.NET Core .NET 10 · SQL Server · Tailwind CSS",
  },
];

const hardware = [
  "ESP32 Sumobot Controller — mobile control, sensor-assisted movement, opponent detection, boundary awareness, and robot-control troubleshooting.",
  "Spider Robot — multi-legged embedded robotic system focused on coordinated servo movement, directional control, and sensor-responsive behavior.",
  "Smart Environmental Monitoring System — ESP32 and Flutter prototype for remote temperature/humidity monitoring and alert logic.",
  "Embedded Motor and Actuator Control System — wireless servo, stepper, analog monitoring, and mobile-control integration.",
  "Smart Sensor–Actuator Automation System — DHT11/PIR sensing, automatic actuator responses, and Flutter-based manual/automatic control.",
  "Digital Door Lock Using Logic Circuits — hardware-only configurable password setting, changing, and verification.",
  "Spinergy — rotary-controlled multi-output DC power supply with voltage regulation, PCB assembly, soldering, and testing.",
];

const achievements = [
  "2026 — Overall Champion, 9th Regional CpE Challenge (member of the recognized delegation).",
  "2026 — 2nd Place, Networking Competition, 9th Regional CpE Challenge.",
  "2024–Present — University Scholar, Angeles University Foundation (95 GWA).",
  "2023–Present — Department of Science and Technology (DOST) Scholar.",
  "2023–2024 — College Scholar, Angeles University Foundation (90 GWA).",
  "Most Outstanding Student Council — First Place (team recognition).",
  "Eureka Award — member of an organization recognized for academic excellence.",
];

const leadership = [
  "Vice President – Internal — ICpEP.se Region 3 | 2026 – Present",
  "President — ICpEP.se AUF Chapter | 2026 – Present",
  "Vice President — AUF College of Engineering and Architecture Student Council | 2025 – 2026",
  "Treasurer — ICpEP.se AUF Chapter | 2025 – 2026",
  "Junior Officer — AUF College of Engineering and Architecture Student Council | 2024 – 2025",
  "Technical Coordinator — CEA Athletics and Talents Support Squad | 2024 – 2025",
  "Second Year Representative — ICpEP.se AUF Chapter | 2024 – 2025",
  "Class Vice President — Class Organization | 2023 – 2024",
];

export default function ResumePage() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/#top">← Portfolio</Link>
          <a
            href="https://www.linkedin.com/in/stephen-pinacate-3bb592319/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>Resume · 2026</span>
            <h1>Stephen<br />Pinacate</h1>
            <p>
              Computer Engineering student and DOST Scholar focused on software engineering,
              full-stack development, mobile applications, and embedded systems, with hands-on
              experience building and deploying end-to-end solutions for operational use.
            </p>
          </div>
          <div className={styles.heroAside}>
            Mabalacat City, Pampanga, Philippines<br />
            <a href="mailto:pinacate.stephen@gmail.com">pinacate.stephen@gmail.com</a><br />
            <a href="https://github.com/Stephware" target="_blank" rel="noreferrer">github.com/Stephware ↗</a><br />
            <a href="https://www.linkedin.com/in/stephen-pinacate-3bb592319/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Education</span>
            <h2>Computer Engineering at Angeles University Foundation.</h2>
          </div>
          <div className={styles.list}>
            <article className={styles.basicRow}>
              <span className={styles.index}>2023</span>
              <div>
                <h3 className={styles.basicTitle}>Bachelor of Science in Computer Engineering</h3>
                <p className={styles.basicDescription}>
                  University Scholar (2024–Present), 95 GWA · DOST Scholar (2023–Present) ·
                  College Scholar (2023–2024), 90 GWA.
                </p>
              </div>
              <div className={styles.projectMeta}><span>Angeles University Foundation</span></div>
              <span className={styles.arrow}>—</span>
            </article>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Skills</span>
            <h2>Software engineering toolkit.</h2>
          </div>
          <div className={styles.list}>
            {skills.map(([category, items], index) => (
              <article className={styles.basicRow} key={category}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.basicTitle}>{category}</h3>
                  <p className={styles.basicDescription}>{items}</p>
                </div>
                <span />
                <span className={styles.arrow}>—</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Freelance / work experience</span>
            <h2>Operational systems built end to end.</h2>
          </div>
          <div className={styles.list}>
            {experience.map((item, index) => (
              <article className={styles.basicRow} key={item.title}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.basicTitle}>{item.title}</h3>
                  <p className={styles.basicDescription}>{item.description}</p>
                  <div className={styles.tags}>{item.stack.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className={styles.projectMeta}><span>{item.meta}</span></div>
                <span className={styles.arrow}>—</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Selected software engineering projects</span>
            <h2>Web, mobile, desktop, and operational software.</h2>
          </div>
          <div className={styles.list}>
            {softwareProjects.map((item, index) => (
              <article className={styles.basicRow} key={item.title}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.basicTitle}>{item.title}</h3>
                  <p className={styles.basicDescription}>{item.description}</p>
                  <div className={styles.tags}>{item.stack.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className={styles.projectMeta}><span>{item.meta}</span></div>
                <span className={styles.arrow}>—</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Current projects</span>
            <h2>Active development.</h2>
          </div>
          <div className={styles.list}>
            {currentProjects.map((item, index) => (
              <article className={styles.basicRow} key={item.title}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className={styles.basicTitle}>{item.title}</h3>
                  <p className={styles.basicDescription}>{item.description}</p>
                  <div className={styles.tags}>{item.stack.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className={styles.projectMeta}><span>{item.meta}</span></div>
                <span className={styles.arrow}>—</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Hardware & embedded systems</span>
            <h2>Applied engineering and technical problem-solving.</h2>
          </div>
          <div className={styles.list}>
            {hardware.map((item, index) => (
              <article className={styles.achievementRow} key={item}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div><p>{item}</p></div>
                <span className={styles.index}>HW</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Achievements</span>
            <h2>Academic and technical recognition.</h2>
          </div>
          <div className={styles.list}>
            {achievements.map((item, index) => (
              <article className={styles.achievementRow} key={item}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div><p>{item}</p></div>
                <span className={styles.index}>—</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Leadership</span>
            <h2>Organization and student leadership experience.</h2>
          </div>
          <div className={styles.list}>
            {leadership.map((item, index) => (
              <article className={styles.achievementRow} key={item}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
                <div><p>{item}</p></div>
                <span className={styles.index}>—</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>Competitions</span>
            <h2>Technical competition experience.</h2>
          </div>
          <div className={styles.list}>
            <article className={styles.achievementRow}>
              <span className={styles.index}>2026</span>
              <div><p>Can You HackIT? The IBPAP Challenge — Hackathon Finalist, team lead, and Best School Award.</p></div>
              <span className={styles.index}>01</span>
            </article>
            <article className={styles.achievementRow}>
              <span className={styles.index}>2026</span>
              <div><p>Cisco APJC NetAcad Riders — Round 1 participant focused on networking, troubleshooting, and technical problem-solving.</p></div>
              <span className={styles.index}>02</span>
            </article>
            <article className={styles.achievementRow}>
              <span className={styles.index}>2026</span>
              <div><p>9th Regional CpE Challenge — 2nd Place in the Networking Competition and participant in the Breadboarding Competition.</p></div>
              <span className={styles.index}>03</span>
            </article>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.kicker}>References</span>
            <h2>Professional references available upon request.</h2>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Stephen Pinacate · Resume</span>
          <Link href="/#top">Back to portfolio ↑</Link>
        </footer>
      </main>
    </>
  );
}
