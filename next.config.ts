import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // fully static — served as assets on Cloudflare Workers
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
