"use client";

import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  ["01", "Home", "#top"],
  ["02", "Projects", "#projects"],
  ["03", "Experience", "#experience"],
  ["04", "Recommendations", "#recommendations"],
  ["05", "Achievements", "#achievements"],
  ["06", "Leadership", "#leadership"],
  ["07", "Competitions", "#competitions"],
  ["08", "About", "#about"],
  ["09", "Contact", "#contact"],
] as const;

export function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#top");
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

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

    if (open) {
      requestAnimationFrame(() => firstMobileLinkRef.current?.focus());
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <>
      <ThemeToggle />

      <header className="mobile-header">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark">SP</span>
          <span className="brand-name">Stephen Pinacate</span>
        </a>
        <button
          ref={menuButtonRef}
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
                aria-current={active === href ? "location" : undefined}
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
            <span>Resume · reserved</span>
            <span>LinkedIn · reserved</span>
            <span>Email · reserved</span>
          </div>
        </div>
      </aside>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "open" : ""}`}
        aria-hidden={!open}
        role="dialog"
        aria-modal="true"
        aria-label="Portfolio navigation"
      >
        <nav>
          {links.map(([number, label, href], index) => (
            <a
              ref={index === 0 ? firstMobileLinkRef : undefined}
              href={href}
              key={href}
              onClick={closeMenu}
              aria-current={active === href ? "location" : undefined}
            >
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>
        <div className="mobile-menu-footer">
          <a href="https://github.com/Stephware" target="_blank" rel="noreferrer">GitHub ↗</a>
          <span>Resume · LinkedIn · Email reserved for final links</span>
        </div>
      </div>
    </>
  );
}
