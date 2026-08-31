"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./CaseStudyNav.module.css";

const navByPath: Record<string, { label: string; href: string }[]> = {
  "/projects/innovet": [
    { label: "Roles", href: "#roles" },
    { label: "Client", href: "#client" },
    { label: "Admin", href: "#admin" },
    { label: "Super Admin", href: "#super-admin" },
  ],
  "/projects/vitally": [
    { label: "Product", href: "#product" },
    { label: "Admin", href: "#admin" },
    { label: "Assistant", href: "#assistant" },
    { label: "Engineering", href: "#engineering" },
  ],
  "/projects/tuki": [
    { label: "Experience", href: "#experience" },
    { label: "Navigation", href: "#navigation" },
    { label: "Engineering", href: "#engineering" },
  ],
};

export function CaseStudyNav() {
  const pathname = usePathname();
  const items = navByPath[pathname] ?? [];

  if (items.length === 0) return null;

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
