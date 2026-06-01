import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16: allowlist de qualidades (default só [75]). Permite quality alta nas fotos.
    qualities: [75, 90, 95, 100],
    // AVIF (~50% menor) + WebP fallback; Next escolhe pelo browser.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
