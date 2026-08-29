"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["01", "Home", "#top"],
  ["02", "Projects", "#projects"],
  ["03", "Achievements", "#achievements"],
  ["04", "Leadership", "#leadership"],
  ["05", "Competitions", "#competitions"],
  ["06", "About", "#about"],
  ["07", "Contact", "#contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const sections = links
      .map(([, , href]) => document.querySelector(href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -55%", threshold: [0.05, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <ThemeToggle />

      <header className="mobile-header">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">SP</span>
          <span className="brand-name">Stephen Pinacate</span>
        </a>
        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>

      <aside className="sidebar" aria-label="Primary navigation">
        <div>
          <a className="brand sidebar-brand" href="#top">
            <span className="brand-mark">SP</span>
            <span>
              <span className="brand-name">Stephen Pinacate</span>
              <span className="brand-role">Full-stack developer</span>
            </span>
          </a>

          <nav className="side-nav" aria-label="Portfolio sections">
            {links.map(([number, label, href]) => (
              <a
                className={`nav-link ${active === href ? "active" : ""}`}
                href={href}
                key={href}
              >
                <span>{number}</span>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sidebar-footer">
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            Open to opportunities
          </div>
          <div className="external-links">
            <a href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
            <span>LinkedIn — add later</span>
            <span>Résumé — add later</span>
          </div>
        </div>
      </aside>

      <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open}>
        <nav>
          {links.map(([number, label, href]) => (
            <a href={href} key={href} onClick={() => setOpen(false)}>
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
        </div>
      </div>
    </>
  );
}
