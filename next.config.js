/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
