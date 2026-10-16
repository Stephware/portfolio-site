import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { achievements } from "@/data/achievements";
import styles from "@/components/DirectoryPage.module.css";

export const metadata: Metadata = {
  title: "Achievements | Stephen Pinacate",
  description: "Academic, technical, competition, and organizational achievements of Stephen Pinacate.",
};

export default function AchievementsPage() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/#achievements">← Portfolio</Link>
          <span>Achievements · {String(achievements.length).padStart(2, "0")}</span>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>Recognition & milestones</span>
            <h1>Achievements</h1>
            <p>
              A focused record of academic distinctions, technical competition results,
              scholarships, and organizational recognition.
            </p>
          </div>
          <div className={styles.heroAside}>
            Selected highlights appear on the homepage, while this page presents the complete achievement record with added context.
          </div>
        </section>

        <section className={styles.list} aria-label="All achievements">
          {achievements.map((item, index) => (
            <article className={styles.achievementRow} key={`${item.year}-${item.title}`}>
              <span className={styles.index}>{item.year}</span>
              <div>
                <span className={styles.eyebrow}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
            </article>
          ))}
        </section>

        <footer className={styles.footer}>
          <span>Stephen Pinacate · Achievements</span>
          <Link href="/#achievements">Back to portfolio ↑</Link>
        </footer>
      </main>
    </>
  );
}
