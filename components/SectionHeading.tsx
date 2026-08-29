import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <header className="section-heading">
      <p className="section-index">{index} — {label}</p>
      <div className="section-heading-copy">
        <h2>{title}</h2>
        <div className="section-intro">{children}</div>
      </div>
    </header>
  );
}
