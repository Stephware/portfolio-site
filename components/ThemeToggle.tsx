"use client";

import { useEffect, useState, type MouseEvent } from "react";

type Theme = "light" | "dark";

type ViewTransition = {
  ready: Promise<void>;
  finished: Promise<void>;
};

type ViewTransitionDocument = Document & {
  startViewTransition?: (update: () => void) => ViewTransition;
};

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path d="M20.2 15.1A8.6 8.6 0 0 1 8.9 3.8 8.7 8.7 0 1 0 20.2 15.1Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTheme("light");
    applyTheme("light");
  }, []);

  const selectTheme = (next: Theme, event: MouseEvent<HTMLButtonElement>) => {
    if (next === theme || transitioning) return;

    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const viewTransitionDocument = document as ViewTransitionDocument;

    if (!viewTransitionDocument.startViewTransition || prefersReducedMotion) {
      setTheme(next);
      applyTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    setTransitioning(true);
    root.classList.add("theme-transitioning");
    root.dataset.themeTarget = next;

    const transition = viewTransitionDocument.startViewTransition(() => {
      applyTheme(next);
      setTheme(next);
    });

    transition.ready
      .then(() => {
        root.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 760,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => undefined);

    transition.finished.finally(() => {
      setTransitioning(false);
      root.classList.remove("theme-transitioning");
      delete root.dataset.themeTarget;
    });
  };

  return (
    <div
      className={`theme-switcher ${transitioning ? "is-transitioning" : ""}`}
      data-theme={theme}
      role="group"
      aria-label="Color theme"
    >
      <button
        type="button"
        className={`theme-icon-button ${theme === "light" ? "active" : ""}`}
        onClick={(event) => selectTheme("light", event)}
        aria-label="Use light theme"
        aria-pressed={theme === "light"}
        title="Light theme"
        disabled={transitioning}
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className={`theme-icon-button ${theme === "dark" ? "active" : ""}`}
        onClick={(event) => selectTheme("dark", event)}
        aria-label="Use dark theme"
        aria-pressed={theme === "dark"}
        title="Dark theme"
        disabled={transitioning}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
