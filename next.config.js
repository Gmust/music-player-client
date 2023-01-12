/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  experimental: {
    appDir: true
  },
/*  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8080',
        pathname: '/picture/!**'
      }
    ],
  },*/
  images : {
    domains : ['localhost']
  }
};

module.exports = nextConfig;
