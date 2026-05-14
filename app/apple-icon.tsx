import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon — versão maior do bloco "n/" pra home screen iOS.
export default function AppleIcon() {
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
          fontSize: 120,
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
