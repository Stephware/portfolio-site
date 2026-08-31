import type { Metadata } from "next";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { projects } from "@/data/projects";
import styles from "@/components/DirectoryPage.module.css";

export const metadata: Metadata = {
  title: "Projects | Stephen Pinacate",
  description: "All software projects by Stephen Pinacate, including full-stack, mobile, desktop, and operational systems.",
};

function projectDestination(project: (typeof projects)[number]) {
  return project.detailPath ?? project.liveUrl ?? project.repository ?? "/projects/mallows-cafe-kiosk";
}

export default function ProjectsPage() {
  return (
    <>
      <ThemeToggle />
      <main className={styles.page}>
        <header className={styles.topbar}>
          <Link href="/#projects">← Portfolio</Link>
          <span>All projects · {String(projects.length).padStart(2, "0")}</span>
        </header>

        <section className={styles.hero}>
          <div>
            <span className={styles.kicker}>Selected and additional work</span>
            <h1>Projects</h1>
            <p>
              A complete list of the systems I have built or co-built across clinic operations,
              university workflows, public transport, desktop computing, and kiosk experiences.
            </p>
          </div>
          <div className={styles.heroAside}>
            Click any project to open its case study, live system, repository, or project overview.
            Existing dedicated case-study pages remain unchanged.
          </div>
        </section>

        <section className={styles.list} aria-label="All projects">
          {projects.map((project) => {
            const href = projectDestination(project);
            const external = href.startsWith("http");
            const content = (
              <>
                <span className={styles.index}>{project.number}</span>
                <div>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.projectDescription}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className={styles.projectMeta}>
                  <span>{project.ownership}</span>
                  <span>{project.role}</span>
                  {project.scope ? <span>{project.scope}</span> : null}
                </div>
                <span className={styles.arrow} aria-hidden="true">{external ? "↗" : "→"}</span>
              </>
            );

            return external ? (
              <a className={styles.projectRow} href={href} target="_blank" rel="noreferrer" key={project.number}>
                {content}
              </a>
            ) : (
              <Link className={styles.projectRow} href={href} key={project.number}>
                {content}
              </Link>
            );
          })}
        </section>

        <footer className={styles.footer}>
          <span>Stephen Pinacate · Projects</span>
          <Link href="/#top">Back to portfolio ↑</Link>
        </footer>
      </main>
    </>
  );
}
