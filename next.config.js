/** @type {import('next').NextConfig} */
const path = require("path");
const dotenv = require("dotenv");
const { withContentlayer } = require("next-contentlayer");
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
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "media-exp1.licdn.com"],
    dangerouslyAllowSVG: true,
  },
};
module.exports = withContentlayer(nextConfig);
