/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
  images: {
    domains: ['localhost']
  }
};

module.exports = nextConfig;
