import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import styles from "@/components/SimpleProjectPage.module.css";

export type ProjectProof = {
  src: string;
  alt: string;
  caption: string;
  contain?: boolean;
};

type SimpleProjectPageProps = {
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  ownership: string;
  role: string;
  scope: string;
  contribution: string;
  technologies: string[];
  highlights: string[];
  repository?: string;
  proofs: ProjectProof[];
};

export function SimpleProjectPage({
  number,
  eyebrow,
  title,
  description,
  ownership,
  role,
  scope,
  contribution,
  technologies,
  highlights,
  repository,
  proofs,
}: SimpleProjectPageProps) {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/projects">← All projects</Link>
          <span>Project {number}</span>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>{eyebrow}</span>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <div className={styles.meta}>
            <div><span>Ownership</span><strong>{ownership}</strong></div>
            <div><span>Role</span><strong>{role}</strong></div>
            <div><span>Scope</span><strong>{scope}</strong></div>
          </div>
        </section>

        <section className={styles.overview}>
          <div>
            <span className={styles.kicker}>My contribution</span>
            <h2>What I worked on.</h2>
            <p>{contribution}</p>
          </div>

          <div className={styles.techPanel}>
            <span className={styles.kicker}>Technologies</span>
            <div className={styles.tags}>
              {technologies.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <ul>
              {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        </section>

        <section className={styles.proofSection}>
          <div className={styles.sectionHeading}>
            <span className={styles.kicker}>Project proof</span>
            <h2>Selected interface and workflow evidence.</h2>
          </div>

          <div className={styles.proofGrid}>
            {proofs.map((proof, index) => (
              <figure className={`${styles.proof} ${index === 0 ? styles.primaryProof : ""}`} key={proof.src}>
                <div className={`${styles.imageFrame} ${proof.contain ? styles.containFrame : ""}`}>
                  <Image
                    src={proof.src}
                    alt={proof.alt}
                    fill
                    sizes="(max-width: 800px) 100vw, 900px"
                    className={proof.contain ? styles.containImage : styles.coverImage}
                  />
                </div>
                <figcaption>{proof.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <span>{title}</span>
          <div>
            {repository ? <a href={repository} target="_blank" rel="noreferrer">Repository ↗</a> : null}
            <Link href="/projects">All projects →</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
