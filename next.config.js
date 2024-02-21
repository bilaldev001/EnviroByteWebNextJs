/** @type {import('next').NextConfig} */
const path = require('path')
const dotenv = require('dotenv');
dotenv.config();
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        })

        return config
    },
    trailingSlash: true,
    optimizeFonts: false,
    distDir: 'build',
}
module.exports = nextConfig