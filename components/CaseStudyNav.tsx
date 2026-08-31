import Link from "next/link";
import styles from "./CaseStudyNav.module.css";

export type CaseStudyNavItem = {
  label: string;
  href: string;
};

export function CaseStudyNav({ items }: { items: CaseStudyNavItem[] }) {
  return (
    <nav className={styles.nav} aria-label="Case study navigation">
      <Link className={styles.back} href="/#projects">← Projects</Link>
      <div className={styles.links}>
        {items.map((item) => (
          <a href={item.href} key={item.href}>{item.label}</a>
        ))}
        <a href="#top" aria-label="Back to top">↑ Top</a>
      </div>
    </nav>
  );
}
