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


export function GitHubIcon({ className = "contact-icon" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 22v-4.2c0-1.2-.4-2.1-1.1-2.7 3.6-.4 7.4-1.8 7.4-8A6.3 6.3 0 0 0 19.6 2.7 5.8 5.8 0 0 0 19.4 0S18.1-.4 15 1.7a15.4 15.4 0 0 0-6 0C5.9-.4 4.6 0 4.6 0a5.8 5.8 0 0 0-.2 2.7A6.3 6.3 0 0 0 2.7 7.1c0 6.2 3.8 7.6 7.4 8-.6.5-1 1.3-1.1 2.4-.9.4-3.1 1.1-4.5-1.3 0 0-.8-1.5-2.4-1.6 0 0-1.5 0-.1 1 0 0 1 .5 1.7 2.1 0 0 .9 2.8 3.7 2 .1 0 .7-.1 1.5-.4V22" />
      <path d="M9 19.5c-2.8.8-4.6-1.3-4.6-1.3" />
    </svg>
  );
}
