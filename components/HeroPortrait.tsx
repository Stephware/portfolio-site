"use client";

import Image from "next/image";
import { useState } from "react";

export function HeroPortrait() {
  const [active, setActive] = useState(false);

  return (
    <figure className={`portrait-slot portrait-interactive ${active ? "is-inspecting" : ""}`}>
      <button
        type="button"
        className="portrait-interaction"
        aria-label="Inspect Stephen Pinacate's software and hardware profile"
        aria-pressed={active}
        onClick={() => setActive((value) => !value)}
      >
        <Image
          className="portrait-image"
          src="/stephen-pinacate.webp"
          alt="Stephen Pinacate"
          fill
          priority
          sizes="(max-width: 767px) 272px, 240px"
        />

        <span className="portrait-shade" aria-hidden="true" />

        <span className="portrait-tech-layer" aria-hidden="true">
          <span className="portrait-tech-grid" />
          <span className="portrait-scan-line" />

          <span className="portrait-tech-tag portrait-tech-software">
            <strong>Software</strong>
            <small>ASP.NET Core · C#</small>
          </span>

          <span className="portrait-tech-tag portrait-tech-systems">
            <strong>Systems</strong>
            <small>APIs · SQL · Architecture</small>
          </span>

          <span className="portrait-tech-tag portrait-tech-hardware">
            <strong>Hardware</strong>
            <small>ESP32 · Sensors · PWM</small>
          </span>

          <span className="portrait-tech-node portrait-tech-node-a" />
          <span className="portrait-tech-node portrait-tech-node-b" />
          <span className="portrait-tech-node portrait-tech-node-c" />
        </span>
      </button>

      <figcaption>
        <span>Stephen Pinacate · 2026</span>
        <span className="portrait-inspect-hint">{active ? "tap to reset" : "hover / tap to inspect"}</span>
      </figcaption>
    </figure>
  );
}
