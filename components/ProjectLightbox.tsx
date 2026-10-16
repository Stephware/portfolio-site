"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./ProjectLightbox.module.css";

type LightboxItem = {
  src: string;
  alt: string;
  caption: string;
};

export function ProjectLightbox() {
  const pathname = usePathname();
  const [items, setItems] = useState<LightboxItem[]>([]);
  const [index, setIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const open = items.length > 0;
  const current = items[index];

  useEffect(() => {
    if (!pathname.startsWith("/projects/") || pathname === "/projects") return;

    const main = document.querySelector("main");
    if (!main) return;

    const readItems = () =>
      Array.from(main.querySelectorAll<HTMLImageElement>("img")).map((image) => {
        const figure = image.closest("figure");
        const caption = figure?.querySelector("figcaption")?.textContent?.replace(/\s+/g, " ").trim();
        return {
          src: image.currentSrc || image.src,
          alt: image.alt || "Project screenshot",
          caption: caption || image.alt || "Project screenshot",
        };
      });

    const images = Array.from(main.querySelectorAll<HTMLImageElement>("img"));
    images.forEach((image) => {
      image.dataset.lightboxTarget = "true";
      image.tabIndex = 0;
      image.setAttribute("role", "button");
      image.setAttribute("aria-label", "Open image preview: " + (image.alt || "project screenshot"));
    });

    const openImage = (target: HTMLImageElement) => {
      const all = Array.from(main.querySelectorAll<HTMLImageElement>("img"));
      const targetIndex = all.indexOf(target);
      if (targetIndex < 0) return;
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setItems(readItems());
      setIndex(targetIndex);
    };

    const handleClick = (event: Event) => {
      const target = event.target;
      if (target instanceof HTMLImageElement) openImage(target);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openImage(target);
    };

    main.addEventListener("click", handleClick);
    main.addEventListener("keydown", handleKeyDown);

    return () => {
      main.removeEventListener("click", handleClick);
      main.removeEventListener("keydown", handleKeyDown);
      images.forEach((image) => {
        delete image.dataset.lightboxTarget;
        image.removeAttribute("tabindex");
        image.removeAttribute("role");
        image.removeAttribute("aria-label");
      });
    };
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("project-lightbox-open");
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setItems([]);
      if (event.key === "ArrowRight") setIndex((value) => (value + 1) % items.length);
      if (event.key === "ArrowLeft") setIndex((value) => (value - 1 + items.length) % items.length);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("project-lightbox-open");
      document.removeEventListener("keydown", handleKeyDown);
      requestAnimationFrame(() => previousFocusRef.current?.focus());
    };
  }, [open, items.length]);

  const counter = useMemo(() => {
    if (!open) return "";
    return String(index + 1).padStart(2, "0") + " / " + String(items.length).padStart(2, "0");
  }, [index, items.length, open]);

  if (!open || !current) return null;

  return (
    <div
      className={styles.backdrop}
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) setItems([]);
      }}
    >
      <section className={styles.modal} role="dialog" aria-modal="true" aria-label="Project image preview">
        <header className={styles.header}>
          <div>
            <span>{counter}</span>
            <p>{current.caption}</p>
          </div>
          <button ref={closeButtonRef} type="button" onClick={() => setItems([])}>Close ×</button>
        </header>

        <div className={styles.stage}>
          <img src={current.src} alt={current.alt} />
        </div>

        {items.length > 1 ? (
          <div className={styles.controls}>
            <button type="button" onClick={() => setIndex((value) => (value - 1 + items.length) % items.length)}>
              ← Previous
            </button>
            <button type="button" onClick={() => setIndex((value) => (value + 1) % items.length)}>
              Next →
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}
