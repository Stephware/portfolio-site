"use client";

import { useRef, useState, type ReactNode } from "react";

export const emailAddress = "pinacate.stephen@gmail.com";

export async function copyEmailAddress() {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(emailAddress);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = emailAddress;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

export function CopyEmail({
  className,
  children,
  onCopied,
}: {
  className?: string;
  children: ReactNode;
  onCopied?: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const copy = async () => {
    try {
      await copyEmailAddress();
      setCopied(true);
      onCopied?.();

      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      className={`copy-email-button ${className ?? ""}`.trim()}
      onClick={copy}
      aria-label="Copy email address"
      title={copied ? "Copied to clipboard" : `Copy ${emailAddress}`}
    >
      <span className="contact-link-main">{children}</span>
      <span className={`copy-email-status ${copied ? "visible" : ""}`} aria-live="polite">
        {copied ? "Copied" : ""}
      </span>
    </button>
  );
}
