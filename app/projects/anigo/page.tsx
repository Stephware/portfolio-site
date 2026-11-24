import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./anigo.module.css";

export const metadata: Metadata = {
  title: "AniGo — Web & Android Farm Management | Stephen Pinacate",
  description:
    "AniGo case study with actual web dashboard and Android app screenshots, architecture, crop workflows, harvests and offline field recording.",
};

const base = "/projects/anigo/";

const webScreens = [
  {
    src: base + "Screenshot 2026-11-24 at 8.32.41 PM.png",
    title: "Today dashboard",
    detail: "Priorities, scheduled fieldwork and farm weather",
  },
  {
    src: base + "Screenshot 2026-11-24 at 8.33.39 PM.png",
    title: "Crops & Calendar",
    detail: "Current crops, plots and planting plans",
  },
  {
    src: base + "Screenshot 2026-11-24 at 8.33.45 PM.png",
    title: "Harvest reports",
    detail: "Confirmed harvest records and unit-aware totals",
  },
  {
    src: base + "Screenshot 2026-11-24 at 8.33.52 PM.png",
    title: "Farm workspace",
    detail: "Farm details, plots and team permissions",
  },
  {
    src: base + "Screenshot 2026-11-24 at 8.34.02 PM.png",
    title: "Notifications",
    detail: "Task reminders and other farm notices",
  },
  {
    src: base + "Screenshot 2026-11-24 at 8.34.16 PM.png",
    title: "Account & preferences",
    detail: "Personal settings in the dark interface",
  },
  {
    src: base + "Screenshot 2026-11-24 at 8.32.05 PM.png",
    title: "Additional web view",
    detail: "More of the completed web experience",
  },
];

const fieldScreens = [
  {
    src: base + "9a4cf8a6-b6d4-4cec-903d-45a5a22b56e8.jpeg",
    title: "Choose a farm",
    detail: "Farm selection and access",
  },
  {
    src: base + "074ef7f5-1eae-44c6-a2d4-7eb46df946f9.jpeg",
    title: "My Farm",
    detail: "Crop, supply, weather and harvest records",
  },
  {
    src: base + "996d1bdd-7b24-452a-a7ee-b036c2a87020.jpeg",
    title: "Record an inspection",
    detail: "Crop condition, notes and photo capture",
  },
  {
    src: base + "5fed6d48-9971-4f51-b2d6-d1c5eb4c8850.jpeg",
    title: "Record a harvest",
    detail: "Saved harvest totals and a new harvest entry",
  },
  {
    src: base + "0e4bda7f-65ec-41c2-9d9e-26bdb0788c47.jpeg",
    title: "Harvest summary",
    detail: "Server-confirmed totals separated by unit",
  },
  {
    src: base + "98c8f0e1-3cc1-4b31-aca5-deca8aa6830b.jpeg",
    title: "Team & access",
    detail: "Farm membership and roles",
  },
  {
    src: base + "66cf3de8-460a-4d04-a7a3-21ca0b47b219.jpeg",
    title: "Notifications",
    detail: "Upcoming and due farm work",
  },
  {
    src: base + "246830cb-04ee-44bc-8edb-1ca74d82307d.jpeg",
    title: "Account settings",
    detail: "Dark mode and Filipino language options",
  },
];

const introductionScreens = [
  {
    src: base + "a3d26dc8-e3e2-47cc-b868-fdd0a4e5eac2.jpeg",
    title: "Welcome animation",
    detail: "AniGo's illustrated carabao guide",
  },
  {
    src: base + "8c3f1c22-2daf-4560-9f31-2f726828295e.jpeg",
    title: "Get started",
    detail: "Log in, join or explore the farm guide",
  },
  {
    src: base + "0dee007f-f0dc-47a9-963c-6544b97c868e.jpeg",
    title: "Login",
    detail: "Branded account access",
  },
  {
    src: base + "3df9afce-0f18-414c-92ab-2121f59e43dd.jpeg",
    title: "Meet Ani",
    detail: "An approachable onboarding welcome",
  },
  {
    src: base + "f33233bd-f426-4043-a565-8054db8d7350.jpeg",
    title: "Organize a farm",
    detail: "The guided farm setup lesson",
  },
  {
    src: base + "cfe2c23e-def5-421b-8d0b-39b4270ffc92.jpeg",
    title: "Grow with a plan",
    detail: "Crop planning explained visually",
  },
  {
    src: base + "31c8a8ed-73c8-4350-a5a7-45bb6a905d1c.jpeg",
    title: "Record fieldwork",
    detail: "Inspection and sync-status guidance",
  },
  {
    src: base + "83c18e1b-8513-450a-af88-02b92b9806d7.jpeg",
    title: "From field to harvest",
    detail: "Partial harvests and supply tracking",
  },
];

const workflowItems = [
  {
    number: "01",
    title: "Plan farms and crops",
    description:
      "Create farms and plots, manage an active crop per plot, and follow crop calendars and due tasks.",
  },
  {
    number: "02",
    title: "Record work in the field",
    description:
      "Log watering, inspections with optional private photos, fertilizer or supply use, and harvests.",
  },
  {
    number: "03",
    title: "Track supplies and harvests",
    description:
      "Maintain audited stock changes and record repeated partial harvests with unit-aware totals.",
  },
  {
    number: "04",
    title: "Stay informed and work offline",
    description:
      "Show saved weather information and scheduled reminders, while supported Android entries queue for synchronization.",
  },
];

const architecture = [
  {
    label: "01 · Web",
    title: "ASP.NET Core MVC",
    description:
      "A role-aware farm workspace for owners and managers, including crop planning, supplies and harvest reporting.",
  },
  {
    label: "02 · Backend",
    title: ".NET API + SQL Server",
    description:
      "Shared domain services and persisted farm records; the Android client uses authorized API endpoints.",
  },
  {
    label: "03 · Automation",
    title: "Hangfire Worker",
    description:
      "Scheduled reminders and weather retrieval run separately from the web and API hosts.",
  },
  {
    label: "04 · Mobile",
    title: "Kotlin + Jetpack Compose",
    description:
      "Field-oriented Android workflows with selected Room and WorkManager offline recording and sync.",
  },
];

type Screen = { src: string; title: string; detail: string };

function WebGallery({ images }: { images: Screen[] }) {
  return (
    <div className={styles.webGallery}>
      {images.map((screen, index) => (
        <figure className={styles.webCard} key={screen.src}>
          <div className={styles.browserChrome}>
            <div className={styles.chromeDots} aria-hidden="true"><span /><span /><span /></div>
            <span>ANIGO / WEB</span>
          </div>
          <div className={styles.webViewport}>
            <Image
              src={screen.src}
              alt={"AniGo web screenshot: " + screen.title}
              fill
              className={styles.screenshot}
              sizes="(max-width: 640px) 100vw, (max-width: 900px) 85vw, 46vw"
              loading="lazy"
            />
          </div>
          <figcaption className={styles.screenCaption}>
            <span>{String(index + 1).padStart(2, "0")} — {screen.title}</span>
            <small>{screen.detail}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

function PhoneGallery({ images }: { images: Screen[] }) {
  return (
    <div className={styles.phoneGallery}>
      {images.map((screen, index) => (
        <figure className={styles.phoneCard} key={screen.src}>
          <div className={styles.phoneShell}>
            <div className={styles.phoneViewport}>
              <Image
                src={screen.src}
                alt={"AniGo Android screenshot: " + screen.title}
                fill
                className={styles.phoneScreenshot}
                sizes="(max-width: 640px) 42vw, (max-width: 1000px) 24vw, 210px"
                loading="lazy"
              />
            </div>
          </div>
          <figcaption className={styles.screenCaption}>
            <span>{String(index + 1).padStart(2, "0")} — {screen.title}</span>
            <small>{screen.detail}</small>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function AniGoCaseStudy() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/#projects">← Back to portfolio</Link>
          <span>Completed academic MVP · Two-developer team</span>
        </header>

        <section className={styles.hero}>
          <div className={styles.heroLabel}>
            <span>07 — Farm & crop management</span>
            <span>Web + Android · 2026</span>
          </div>

          <div className={styles.heroGrid}>
            <div>
              <p className={styles.eyebrow}>A practical system for everyday farming</p>
              <h1>AniGo<span>.</span></h1>
              <p className={styles.lead}>
                One connected farm-management system for crop planning,
                everyday fieldwork, supplies, partial harvests and weather
                reminders — with a web workspace and a dedicated Android app.
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryAction} href="#screens">Explore the actual screens ↓</a>
                <a className={styles.secondaryAction} href="https://github.com/Stephware/SmartFarm" target="_blank" rel="noreferrer">
                  View source on GitHub ↗
                </a>
              </div>
            </div>
            <dl className={styles.facts}>
              <div><dt>Status</dt><dd>Completed academic MVP</dd></div>
              <div><dt>My role</dt><dd>Full-stack / Android developer</dd></div>
              <div><dt>Team</dt><dd>Two developers</dd></div>
              <div><dt>Stack</dt><dd>.NET 10 · EF Core · SQL Server · Hangfire · Kotlin</dd></div>
            </dl>
          </div>

          <div className={styles.heroScreens} id="screens">
            <figure className={styles.heroWeb}>
              <div className={styles.browserChrome}>
                <div className={styles.chromeDots} aria-hidden="true"><span /><span /><span /></div>
                <span>ANIGO / DESKTOP WEB</span>
              </div>
              <div className={styles.heroWebViewport}>
                <Image
                  src={webScreens[0].src}
                  alt="AniGo web app Today dashboard with farm priorities, fieldwork and weather"
                  fill
                  priority
                  className={styles.screenshot}
                  sizes="(max-width: 850px) 100vw, 780px"
                />
              </div>
              <figcaption>01 / ASP.NET Core web dashboard · Actual application screenshot</figcaption>
            </figure>
            <figure className={styles.heroPhone}>
              <div className={styles.phoneShell}>
                <div className={styles.phoneViewport}>
                  <Image
                    src={fieldScreens[1].src}
                    alt="AniGo Android My Farm page showing crops, supplies, weather and harvest summaries"
                    fill
                    priority
                    className={styles.phoneScreenshot}
                    sizes="(max-width: 850px) 48vw, 240px"
                  />
                </div>
              </div>
              <figcaption>02 / Kotlin Android app · Actual device screenshot</figcaption>
            </figure>
          </div>
          <p className={styles.imageNote}>Real screenshots of the AniGo academic MVP, using demonstration accounts. Select any screen to enlarge it.</p>
        </section>

        <section className={styles.showcase} id="web">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 — Web experience</p>
            <h2>Plan and manage from one workspace.</h2>
            <p>
              Explore actual desktop screens for today&apos;s work, crop planning,
              confirmed harvests, farm management and notifications. These
              screenshots show the implemented interface rather than mockups.
            </p>
          </div>
          <WebGallery images={webScreens.slice(1)} />
        </section>

        <section className={styles.showcase} id="android">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>02 — Android experience</p>
            <h2>Record work where it happens.</h2>
            <p>
              The native Android experience lets field workers find their
              farm&apos;s records, inspect crops, record harvests and review
              confirmed data. Selected workflows support offline recording and
              synchronization when connectivity returns.
            </p>
          </div>
          <PhoneGallery images={fieldScreens} />
        </section>

        <section className={styles.showcase} id="onboarding">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>03 — A guided first experience</p>
            <h2>Meet Ani, your farm buddy.</h2>
            <p>
              The illustrated carabao introduces farm setup, crop planning,
              fieldwork and partial harvests through a short, approachable
              Android onboarding journey.
            </p>
          </div>
          <PhoneGallery images={introductionScreens} />
        </section>

        <section className={styles.workflows}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>04 — Core workflows</p>
            <h2>Less admin. More time for farm work.</h2>
            <p>
              AniGo follows the sequence from planting through harvest, with
              distinct permissions for owners, managers and field workers.
            </p>
          </div>
          <div className={styles.workflowGrid}>
            {workflowItems.map((item) => (
              <article className={styles.workflowCard} key={item.number}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.architectureSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>05 — Engineering</p>
            <h2>Four components. One farm workflow.</h2>
            <p>
              The MVC web app, backend API, background worker and Android
              client have distinct responsibilities while operating around
              the same farm-management domain.
            </p>
          </div>
          <div className={styles.architectureGrid}>
            {architecture.map((item) => (
              <article key={item.label}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing}>
          <div>
            <p className={styles.eyebrow}>06 — My contribution</p>
            <h2>From farm records to connected workflows.</h2>
          </div>
          <div className={styles.closingCopy}>
            <p>
              In our two-developer team, I worked across the full-stack
              and Android experience: connecting farm-management workflows,
              backend services, field recording and the progression from
              on-device data to server-confirmed records.
            </p>
            <p>
              AniGo is a completed academic MVP. The repository also documents
              release, device and real-farmer usability checks that are
              distinct from course-project completion.
            </p>
            <a href="https://github.com/Stephware/SmartFarm" target="_blank" rel="noreferrer">
              Explore the AniGo source and documentation ↗
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>AniGo · Actual web and Android screenshots · 2026</span>
          <Link href="/#projects">Back to projects ↑</Link>
        </footer>
      </main>
    </>
  );
}
