import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "web-imaray.local",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "admin.imarayulloa.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true
  },
};

export default nextConfig;
