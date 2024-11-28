import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    silenceDeprecations: ["legacy-js-api"],
  },
  env: {
    DATABASE_URL: process.env.DATABASE_URL
  }
};

export default nextConfig;
