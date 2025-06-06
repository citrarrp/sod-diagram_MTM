import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/src/app/assets",
        search: "",
      },
    ],
  },
  experimental: {
    webpackMemoryOptimizations: true
  }

};

export default nextConfig;
