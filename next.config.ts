import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/portfolio_a",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
