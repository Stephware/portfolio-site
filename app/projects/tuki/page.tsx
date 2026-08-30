import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import base from "../innovet/innovet.module.css";
import styles from "./tuki.module.css";

export const metadata: Metadata = {
  title: "TUKI — Multimodal Transport Navigation | Stephen Pinacate",
  description:
    "Case study for TUKI, an AI-assisted multimodal commuter navigation application for Pampanga.",
};

const onboardingVisuals = [
  "/Screenshot 2026-08-30 at 9.00.43 PM.png",
  "/Screenshot 2026-08-30 at 9.00.48 PM.png",
  "/Screenshot 2026-08-30 at 9.00.52 PM.png",
  "/Screenshot 2026-08-30 at 9.00.59 PM.png",
];

const accessVisuals = [
  "/Screenshot 2026-08-30 at 9.01.03 PM.png",
  "/Screenshot 2026-08-30 at 9.01.20 PM.png",
  "/Screenshot 2026-08-30 at 9.01.27 PM.png",
  "/Screenshot 2026-08-30 at 9.01.35 PM.png",
];

const planningVisuals = [
  "/Screenshot 2026-08-30 at 9.01.43 PM.png",
  "/Screenshot 2026-08-30 at 9.01.51 PM.png",
  "/Screenshot 2026-08-30 at 9.02.00 PM.png",
  "/Screenshot 2026-08-30 at 9.02.04 PM.png",
  "/Screenshot 2026-08-30 at 9.02.10 PM.png",
  "/Screenshot 2026-08-30 at 9.02.14 PM.png",
];

const navigationVisuals = [
  "/Screenshot 2026-08-30 at 9.02.26 PM.png",
  "/Screenshot 2026-08-30 at 9.02.32 PM.png",
  "/Screenshot 2026-08-30 at 9.02.45 PM.png",
  "/Screenshot 2026-08-30 at 9.02.53 PM.png",
  "/Screenshot 2026-08-30 at 9.03.31 PM.png",
  "/Screenshot 2026-08-30 at 9.03.41 PM.png",
  "/Screenshot 2026-08-30 at 9.04.05 PM.png",
  "/Screenshot 2026-08-30 at 9.04.11 PM.png",
  "/Screenshot 2026-08-30 at 9.04.17 PM.png",
];

const commuterFeatures = [
  "Search for a destination and receive a multimodal trip option built from walking, tricycle, and jeepney legs",
  "See transfers, estimated fare, travel time, and the sequence of transport modes before starting the trip",
  "Use an AI-assisted interface for conversational trip questions while route execution remains grounded in structured routing data",
  "Follow active-trip navigation with map guidance, current-leg context, recentering, route geometry, and progress information",
  "Receive commuter-focused guidance around boarding, transfers, alighting, and the next action in the journey",
  "Use light and dark presentation modes while keeping the same core trip-planning and navigation workflow",
];

const engineeringFeatures = [
  "Android client built with Kotlin and Jetpack Compose for a modern mobile interaction model",
  "ASP.NET Core backend coordinating route, trip, transport, driver, fare, and chat-related application data",
  "SQL Server persistence for structured transport, routing, trip, and operational records",
  "Multimodal routing that composes walking, tricycle, and jeepney segments into a single commuter journey",
  "Live-trip state and rerouting behavior designed around actual commuter progress rather than a static route preview",
  "Map and location behavior designed to keep the user, selected leg, and relevant transport overlays understandable during navigation",
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

function PhoneGallery({ images, label }: { images: string[]; label: string }) {
  return (
    <div className={styles.phoneGallery}>
      {images.map((src, index) => (
        <figure className={styles.phoneCard} key={src}>
          <div className={styles.phoneViewport}>
            <Image
              src={src}
              alt={`${label} — TUKI screen ${index + 1}`}
              fill
              sizes="(max-width: 700px) 44vw, 240px"
            />
          </div>
          <figcaption>{String(index + 1).padStart(2, "0")}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function TukiCaseStudy() {
  return (
    <>
      <ThemeToggle />
      <main className={base.page}>
        <header className={base.topbar}>
          <Link href="/#projects">← Back to portfolio</Link>
          <span className={styles.status}>Mobile navigation case study</span>
        </header>

        <section className={base.hero}>
          <div className={base.heroEyebrow}>
            <span>03 — Multimodal commuter navigation</span>
            <span>Team project</span>
          </div>

          <div className={base.heroGrid}>
            <div>
              <p className={base.micro}>AI-assisted public transport navigation</p>
              <h1>TUKI</h1>
              <p className={base.heroLead}>
                A commuter navigation application for Pampanga that connects walking, tricycle,
                and jeepney travel into one understandable journey — from onboarding and trip search
                to route selection, AI assistance, live navigation, transfers, and arrival.
              </p>
              <div className={base.heroActions}>
                <a className={base.primaryAction} href="#experience">See the app ↓</a>
                <a className={base.secondaryAction} href="#engineering">View engineering details</a>
              </div>
            </div>

            <dl className={base.projectFacts}>
              <div><dt>Role</dt><dd>Full-stack / Mobile Developer</dd></div>
              <div><dt>Platform</dt><dd>Android · Kotlin · Jetpack Compose</dd></div>
              <div><dt>Backend</dt><dd>ASP.NET Core · SQL Server</dd></div>
              <div><dt>Scope</dt><dd>Multimodal commuter navigation for Pampanga</dd></div>
            </dl>
          </div>

          <div className={styles.heroPhones}>
            <div className={styles.heroPhonePrimary}>
              <Image
                src="/mainpage-tuki.png"
                alt="TUKI navigation interface"
                fill
                priority
                sizes="(max-width: 800px) 65vw, 330px"
              />
            </div>
            <div className={styles.heroPhoneSecondary}>
              <Image
                src="/Screenshot 2026-08-30 at 9.01.43 PM.png"
                alt="TUKI commuter interface"
                fill
                priority
                sizes="(max-width: 800px) 42vw, 240px"
              />
            </div>
            <div className={styles.heroStatement}>
              <span>One trip</span>
              <strong>Walking → Tricycle → Jeepney → Destination</strong>
              <p>Designed around how commuters actually combine transport modes instead of treating every leg as a separate app experience.</p>
            </div>
          </div>
        </section>

        <section className={base.introSection}>
          <div>
            <p className={base.sectionIndex}>01 — The commuter problem</p>
            <h2>Public transport directions need more than a line on a map.</h2>
          </div>
          <div className={base.prose}>
            <p>
              For local commuters, the difficult part is often knowing which mode to take, where to
              transfer, how much the trip may cost, and what to do next. TUKI was shaped around that
              sequence rather than around map rendering alone.
            </p>
            <p>
              The application combines structured route planning with a conversational layer so users
              can explore a trip naturally while still receiving route choices that can be represented,
              tracked, and navigated deterministically.
            </p>
          </div>
        </section>

        <nav className={base.roleNav} aria-label="TUKI case study sections">
          <a href="#experience"><span>01</span> Experience</a>
          <a href="#navigation"><span>02</span> Navigation</a>
          <a href="#engineering"><span>03</span> Engineering</a>
        </nav>

        <section className={base.roleSection} id="experience">
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>02 — Onboarding</p>
            <h2>A friendly introduction before the user ever plans a route.</h2>
            <p>
              TUKI uses a short onboarding sequence to introduce the app and its commuter-focused
              personality before moving into account access and the main trip experience.
            </p>
          </div>
          <PhoneGallery images={onboardingVisuals} label="TUKI onboarding" />
        </section>

        <section className={base.roleSection}>
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>03 — Access, home & themes</p>
            <h2>Authentication and everyday use stay visually consistent across light and dark modes.</h2>
            <p>
              Login, account access, destination entry, and the main commuter workspace use the same
              interaction hierarchy while allowing the interface to adapt to different display preferences.
            </p>
          </div>
          <PhoneGallery images={accessVisuals} label="TUKI access and theme" />
        </section>

        <section className={base.roleSection}>
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>04 — Trip planning & AI</p>
            <h2>Conversational assistance sits beside structured route choices.</h2>
            <p>
              The AI experience helps users express destination and travel intent naturally, while
              route recommendations remain tied to transport data, fares, transfers, and concrete journey legs.
            </p>
          </div>
          <PhoneGallery images={planningVisuals} label="TUKI trip planning and AI" />
          <FeatureList items={commuterFeatures} />
        </section>

        <section className={base.roleSection} id="navigation">
          <div className={base.roleHeading}>
            <p className={base.sectionIndex}>05 — Live navigation</p>
            <h2>The route becomes a sequence of actions the commuter can actually follow.</h2>
            <p>
              During an active trip, TUKI surfaces map geometry, the current leg, route context,
              location-aware guidance, transfers, and progression through the trip instead of leaving
              the user with only a static overview.
            </p>
          </div>
          <PhoneGallery images={navigationVisuals} label="TUKI live navigation" />
        </section>

        <section className={base.workflowSection}>
          <div>
            <p className={base.sectionIndex}>06 — Journey model</p>
            <h2>A single commuter journey assembled from multiple transport modes.</h2>
          </div>
          <div className={base.workflowTrack}>
            <div><span>01</span><strong>Ask</strong><p>Destination · intent · preferences</p></div>
            <i>→</i>
            <div><span>02</span><strong>Plan</strong><p>Modes · routes · transfers · fare</p></div>
            <i>→</i>
            <div><span>03</span><strong>Navigate</strong><p>Current leg · map · commuter action</p></div>
            <i>→</i>
            <div><span>04</span><strong>Adapt</strong><p>Progress · reroute · next leg</p></div>
          </div>
        </section>

        <section className={base.engineeringSection} id="engineering">
          <div className={base.engineeringLead}>
            <p className={base.sectionIndex}>07 — Engineering</p>
            <h2>Mobile UX backed by structured transport and trip state.</h2>
            <p>
              TUKI is not only a set of mobile screens. The application connects the Android client
              to backend services and transport data so route recommendations, maps, fares, live trips,
              AI interactions, and commuter actions can share one application model.
            </p>
          </div>
          <div>
            <FeatureList items={engineeringFeatures} />
          </div>
        </section>

        <section className={base.ownershipSection}>
          <p className={base.sectionIndex}>08 — My contribution</p>
          <div>
            <h2>Worked across the commuter journey, not only one screen.</h2>
            <p>
              My work spans routing and navigation flows, map behavior, backend integration, live-trip
              behavior, and Android implementation. That includes the experience around route geometry,
              current-leg navigation, location and camera behavior, transport overlays, and the handoff
              from planning into an active commuter trip.
            </p>
          </div>
        </section>

        <footer className={base.caseFooter}>
          <div>
            <p className={base.micro}>TUKI · Pampanga commuter navigation</p>
            <h2>Navigation designed around the whole commute.</h2>
          </div>
          <div className={base.footerActions}>
            <Link className={base.primaryAction} href="/#projects">Back to portfolio ←</Link>
            <a className={base.secondaryAction} href="https://github.com/Mark-Batongbacal/AUP" target="_blank" rel="noreferrer">Repository ↗</a>
          </div>
        </footer>
      </main>
    </>
  );
}
