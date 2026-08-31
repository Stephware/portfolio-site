import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projects } from "@/data/projects";
import styles from "@/components/DirectoryPage.module.css";

const project = projects.find((item) => item.title === "MALLOW'S CAFE KIOSK")!;

export const metadata: Metadata = {
  title: "Mallow's Cafe Kiosk | Stephen Pinacate",
  description: project.description,
};

export default function MallowsCafeKioskPage() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/projects">← All projects</Link>
          <span>Project {project.number}</span>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>{project.imageLabel}</span>
            <h1>Mallow&apos;s Cafe Kiosk</h1>
            <p>{project.description}</p>
          </div>
          <div className={styles.heroAside}>
            <strong>{project.role}</strong><br />
            {project.ownership}<br />
            {project.scope}
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Project overview</span>
            <h2>A focused self-service ordering experience for a cafe environment.</h2>
          </div>
          <div className={styles.recommendationCard}>
            <span className={styles.eyebrow}>My contribution</span>
            <blockquote>{project.contribution}</blockquote>
            <div className={styles.tags}>
              {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Mallow&apos;s Cafe Kiosk</span>
          <Link href="/projects">All projects →</Link>
        </footer>
      </main>
    </>
  );
}
