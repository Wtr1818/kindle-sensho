import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "covers.openlibrary.org" },
      { hostname: "books.google.com" },
      { hostname: "m.media-amazon.com" },
    ],
  },
};

export default nextConfig;
