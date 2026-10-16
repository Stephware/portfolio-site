export function MailIcon({ className = "contact-icon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function LinkedInIcon({ className = "contact-icon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="2.5" />
      <path d="M8 10v7" />
      <path d="M8 7.25v.01" />
      <path d="M12 17v-4.1c0-1.6.95-2.65 2.35-2.65 1.45 0 2.65.96 2.65 3V17" />
      <path d="M12 10v7" />
    </svg>
  );
}

export function ResumeIcon({ className = "contact-icon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M7 3.5h7l4 4V20.5H7z" />
      <path d="M14 3.5v4h4" />
      <path d="M10 12h5" />
      <path d="M10 15.5h5" />
    </svg>
  );
}
