"use client";

import { useEffect, useState } from "react";

type Theme = "system" | "light" | "dark";

const options: { value: Theme; label: string }[] = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
];

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

  const selectTheme = (next: Theme) => {
    setTheme(next);
    localStorage.setItem("portfolio-theme", next);
    applyTheme(next);
  };

  return (
    <div className={`theme-control ${compact ? "theme-control-compact" : ""}`}>
      <span className="micro-label">Theme</span>
      <div className="theme-options" role="group" aria-label="Color theme">
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={`theme-option ${theme === option.value ? "active" : ""}`}
            onClick={() => selectTheme(option.value)}
            aria-pressed={theme === option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
