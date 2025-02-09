import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  compiler: {
    styledComponents: true, // Enables SSR support for styled-components
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
};

export default nextConfig;
