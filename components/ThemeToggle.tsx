"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

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

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    const initial: Theme = saved === "dark" ? "dark" : "light";
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const selectTheme = (next: Theme) => {
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  };

  return (
    <div className="theme-switcher" role="group" aria-label="Color theme">
      <button
        type="button"
        className={`theme-icon-button ${theme === "light" ? "active" : ""}`}
        onClick={() => selectTheme("light")}
        aria-label="Use light theme"
        aria-pressed={theme === "light"}
        title="Light theme"
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className={`theme-icon-button ${theme === "dark" ? "active" : ""}`}
        onClick={() => selectTheme("dark")}
        aria-label="Use dark theme"
        aria-pressed={theme === "dark"}
        title="Dark theme"
      >
        <MoonIcon />
      </button>
    </div>
  );
}
