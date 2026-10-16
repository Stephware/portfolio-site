import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/components/DirectoryPage.module.css";

export const metadata: Metadata = {
  title: "Recommendations | Stephen Pinacate",
  description: "Recommendations and feedback for Stephen Pinacate.",
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
            <span className={styles.kicker}>Recommendations</span>
            <h1>What others say.</h1>
            <p>
              Short recommendations from professors, mentors, and collaborators will be added here
              as I collect verified feedback about my work, problem-solving, reliability, and collaboration.
            </p>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <p>No recommendations published yet.</p>
        </section>

        <footer className={styles.footer}>
          <span>Stephen Pinacate · Recommendations</span>
          <Link href="/#recommendations">Back to portfolio ↑</Link>
        </footer>
      </main>
    </>
  );
}
