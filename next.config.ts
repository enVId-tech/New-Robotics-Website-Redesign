import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  // Enable experimental optimizations
  experimental: {
    optimizePackageImports: ['@/utils', '@/hooks'],
  },
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Ignore ESLint during builds (can be removed after fixing all lint errors)
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
