import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'www.google.com',
      'encrypted-tbn0.gstatic.com',
      'img.freepik.com',
      'images.unsplash.com',
      'cdn.sanity.io'
    ],
  },
};

export default nextConfig;
