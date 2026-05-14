import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// Favicon dinâmico — bloco preto-tinta com "n/" (slash bordô) centralizado.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0E0B0B",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#EEE8E0",
          fontSize: 22,
          fontWeight: 500,
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
        }}
      >
        n<span style={{ color: "#5B1F2A" }}>/</span>
      </div>
    ),
    { ...size }
  );
}
