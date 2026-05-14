import { ImageResponse } from "next/og";

export const alt = "Nashpages — sites bem feitos por uma empresa que pensa demais.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// OG image dinâmica usada em compartilhamento social (WhatsApp, LinkedIn, Twitter, etc).
// Replica a estética do Hero: eyebrow mono + título grande + logo bottom.
export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E0B0B",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            color: "#9A958E",
            letterSpacing: "0.08em",
            fontFamily: "monospace",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#5B1F2A", marginRight: 16 }}>/</span>
          EMPRESA · EST. 2026
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 88,
            color: "#EEE8E0",
            letterSpacing: "-0.03em",
            lineHeight: 0.98,
            fontWeight: 600,
          }}
        >
          <span>Sites bem feitos.</span>
          <span style={{ color: "#C9C2B7" }}>
            Por uma empresa que pensa demais.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 56,
            color: "#EEE8E0",
            letterSpacing: "-0.03em",
            fontWeight: 500,
          }}
        >
          nash<span style={{ color: "#5B1F2A" }}>/</span>pages
        </div>
      </div>
    ),
    { ...size }
  );
}
