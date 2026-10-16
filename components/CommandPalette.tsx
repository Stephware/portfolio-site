"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { copyEmailAddress } from "./CopyEmail";
import styles from "./CommandPalette.module.css";

const openEvent = "portfolio:open-command";

type Command = {
  label: string;
  group: string;
  hint?: string;
  keywords?: string;
  run: () => void;
};

export function CommandPaletteTrigger({
  children = "Quick navigation",
  className,
  onOpen,
}: {
  children?: ReactNode;
  className?: string;
  onOpen?: () => void;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onOpen?.();
        window.dispatchEvent(new Event(openEvent));
      }}
    >
      {children}
    </button>
  );
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const openPalette = () => {
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    setQuery("");
    setActive(0);
    setOpen(true);
  };

  const goTo = (href: string) => {
    if (href.startsWith("#")) {
      if (window.location.pathname === "/") {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.replaceState(null, "", href);
      } else {
        router.push("/" + href);
      }
      return;
    }

    if (href.startsWith("/")) {
      router.push(href);
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
  };

  const commands: Command[] = [
    { label: "Home", group: "Sections", hint: "01", keywords: "top intro", run: () => goTo("#top") },
    { label: "Projects", group: "Sections", hint: "02", run: () => goTo("#projects") },
    { label: "Experience", group: "Sections", hint: "03", run: () => goTo("#experience") },
    { label: "Recommendations", group: "Sections", hint: "04", run: () => goTo("#recommendations") },
    { label: "Achievements", group: "Sections", hint: "05", run: () => goTo("#achievements") },
    { label: "Leadership", group: "Sections", hint: "06", run: () => goTo("#leadership") },
    { label: "Competitions", group: "Sections", hint: "07", run: () => goTo("#competitions") },
    { label: "About & skills", group: "Sections", hint: "08", run: () => goTo("#about") },
    { label: "Hardware & embedded", group: "Sections", hint: "09", keywords: "electronics esp32 logic", run: () => goTo("#hardware") },
    { label: "GitHub activity", group: "Sections", hint: "10", run: () => goTo("#github") },
    { label: "Contact", group: "Sections", hint: "11", run: () => goTo("#contact") },
    { label: "INNOVET", group: "Projects", hint: "Case study", keywords: "veterinary asp.net", run: () => goTo("/projects/innovet") },
    { label: "VITALLY", group: "Projects", hint: "Case study", keywords: "clinic inventory", run: () => goTo("/projects/vitally") },
    { label: "TUKI", group: "Projects", hint: "Case study", keywords: "transport kotlin navigation", run: () => goTo("/projects/tuki") },
    { label: "AUFTHORIZE", group: "Projects", hint: "Project", keywords: "php approval pdf", run: () => goTo("/projects/aufthorize") },
    { label: "ENGRLINK", group: "Projects", hint: "Project", keywords: "winui supabase portal", run: () => goTo("/projects/engrlink") },
    { label: "GAUSS BUSTERS", group: "Projects", hint: "Project", keywords: "numerical methods winui", run: () => goTo("/projects/gauss-busters") },
    {
      label: "Preview resume",
      group: "Actions",
      hint: "PDF",
      keywords: "cv",
      run: () => window.dispatchEvent(new Event("portfolio:open-resume")),
    },
    {
      label: "Toggle color theme",
      group: "Actions",
      hint: "Light / dark",
      keywords: "theme mode",
      run: () => {
        const next = document.documentElement.classList.contains("dark") ? "light" : "dark";
        window.dispatchEvent(new CustomEvent("portfolio:set-theme", { detail: next }));
      },
    },
    {
      label: "LinkedIn",
      group: "Links",
      hint: "↗",
      run: () => goTo("https://www.linkedin.com/in/stephen-pinacate-3bb592319/"),
    },
    { label: "GitHub", group: "Links", hint: "↗", run: () => goTo("https://github.com/Stephware") },
    {
      label: "Copy email",
      group: "Actions",
      hint: "Clipboard",
      keywords: "contact mail email stephen",
      run: () => {
        void copyEmailAddress();
      },
    },
  ];

  const needle = query.trim().toLowerCase();
  const filtered = needle
    ? commands.filter((command) =>
        (command.label + " " + command.group + " " + (command.keywords ?? "")).toLowerCase().includes(needle),
      )
    : commands;
  const safeActive = Math.min(active, Math.max(filtered.length - 1, 0));

  useEffect(() => {
    const onOpen = () => openPalette();

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (open) {
          setOpen(false);
        } else {
          openPalette();
        }
      }
    };

    window.addEventListener(openEvent, onOpen);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener(openEvent, onOpen);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("command-palette-open");
    requestAnimationFrame(() => inputRef.current?.focus());

    return () => {
      document.body.classList.remove("command-palette-open");
      requestAnimationFrame(() => previousFocusRef.current?.focus());
    };
  }, [open]);

  const execute = (command: Command | undefined) => {
    if (!command) return;
    setOpen(false);
    requestAnimationFrame(command.run);
  };

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) setOpen(false);
      }}
    >
      <section className={styles.palette} role="dialog" aria-modal="true" aria-label="Quick navigation">
        <div className={styles.searchRow}>
          <span>⌘K</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
              setActive(0);
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape") setOpen(false);
              if (event.key === "ArrowDown") {
                event.preventDefault();
                setActive((value) => Math.min(value + 1, Math.max(filtered.length - 1, 0)));
              }
              if (event.key === "ArrowUp") {
                event.preventDefault();
                setActive((value) => Math.max(value - 1, 0));
              }
              if (event.key === "Enter") {
                event.preventDefault();
                execute(filtered[safeActive]);
              }
            }}
            placeholder="Search projects, sections, or actions…"
            aria-label="Search portfolio commands"
          />
          <button type="button" onClick={() => setOpen(false)}>Esc</button>
        </div>

        <div className={styles.results} role="listbox" aria-label="Portfolio commands">
          {filtered.length ? (
            filtered.map((command, index) => (
              <button
                type="button"
                key={command.group + "-" + command.label}
                className={index === safeActive ? styles.active : undefined}
                onMouseEnter={() => setActive(index)}
                onClick={() => execute(command)}
                role="option"
                aria-selected={index === safeActive}
              >
                <span>
                  <small>{command.group}</small>
                  <strong>{command.label}</strong>
                </span>
                <em>{command.hint ?? "→"}</em>
              </button>
            ))
          ) : (
            <p className={styles.empty}>No matching command.</p>
          )}
        </div>

        <footer className={styles.footer}>
          <span>↑↓ Navigate</span>
          <span>Enter Select</span>
          <span>Esc Close</span>
        </footer>
      </section>
    </div>
  );
}
