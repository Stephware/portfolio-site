"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const labels: Record<Theme, string> = {
  system: "System",
  light: "Light",
  dark: "Dark",
};

const order: Theme[] = ["system", "light", "dark"];

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;

  if (theme === "system") {
    root.classList.toggle(
      "dark",
      window.matchMedia("(prefers-color-scheme: dark)").matches,
    );
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const saved = (localStorage.getItem("portfolio-theme") as Theme | null) ?? "system";
    setTheme(saved);
    applyTheme(saved);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      if ((localStorage.getItem("portfolio-theme") ?? "system") === "system") {
        applyTheme("system");
      }
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const cycleTheme = () => {
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${compact ? "theme-toggle-compact" : ""}`}
      onClick={cycleTheme}
      aria-label={`Theme: ${labels[theme]}. Click to change.`}
    >
      <span className="micro-label">Theme</span>
      <span>{labels[theme]}</span>
    </button>
  );
}
