/** @type {import('next').NextConfig} */
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  trailingSlash: true,
  optimizeFonts: false,
  distDir: "build",
  env: {
    DB_USER: process.env.DB_USER,
    DB_HOST: process.env.DB_HOST,
    DB_DATABASE: process.env.DB_DATABASE,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_PORT: process.env.DB_PORT,
  },
  images: {
    domains: ["preview.cruip.com"],
  },
};
module.exports = nextConfig;
