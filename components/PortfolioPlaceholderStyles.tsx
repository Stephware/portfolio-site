export function PortfolioPlaceholderStyles() {
  return (
    <style>{`
      .project-meta-chips {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: .35rem;
      }

      .outline-chip,
      .reserved-chip {
        display: inline-flex;
        align-items: center;
        width: fit-content;
        padding: .2rem .55rem;
        border: 1px solid var(--gray-300);
        border-radius: 999px;
        color: var(--gray-500);
        font: 8px var(--font-geist-mono), monospace;
        letter-spacing: .06em;
        text-transform: uppercase;
      }

      .project-impact-placeholder {
        margin-top: 1.25rem;
        padding: .8rem .9rem;
        border: 1px dashed var(--gray-300);
        border-radius: 10px;
        background: color-mix(in srgb, var(--gray-50) 65%, transparent);
      }

      .project-impact-placeholder p {
        margin-top: .35rem;
        font-size: .82rem;
        line-height: 1.45;
      }

      .career-proof-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem;
      }

      .career-placeholder-card,
      .recommendation-placeholder,
      .reserved-link,
      .future-proof-grid article,
      .graduation-copy-placeholder {
        border: 1px dashed var(--gray-300);
        border-radius: 14px;
        background: color-mix(in srgb, var(--gray-50) 72%, transparent);
      }

      .career-placeholder-card {
        padding: 1.35rem;
      }

      .current-build-card {
        border-style: solid;
      }

      .placeholder-card-meta {
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        margin-bottom: 2.5rem;
        color: var(--gray-400);
        font: 9px var(--font-geist-mono), monospace;
        letter-spacing: .08em;
        text-transform: uppercase;
      }

      .active-chip {
        border-style: solid;
        color: var(--ink);
      }

      .career-placeholder-card h3,
      .career-subsection h3,
      .future-proof-grid h3,
      .graduation-copy-placeholder h3 {
        margin: .55rem 0 .2rem;
        font-size: 1.15rem;
        font-weight: 500;
        letter-spacing: -.03em;
      }

      .career-placeholder-card > strong,
      .graduation-copy-placeholder > strong {
        display: block;
        color: var(--gray-600);
        font: 500 10px var(--font-geist-mono), monospace;
      }

      .career-placeholder-card > p,
      .future-proof-grid p,
      .graduation-copy-placeholder p,
      .reserved-link p {
        color: var(--gray-500);
      }

      .career-placeholder-card ul {
        margin: 1rem 0 0;
        padding-left: 1.15rem;
        color: var(--gray-500);
        font-size: .86rem;
      }

      .career-placeholder-card li + li {
        margin-top: .35rem;
      }

      .compact-tags {
        margin-top: 1rem;
      }

      .placeholder-reminder {
        margin-top: 1rem !important;
        padding-top: .9rem;
        border-top: 1px solid var(--gray-200);
        font: 9px/1.5 var(--font-geist-mono), monospace;
      }

      .career-subsection {
        margin-top: 3.5rem;
      }

      .career-subsection-heading {
        display: grid;
        grid-template-columns: minmax(9rem, .35fr) minmax(0, 1fr);
        gap: 2rem;
        align-items: start;
        margin-bottom: 1.4rem;
      }

      .career-subsection-heading h3 {
        margin-top: 0;
        max-width: 34rem;
      }

      .recommendation-grid,
      .reserved-link-grid,
      .future-proof-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: .75rem;
      }

      .recommendation-placeholder {
        display: flex;
        flex-direction: column;
        min-height: 15rem;
        padding: 1rem;
      }

      .recommendation-placeholder blockquote {
        margin: 1.25rem 0 auto;
        color: var(--gray-500);
        font-size: .9rem;
        line-height: 1.55;
      }

      .recommendation-placeholder strong {
        margin-top: 1.25rem;
        font-size: .85rem;
      }

      .recommendation-placeholder small,
      .future-proof-grid small,
      .graduation-copy-placeholder small {
        color: var(--gray-400);
        font: 9px var(--font-geist-mono), monospace;
      }

      .recruiter-placeholder-panel {
        padding-top: 2rem;
        border-top: 1px solid var(--gray-200);
      }

      .reserved-link {
        padding: 1rem;
      }

      .reserved-link strong {
        display: block;
        margin-bottom: .3rem;
      }

      .reserved-link > span {
        color: var(--gray-400);
        font: 8px var(--font-geist-mono), monospace;
        text-transform: uppercase;
      }

      .reserved-link p {
        margin: 1rem 0 0;
        font-size: .8rem;
      }

      .future-proof-details {
        margin-top: 3.5rem;
        border-top: 1px solid var(--gray-200);
        border-bottom: 1px solid var(--gray-200);
      }

      .future-proof-details summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 1.25rem 0;
        cursor: pointer;
        list-style: none;
      }

      .future-proof-details summary::-webkit-details-marker {
        display: none;
      }

      .future-proof-details summary > span:first-child {
        display: grid;
        gap: .2rem;
      }

      .future-proof-details summary strong {
        font-size: .95rem;
        font-weight: 500;
      }

      .future-proof-content {
        display: grid;
        gap: .9rem;
        padding-bottom: 1.25rem;
      }

      .future-proof-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .future-proof-grid article,
      .graduation-copy-placeholder {
        padding: 1rem;
      }

      .graduation-copy-placeholder {
        border-style: solid;
      }

      .graduation-copy-placeholder > small {
        display: block;
        margin-top: .35rem;
      }

      @media (max-width: 767px) {
        .project-meta {
          align-items: flex-start;
          gap: .8rem;
        }

        .project-meta-chips {
          max-width: 55%;
        }

        .career-proof-grid,
        .recommendation-grid,
        .reserved-link-grid,
        .future-proof-grid,
        .career-subsection-heading {
          grid-template-columns: 1fr;
        }

        .recommendation-placeholder {
          min-height: 0;
        }

        .mobile-menu {
          padding: 1.5rem 1.25rem 1.25rem;
          overflow-y: auto;
        }

        .mobile-menu nav {
          display: grid;
          gap: .35rem;
          align-content: start;
        }

        .mobile-menu nav a {
          display: grid;
          grid-template-columns: 1.9rem minmax(0, 1fr);
          align-items: baseline;
          gap: .75rem;
          padding: .55rem 0;
          border-bottom: 0;
          font-family: var(--font-geist-mono), monospace;
          font-size: clamp(1.35rem, 5.8vw, 1.7rem);
          font-weight: 400;
          line-height: 1.08;
          letter-spacing: -.035em;
        }

        .mobile-menu nav a span {
          width: auto;
          color: var(--gray-400);
          font: 8px var(--font-geist-mono), monospace;
          letter-spacing: .05em;
        }

        .mobile-menu nav a[aria-current="location"] {
          color: var(--ink);
        }

        .mobile-menu-footer {
          gap: .45rem;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--gray-200);
          font-size: 8px;
          line-height: 1.45;
        }
      }
    `}</style>
  );
}
