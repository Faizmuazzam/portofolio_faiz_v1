import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // penting untuk static export
  images: {
    unoptimized: true, // supaya next/image tetap jalan di static export
  },
  eslint: {
    ignoreDuringBuilds: true, // ⬅ ini biar error eslint gak stop build
  },
  // typescript: {
  //   ignoreBuildErrors: true, // ⬅ opsional kalau ada ts error
  // },
};

export default nextConfig;
