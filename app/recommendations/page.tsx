import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { recommendationPlaceholders } from "@/data/career";
import styles from "@/components/DirectoryPage.module.css";

export const metadata: Metadata = {
  title: "Recommendations | Stephen Pinacate",
  description: "Professional and academic recommendations for Stephen Pinacate.",
};

export default function RecommendationsPage() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/#recommendations">← Portfolio</Link>
          <span>Recommendations</span>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>External proof</span>
            <h1>Recommendations</h1>
            <p>
              A dedicated space for verified feedback from professors, supervisors, teammates, and
              stakeholders who can speak to my technical work, reliability, collaboration, and delivery.
            </p>
          </div>
          <div className={styles.heroAside}>
            This page is ready to grow without making the main portfolio page crowded. Verified recommendations can be added here as they become available.
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.recommendationGrid}>
            {recommendationPlaceholders.map((item) => (
              <article className={styles.recommendationCard} key={item.relationship}>
                <span className={styles.eyebrow}>{item.relationship}</span>
                <blockquote>“{item.quote}”</blockquote>
                <strong>{item.name}</strong>
                <small>{item.role}</small>
              </article>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <span>Stephen Pinacate · Recommendations</span>
          <Link href="/#recommendations">Back to portfolio ↑</Link>
        </footer>
      </main>
    </>
  );
}
