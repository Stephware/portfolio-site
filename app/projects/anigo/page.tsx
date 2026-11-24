import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "./anigo.module.css";

export const metadata: Metadata = {
  title: "AniGo — Farm Management for Web & Android | Stephen Pinacate",
  description:
    "Completed academic MVP case study for AniGo, a farmer-first farm and crop management system with .NET, SQL Server, Hangfire and Kotlin Android offline workflows.",
};

const photoRoot =
  "/projects/anigo/";

const photos = {
  web: photoRoot + "fields-hero.webp",
  android: photoRoot + "farmers-working.webp",
  details: photoRoot + "fields-detail.webp",
};

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
              <p className={styles.eyebrow}>Software for everyday farm work</p>
              <h1>AniGo<span>.</span></h1>
              <p className={styles.lead}>
                A farmer-first platform that brings crop planning, field
                activities, supplies, harvests, and useful weather reminders into
                one connected system — at a desk or out in the field.
              </p>
              <div className={styles.actions}>
                <a className={styles.primaryAction} href="#platforms">Explore the platforms ↓</a>
                <a className={styles.secondaryAction} href="https://github.com/Stephware/SmartFarm" target="_blank" rel="noreferrer">
                  Source on GitHub ↗
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
        </section>

        <section className={styles.showcase} id="platforms">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>01 — Platform overview</p>
            <h2>Built for the office. Built for the field.</h2>
            <p>
              The web app handles setup and oversight, while Android supports
              everyday recording. The imagery below comes from AniGo&apos;s
              actual bundled photography, not from user farm records or
              captured application screenshots.
            </p>
          </div>

          <div className={styles.platformGrid}>
            <figure className={styles.webPanel}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots} aria-hidden="true"><span /><span /><span /></div>
                <span>ANIGO · WEB EXPERIENCE</span>
              </div>
              <div className={styles.webPhoto}>
                <Image
                  src={photos.web}
                  alt="Rice-field editorial photograph used on the AniGo web landing page"
                  fill
                  sizes="(max-width: 850px) 100vw, 720px"
                  priority
                  unoptimized
                />
                <div className={styles.photoOverlay}>
                  <span>ANIGO / WEB</span>
                  <strong>Your farm, organized.</strong>
                </div>
              </div>
              <figcaption>
                <strong>Web · plan and manage</strong>
                <p>Farms, plots, crop calendar, inventory, harvests and owner/manager workflows.</p>
                <small>Branded photography · illustrative browser presentation</small>
              </figcaption>
            </figure>

            <figure className={styles.mobilePanel}>
              <div className={styles.phoneFrame}>
                <div className={styles.phoneNotch} aria-hidden="true" />
                <div className={styles.phonePhoto}>
                  <Image
                    src={photos.android}
                    alt="Photograph of farmers working in a field, bundled with AniGo"
                    fill
                    sizes="(max-width: 850px) 65vw, 260px"
                    unoptimized
                  />
                  <div className={styles.phoneOverlay}>
                    <span>ANIGO / ANDROID</span>
                    <strong>Record work where it happens.</strong>
                    <small>Today · Record · My Farm</small>
                  </div>
                </div>
              </div>
              <figcaption>
                <strong>Android · record in the field</strong>
                <p>Field activities, inspections, photos, supplies and offline-capable recording.</p>
                <small>Branded photography · illustrative phone presentation</small>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.workflows}>
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>02 — Core workflows</p>
            <h2>Less admin. More time for farm work.</h2>
            <p>
              AniGo was designed around the practical sequence from planting
              through harvest, with clear permissions for owners, managers and
              field workers.
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
            <p className={styles.eyebrow}>03 — Engineering</p>
            <h2>Four components. One farm workflow.</h2>
            <p>
              The web interface, backend API, background worker and Android
              app have distinct responsibilities while sharing the same
              farm-management domain.
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
          <div className={styles.closingPhoto}>
            <Image
              src={photos.details}
              alt="Agricultural terraces photograph included with AniGo's web photography"
              fill
              sizes="(max-width: 800px) 100vw, 520px"
              unoptimized
            />
          </div>
          <div className={styles.closingCopy}>
            <p className={styles.eyebrow}>04 — My contribution</p>
            <h2>From records to working workflows.</h2>
            <p>
              As part of a two-developer team, I worked across the full-stack
              and Android experience: integrating farm-management processes,
              backend services, field recording and the interactions between
              on-device workflows and server-confirmed records.
            </p>
            <p>
              This is a completed academic MVP. Repository documentation also
              identifies release, device and real-farmer usability checks that
              are separate from the course-project completion.
            </p>
            <a href="https://github.com/Stephware/SmartFarm" target="_blank" rel="noreferrer">
              Explore the AniGo repository ↗
            </a>
          </div>
        </section>

        <footer className={styles.footer}>
          <div>
            <span>Image credits · bundled AniGo editorial photography</span>
            <p>
              <a href="https://unsplash.com/photos/a-rice-field-with-a-village-on-top-of-it-HNOvQPazhLk" target="_blank" rel="noreferrer">Quang Nguyen Vinh</a>
              {" · "}
              <a href="https://unsplash.com/photos/farmers-working-in-a-lush-green-rice-paddy-field-DGj82Et5PKc" target="_blank" rel="noreferrer">YiChuan Li</a>
              {" · "}
              <a href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash</a>
            </p>
          </div>
          <Link href="/#projects">Back to projects ↑</Link>
        </footer>
      </main>
    </>
  );
}
