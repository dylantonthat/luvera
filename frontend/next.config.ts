import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

module.exports = {
  compiler: {
    styledComponents: true, // Enables SSR support for styled-components
  },
};

export default nextConfig;
