/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'https://socialmedia1989.net/graphql'],
  },
};

module.exports = nextConfig;
