"use client";

import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import styles from "./ResumePreview.module.css";

const resumePath = "/Stephen-Pinacate-Resume.pdf";
const openEvent = "portfolio:open-resume";

type ResumePreviewLinkProps = {
  children: ReactNode;
  className?: string;
  onOpen?: () => void;
};

export function ResumePreviewLink({ children, className, onOpen }: ResumePreviewLinkProps) {
  const openPreview = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onOpen?.();
    window.dispatchEvent(new Event(openEvent));
  };

  return (
    <a className={className} href={resumePath} onClick={openPreview}>
      {children}
    </a>
  );
}

export function ResumePreviewModal() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleOpen = () => {
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setOpen(true);
    };

    window.addEventListener(openEvent, handleOpen);
    return () => window.removeEventListener(openEvent, handleOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.classList.add("resume-preview-open");
    requestAnimationFrame(() => closeButtonRef.current?.focus());

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("resume-preview-open");
      document.removeEventListener("keydown", handleKeyDown);
      requestAnimationFrame(() => previousFocusRef.current?.focus());
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      role="presentation"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) setOpen(false);
      }}
    >
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-preview-title"
      >
        <header className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Resume · PDF</span>
            <h2 id="resume-preview-title">Stephen Pinacate</h2>
          </div>

          <div className={styles.actions}>
            <a href={resumePath} download="Stephen-Pinacate-Resume.pdf">
              Download PDF ↓
            </a>
            <button ref={closeButtonRef} type="button" onClick={() => setOpen(false)}>
              Close ×
            </button>
          </div>
        </header>

        <div className={styles.viewer}>
          <iframe
            src={`${resumePath}#view=FitH&toolbar=1&navpanes=0`}
            title="Stephen Pinacate resume PDF preview"
          />
        </div>
      </section>
    </div>
  );
}
