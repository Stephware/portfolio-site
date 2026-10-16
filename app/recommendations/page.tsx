import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/components/DirectoryPage.module.css";

export const metadata: Metadata = {
  title: "Recommendations | Stephen Pinacate",
  description: "Recommendations and feedback for Stephen Pinacate.",
};

const recommendationGroups = ["Professor / Adviser", "Faculty / Mentor", "Collaborator / Team Lead"];

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
            <span className={styles.kicker}>Recommendations</span>
            <h1>What others say.</h1>
            <p>
              Recommendations from professors, mentors, and collaborators on my technical work,
              problem-solving, reliability, leadership, and collaboration.
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className={styles.recommendationGrid}>
            {recommendationGroups.map((relationship) => (
              <article className={styles.recommendationCard} key={relationship}>
                <span className={styles.eyebrow}>{relationship}</span>
                <div className={styles.recommendationPlaceholderLines} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.recommendationIdentityPlaceholder} aria-hidden="true">
                  <span />
                  <span />
                </div>
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
