import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site has no server code: `next build` writes plain files to `out/`.
  output: "export",
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
