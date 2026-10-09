import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "build-output",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
