import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import base from "../innovet/innovet.module.css";
import styles from "./vitally.module.css";

export const metadata: Metadata = {
  title: "VITALLY — Clinic Operations Platform | Stephen Pinacate",
  description:
    "Case study for VITALLY, a role-based clinic operations platform connecting sales, inventory, expenses, reporting, and operational accountability.",
};

const adminFeatures = [
  "Review operational summaries, recent transactions, and low-stock items from one dashboard",
  "Manage products, categories, pricing behavior, stock status, and inventory adjustments",
  "Review sales records, payment details, transaction status, and cancellation history",
  "Record and review expenses, with administrative control over expense cancellation",
  "Access audit logs for traceability across sensitive operational changes",
  "Manage user access and higher-privilege operational controls",
];

const assistantFeatures = [
  "Use a focused dashboard for the clinic's current operational activity",
  "Create sales records for patients and add products or open-amount services",
  "Search transactions, inspect details, and correct a completed transaction through a reasoned cancellation flow",
  "Record expenses as part of the clinic's day-to-day bookkeeping workflow",
  "Search inventory, monitor stock levels, and perform stock-in operations",
  "See low-stock and expiry information needed during routine clinic work",
];

const integrityFeatures = [
  "Tracked products are validated against available stock before a transaction is completed",
  "Completed sales automatically create stock movements and reduce tracked inventory",
  "Expired tracked batches are blocked from being added to a transaction",
  "Transaction cancellation restores tracked stock instead of silently deleting history",
  "Cancellation requires a reason and creates an auditable operational trail",
  "Sales and expenses feed reporting rather than living as disconnected records",
];

const productVisuals = [
  {
    src: "/vitally-dashboard-sanitized.svg",
    alt: "Sanitized VITALLY assistant dashboard with demo operational data",
    label: "Dashboard",
    note: "Daily operations at a glance",
  },
  {
    src: "/vitally-records-sanitized.svg",
    alt: "Sanitized VITALLY records table using demo patient and transaction values",
    label: "Records",
    note: "Searchable transaction history",
  },
  {
    src: "/vitally-add-record-sanitized.svg",
    alt: "Sanitized VITALLY add record workflow using demo patient and item values",
    label: "Add record",
    note: "Patient → items → payment",
  },
  {
    src: "/vitally-inventory-sanitized.svg",
    alt: "Sanitized VITALLY inventory screen using demo product and stock values",
    label: "Inventory",
    note: "Stock, batches, expiry, reorder",
  },
];

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className={base.featureList}>
      {items.map((item, index) => (
        <li key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
}

export default function VitallyCaseStudy() {
  return (
    <>
      <ThemeToggle />
      <main className={base.page}>
        <header className={base.topbar}>
          <Link href="/#projects">← Back to portfolio</Link>
          <span className={styles.productionStatus}>Production system · private access</span>
        </header>

        <section className={base.hero}>
          <div className={base.heroEyebrow}>
            <span>02 — Real-world operations case study</span>
            <span>Solo full-stack project</span>
          </div>

          <div className={base.heroGrid}>
            <div>
              <p className={base.micro}>Clinic operations platform</p>
              <h1>VITALLY</h1>
              <p className={base.heroLead}>
                A role-based clinic operations system that connects sales, inventory, expenses,
                reporting, and accountability so day-to-day records move through one traceable
                workflow instead of separate spreadsheets or disconnected tools.
              </p>
              <div className={base.heroActions}>
                <a className={base.primaryAction} href="#product">
                  See the product ↓
                </a>
                <a className={base.secondaryAction} href="#engineering">
                  View engineering details
                </a>
              </div>
            </div>

            <dl className={base.projectFacts}>
              <div><dt>Role</dt><dd>Full-stack Developer</dd></div>
              <div><dt>Ownership</dt><dd>Solo project</dd></div>
              <div><dt>Scope</dt><dd>Built for 2 clinics · designed to expand</dd></div>
              <div><dt>Stack</dt><dd>ASP.NET Core · .NET 9 · EF Core · SQL Server</dd></div>
            </dl>
          </div>

          <figure className={styles.heroProductVisual}>
            <div className={styles.demoBadge}>Sanitized demo data</div>
            <Image
              src="/vitally-dashboard-sanitized.svg"
              alt="Sanitized VITALLY clinic operations dashboard using demo data"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 1180px"
            />
          </figure>
        </section>

        <section className={base.introSection}>
          <div>
            <p className={base.sectionIndex}>01 — Why it exists</p>
            <h2>Clinic activity becomes one connected operational record.</h2>
          </div>
          <div className={base.prose}>
            <p>
              VITALLY is designed around what happens after the clinic starts operating for the day:
              transactions are recorded, stock changes, expenses occur, staff need different levels
              of access, and management needs a trustworthy view of what happened.
            </p>
            <p>
              The system links those actions. A completed sale can affect stock immediately; a
              cancellation can restore it with a recorded reason; expenses remain searchable; and
              dashboards and reports summarize the same underlying operational data.
            </p>
          </div>
        </section>

        <section className={styles.productSection} id="product">
          <div className={styles.productHeading}>
            <div>
              <p className={base.sectionIndex}>02 — Product in use</p>
              <h2>Real workflows, shown with safe demo values.</h2>
            </div>
            <p>
              These public visuals mirror VITALLY&apos;s production workflows while replacing patient,
              transaction, financial, staff, and inventory details with clearly marked demo data.
            </p>
          </div>

          <div className={styles.productGallery}>
            {productVisuals.map((visual) => (
              <figure className={styles.productCard} key={visual.src}>
                <div className={styles.productViewport}>
                  <Image src={visual.src} alt={visual.alt} fill sizes="(max-width: 800px) 100vw, 50vw" />
                </div>
                <figcaption>
                  <span>{visual.label}</span>
                  <span>{visual.note}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <nav className={base.roleNav} aria-label="VITALLY case study sections">
          <a href="#admin"><span>01</span> Admin</a>
          <a href="#assistant"><span>02</span> Assistant</a>
          <a href="#workflow"><span>03</span> System flow</a>
        </nav>

        <section className={base.roleSection} id="admin">
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>03 — Admin workspace</p>
            <h2>Broader oversight for the people responsible for clinic operations.</h2>
            <p>
              The administrative side keeps operational visibility and higher-impact controls in one
              workspace, including inventory configuration, reporting, user-level controls, and audit
              history alongside the clinic&apos;s transaction activity.
            </p>
          </div>
          <FeatureList items={adminFeatures} />
        </section>

        <section className={base.roleSection} id="assistant">
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>04 — Assistant workspace</p>
            <h2>Fast access to the records staff touch throughout the working day.</h2>
            <p>
              Assistants can work directly with sales, expenses, and inventory without receiving every
              administrative capability. The experience is designed around completing common clinic
              tasks while preserving role boundaries for higher-risk actions.
            </p>
          </div>
          <FeatureList items={assistantFeatures} />
        </section>

        <section className={base.roleSection} id="workflow">
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>05 — Transaction integrity</p>
            <h2>A sale is more than a number added to a daily total.</h2>
            <p>
              VITALLY treats transactions as operational events. Stock validation, payment, inventory
              movement, cancellation behavior, and auditability are handled as part of the same
              workflow instead of as unrelated manual corrections.
            </p>
          </div>
          <FeatureList items={integrityFeatures} />

          <div className={base.workflowTrack}>
            <div><span>01</span><strong>Record</strong><p>Patient + products/services</p></div>
            <i>→</i>
            <div><span>02</span><strong>Validate</strong><p>Stock · expiry · amount</p></div>
            <i>→</i>
            <div><span>03</span><strong>Settle</strong><p>Payment · VAT · discount</p></div>
            <i>→</i>
            <div><span>04</span><strong>Reflect</strong><p>Stock movement · reporting · audit</p></div>
          </div>
        </section>

        <section className={styles.inventorySection}>
          <div>
            <p className={base.sectionIndex}>06 — Inventory that follows the transaction</p>
            <h2>Stock is part of the workflow, not a separate afterthought.</h2>
          </div>
          <div className={styles.inventoryGrid}>
            <article><span>Stock visibility</span><strong>Low-stock awareness</strong><p>Reorder levels and active stock make shortages visible during normal clinic use.</p></article>
            <article><span>Batch safety</span><strong>Expiry-aware handling</strong><p>Tracked batches can carry expiry dates, and expired stock is prevented from entering a completed sale.</p></article>
            <article><span>Flexible services</span><strong>Open-amount items</strong><p>Services that do not use one fixed selling price can accept an amount at transaction time while normal products keep their configured price.</p></article>
            <article><span>Traceability</span><strong>Stock movements</strong><p>Stock-in, sales, cancellations, and controlled adjustments create a history of how quantities changed.</p></article>
          </div>
        </section>

        <section className={base.engineeringSection} id="engineering">
          <div className={base.engineeringLead}>
            <p className={base.sectionIndex}>07 — Engineering</p>
            <h2>Designed for maintainable operations and controlled access.</h2>
            <p>
              The application uses ASP.NET Core with EF Core and SQL Server, with repositories and
              services separating persistence from business workflows. Authentication supports both
              cookie-based web sessions and JWT-backed API access, while authorization keeps Admin and
              Assistant responsibilities distinct.
            </p>
          </div>

          <div className={base.engineeringGrid}>
            <article><span>Architecture</span><h3>Repository + service layers</h3><p>Sales, inventory, expenses, users, payments, reporting, stock movements, and audit logging are separated into focused application responsibilities.</p></article>
            <article><span>Data</span><h3>EF Core + SQL Server</h3><p>Operational records stay relational so transactions, line items, payments, users, stock changes, and expenses can be traced together.</p></article>
            <article><span>Access</span><h3>Role-based authorization</h3><p>Admin and Assistant capabilities are enforced at controller and workflow boundaries rather than presented as visual differences only.</p></article>
            <article><span>Delivery</span><h3>Automated MonsterASP deployment</h3><p>The production workflow restores, builds, publishes, and deploys the .NET application from the master branch using protected hosting secrets.</p></article>
          </div>
        </section>

        <section className={styles.realWorldSection}>
          <div>
            <p className={base.sectionIndex}>08 — Real-world use</p>
            <h2>Production credibility without publishing production records.</h2>
          </div>
          <div className={styles.privacyNote}>
            <span>Data responsibility</span>
            <p>
              VITALLY is used with operational clinic data. Patient/customer names, payment references,
              financial records, staff identities, and other production details are intentionally not
              reproduced in this public case study. Every public product visual uses sanitized demo values.
            </p>
          </div>
        </section>

        <section className={base.ownershipSection}>
          <p className={base.sectionIndex}>09 — My contribution</p>
          <div>
            <h2>Built across the full operational stack.</h2>
            <p>
              I designed and implemented VITALLY as a solo full-stack project, working across the data
              model, ASP.NET Core backend, role-based authentication, sales and expense workflows,
              inventory behavior, reporting, auditability, responsive interfaces, PWA support, and
              production deployment.
            </p>
          </div>
        </section>

        <footer className={base.caseFooter}>
          <div>
            <p className={base.micro}>VITALLY · Clinic operations</p>
            <h2>Software built for the work behind the counter.</h2>
          </div>
          <div className={base.footerActions}>
            <Link className={base.primaryAction} href="/#projects">Back to portfolio ←</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
