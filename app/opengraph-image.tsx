import { ImageResponse } from "next/og";

export const alt = "Stephen Pinacate — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#fdfcf9",
          color: "#0a0a0a",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 2 }}>
          <span>PORTFOLIO / 2026</span>
          <span>FULL-STACK DEVELOPER</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 0.95, letterSpacing: -6 }}>stephen</div>
          <div style={{ fontSize: 88, lineHeight: 0.95, letterSpacing: -6 }}>pinacate.</div>
        </div>
        <div style={{ maxWidth: 780, fontSize: 28, lineHeight: 1.35 }}>
          Building practical software for real operational systems across web, mobile, desktop, and AI-assisted applications.
        </div>
      </div>
    ),
    size,
  );
}
