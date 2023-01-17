/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
  images : {
    domains : ['localhost']
  }
};

module.exports = nextConfig;
