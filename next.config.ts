import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./config/image-loader.ts",
    deviceSizes: [360, 480, 640, 800, 960, 1200, 1536],
    imageSizes: [48, 64, 96, 128, 160, 256],
  },
};

export default nextConfig;
