import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./innovet.module.css";

export const metadata: Metadata = {
  title: "INNOVET — Veterinary Clinic Management System | Stephen Pinacate",
  description:
    "Case study for INNOVET, a multi-branch veterinary clinic management system with client, branch-admin, and super-admin workflows.",
};

const liveUrl = "https://apcc-innovet.runasp.net/";

const clientScreens = [
  "/Screenshot 2026-08-30 at 11.58.30 AM.png",
  "/Screenshot 2026-08-30 at 11.58.48 AM.png",
  "/Screenshot 2026-08-30 at 11.59.08 AM.png",
  "/Screenshot 2026-08-30 at 11.59.22 AM.png",
  "/Screenshot 2026-08-30 at 11.59.40 AM.png",
  "/Screenshot 2026-08-30 at 11.59.50 AM.png",
  "/Screenshot 2026-08-30 at 12.00.02 PM.png",
  "/Screenshot 2026-08-30 at 12.00.31 PM.png",
  "/Screenshot 2026-08-30 at 12.00.50 PM.png",
  "/Screenshot 2026-08-30 at 12.01.22 PM.png",
  "/Screenshot 2026-08-30 at 12.01.36 PM.png",
  "/Screenshot 2026-08-30 at 12.01.46 PM.png",
  "/Screenshot 2026-08-30 at 12.02.02 PM.png",
  "/Screenshot 2026-08-30 at 12.02.21 PM.png",
  "/Screenshot 2026-08-30 at 12.02.38 PM.png",
];

const adminScreens = [
  "/Screenshot 2026-08-30 at 12.04.28 PM.png",
  "/Screenshot 2026-08-30 at 12.05.06 PM.png",
  "/Screenshot 2026-08-30 at 12.05.28 PM.png",
  "/Screenshot 2026-08-30 at 12.05.40 PM.png",
  "/Screenshot 2026-08-30 at 12.05.50 PM.png",
  "/Screenshot 2026-08-30 at 12.05.57 PM.png",
  "/Screenshot 2026-08-30 at 12.06.17 PM.png",
  "/Screenshot 2026-08-30 at 12.06.28 PM.png",
  "/Screenshot 2026-08-30 at 12.06.44 PM.png",
];

const superAdminScreens = [
  "/Screenshot 2026-08-30 at 12.09.27 PM.png",
  "/Screenshot 2026-08-30 at 12.09.49 PM.png",
  "/Screenshot 2026-08-30 at 12.09.59 PM.png",
  "/Screenshot 2026-08-30 at 12.10.09 PM.png",
  "/Screenshot 2026-08-30 at 12.10.20 PM.png",
  "/Screenshot 2026-08-30 at 12.10.30 PM.png",
  "/Screenshot 2026-08-30 at 12.10.42 PM.png",
  "/Screenshot 2026-08-30 at 12.12.30 PM.png",
  "/Screenshot 2026-08-30 at 12.12.39 PM.png",
  "/Screenshot 2026-08-30 at 12.12.51 PM.png",
];

const clientFeatures = [
  "Account registration, secure login, remembered sessions, and password-reset flow",
  "Dashboard summaries for pets, appointments, support inquiries, and vaccination reminders",
  "Create, edit, and remove pet profiles with core pet information",
  "Browse clinic branches and branch-specific service catalogs",
  "Book appointments through branch, service, schedule, and veterinarian-aware workflows",
  "Review appointment activity and pet history from the client portal",
  "Track vaccination status, due-today, upcoming, and overdue reminders per pet",
  "Open support inquiries that are routed to the selected clinic branch and continue the conversation in a thread",
  "Receive client-side notifications and maintain personal account information",
];

const adminFeatures = [
  "Branch-scoped dashboard for active clients, appointments, open inquiries, and staff visibility",
  "Filter and review appointments by branch, date, and status",
  "Approve, reject, cancel, or complete appointments through controlled status transitions",
  "Create manual appointments for walk-ins or staff-assisted booking",
  "Use a clinic calendar with operating-day rules and veterinarian/groomer capacity summaries",
  "Open appointment details and create medical or vaccination records after completed visits",
  "Access supporting medical-record attachments and patient history",
  "Search client accounts and deactivate or reactivate accounts within the assigned branch scope",
  "Manage branch services, promotions, veterinarians, and branch operational information",
  "Handle branch-routed support inquiries and receive operational notifications",
];

const superAdminFeatures = [
  "System-wide dashboard with visibility across the full clinic network",
  "See appointments, active clients, inquiries, and staff without branch-level restriction",
  "Create, edit, and remove clinic branches with dependency safeguards",
  "Configure branch hours, closed days, capacity, grooming cutoff, and emergency-mode settings",
  "Manage services across branches, including availability, category, duration, and handling type",
  "Manage promotions and veterinarian records across the network",
  "Review cross-branch appointments, calendars, manual bookings, and client accounts",
  "Oversee medical and vaccination record workflows that connect completed appointments to patient history",
  "Receive management notifications when operational records such as services, promotions, or veterinarians change",
];

function ScreenshotGallery({
  screens,
  label,
}: {
  screens: string[];
  label: string;
}) {
  return (
    <div className={styles.gallery} aria-label={`${label} interface gallery`}>
      {screens.map((src, index) => (
        <figure className={styles.screenshotCard} key={src}>
          <div className={styles.screenshotViewport}>
            <Image
              src={src}
              alt={`${label} interface screenshot ${index + 1}`}
              fill
              sizes="(max-width: 800px) 100vw, 50vw"
              className={styles.screenshotImage}
            />
          </div>
          <figcaption>
            <span>{label}</span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className={styles.featureList}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default function InnovetCaseStudy() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/#projects">← Back to portfolio</Link>
          <a href={liveUrl} target="_blank" rel="noreferrer">
            Open live system ↗
          </a>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroEyebrow}>
            <span>01 — Flagship case study</span>
            <span>Solo full-stack project</span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.micro}>Multi-branch veterinary platform</p>
              <h1>INNOVET</h1>
              <p className={styles.heroLead}>
                A centralized veterinary clinic management system designed around the workflows of
                10 clinic branches and one veterinary hospital — connecting clients, branch staff,
                clinical records, scheduling, and network-wide administration in one platform.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.primaryAction} href={liveUrl} target="_blank" rel="noreferrer">
                  Visit live system ↗
                </a>
                <a className={styles.secondaryAction} href="#roles">
                  Explore the workflows ↓
                </a>
              </div>
            </div>

            <dl className={styles.projectFacts}>
              <div><dt>Role</dt><dd>Full-stack Developer</dd></div>
              <div><dt>Ownership</dt><dd>Solo project</dd></div>
              <div><dt>Scope</dt><dd>10 branches + 1 veterinary hospital</dd></div>
              <div><dt>Stack</dt><dd>ASP.NET Core · .NET 9 · EF Core · SQL Server</dd></div>
            </dl>
          </div>

          <figure className={styles.heroVisual}>
            <div className={styles.browserChrome}>
              <span />
              <span />
              <span />
              <p>apcc-innovet.runasp.net</p>
            </div>
            <div className={styles.heroImageFrame}>
              <Image
                src="/Screenshot 2026-08-30 at 11.58.07 AM.png"
                alt="INNOVET veterinary clinic management system"
                fill
                priority
                sizes="100vw"
                className={styles.heroImage}
              />
            </div>
          </figure>
        </section>

        <section className={styles.introSection}>
          <div>
            <p className={styles.sectionIndex}>01 — System overview</p>
            <h2>One system, three operational perspectives.</h2>
          </div>
          <div className={styles.prose}>
            <p>
              INNOVET is not only an appointment-booking interface. It centralizes the relationship
              between pet owners, individual clinic branches, and network-level administration while
              preserving the different permissions and responsibilities each role needs.
            </p>
            <p>
              Client activity feeds branch operations; completed visits can become medical and
              vaccination records; branch-specific services, schedules, capacity, promotions, and
              support concerns remain scoped to the right location; and Super Admin users can oversee
              the network as a whole.
            </p>
          </div>
        </section>

        <nav className={styles.roleNav} id="roles" aria-label="INNOVET role sections">
          <a href="#client"><span>01</span> Client</a>
          <a href="#admin"><span>02</span> Branch Admin</a>
          <a href="#super-admin"><span>03</span> Super Admin</a>
        </nav>

        <section className={styles.roleSection} id="client">
          <div className={styles.roleHeading}>
            <p className={styles.sectionIndex}>02 — Client portal</p>
            <h2>Pet care, appointments, records, and clinic communication from one account.</h2>
            <p>
              The client side keeps routine veterinary interactions in one place while still routing
              branch-dependent actions to the clinic location responsible for them.
            </p>
          </div>
          <FeatureList items={clientFeatures} />
          <ScreenshotGallery screens={clientScreens} label="Client portal" />
        </section>

        <section className={styles.roleSection} id="admin">
          <div className={styles.roleHeading}>
            <p className={styles.sectionIndex}>03 — Branch Admin</p>
            <h2>Daily clinic operations stay powerful without escaping the assigned branch.</h2>
            <p>
              Branch Admin users work with the appointments, clients, services, clinical workflows,
              schedules, and communications relevant to their own location. Branch scoping is enforced
              in the application rather than treated as a visual filter only.
            </p>
          </div>
          <FeatureList items={adminFeatures} />
          <ScreenshotGallery screens={adminScreens} label="Branch Admin" />
        </section>

        <section className={styles.roleSection} id="super-admin">
          <div className={styles.roleHeading}>
            <p className={styles.sectionIndex}>04 — Super Admin</p>
            <h2>Network-wide control for the parts of the system that cross branch boundaries.</h2>
            <p>
              Super Admin expands the same operational model to the full network, adding cross-branch
              visibility and management controls that would be inappropriate for a single clinic admin.
            </p>
          </div>
          <FeatureList items={superAdminFeatures} />
          <ScreenshotGallery screens={superAdminScreens} label="Super Admin" />
        </section>

        <section className={styles.workflowSection}>
          <div>
            <p className={styles.sectionIndex}>05 — Connected workflow</p>
            <h2>The roles are separate, but the data journey is continuous.</h2>
          </div>
          <div className={styles.workflowTrack}>
            <div><span>01</span><strong>Client</strong><p>Pet profile · booking · inquiry</p></div>
            <i>→</i>
            <div><span>02</span><strong>Clinic branch</strong><p>Schedule · service · capacity</p></div>
            <i>→</i>
            <div><span>03</span><strong>Branch Admin</strong><p>Review · visit · records</p></div>
            <i>→</i>
            <div><span>04</span><strong>Super Admin</strong><p>Cross-branch oversight</p></div>
          </div>
        </section>

        <section className={styles.engineeringSection}>
          <div className={styles.engineeringLead}>
            <p className={styles.sectionIndex}>06 — Engineering</p>
            <h2>Built as an operational system, not a collection of disconnected screens.</h2>
            <p>
              The project uses ASP.NET Core MVC with database-backed repositories and services,
              role-based authorization, branch claims, controlled booking and appointment workflows,
              notifications, and centralized clinical data.
            </p>
          </div>

          <div className={styles.engineeringGrid}>
            <article>
              <span>Architecture</span>
              <h3>Role-aware MVC application</h3>
              <p>Client, Branch Admin, and Super Admin flows share one domain while enforcing different access boundaries.</p>
            </article>
            <article>
              <span>Data</span>
              <h3>EF Core + SQL Server</h3>
              <p>Appointments, branches, clients, pets, services, promotions, inquiries, clinical records, vaccines, and files remain connected.</p>
            </article>
            <article>
              <span>Workflow</span>
              <h3>Stateful clinic operations</h3>
              <p>Appointments move through guarded statuses, capacity rules, notifications, completion, and downstream record creation.</p>
            </article>
            <article>
              <span>Security</span>
              <h3>Role and branch scoping</h3>
              <p>Authorization roles and branch claims determine what administrative records a user can view or modify.</p>
            </article>
          </div>
        </section>

        <section className={styles.ownershipSection}>
          <p className={styles.sectionIndex}>07 — My contribution</p>
          <div>
            <h2>Designed and implemented end to end.</h2>
            <p>
              INNOVET is a solo project. I worked across the application architecture, database-backed
              workflows, client experience, administrative portals, role authorization, branch logic,
              booking, medical and vaccination records, notifications, communications, and deployment.
            </p>
          </div>
        </section>

        <footer className={styles.caseFooter}>
          <div>
            <p className={styles.micro}>INNOVET · Live deployment</p>
            <h2>See the system itself.</h2>
          </div>
          <div className={styles.footerActions}>
            <a className={styles.primaryAction} href={liveUrl} target="_blank" rel="noreferrer">
              Visit INNOVET ↗
            </a>
            <Link className={styles.secondaryAction} href="/#projects">
              Back to portfolio ←
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
