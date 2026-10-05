import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/ar",
        destination: "/",
        permanent: false,
      },
      {
        source: "/ar/:path*",
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/services/facade-cleaning",
        destination: "/services/facade-cleaning-maintenance",
        permanent: false,
      },
      {
        source: "/services/facade-maintenance",
        destination: "/services/facade-cleaning-maintenance",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
