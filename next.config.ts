import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  images: {
    // Keep the manually supplied portfolio photography at its original quality.
    // The hero portrait is intentionally cropped/zoomed in CSS, so serving the
    // full source avoids enlarging a small optimized rendition in the browser.
    unoptimized: true,
  },
};

export default nextConfig;
