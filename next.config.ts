import type { NextConfig } from "next";
import imageSettings from "./config/image-settings.json";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./config/image-loader.ts",
    deviceSizes: imageSettings.deviceSizes,
    imageSizes: imageSettings.imageSizes,
  },
};

export default nextConfig;
