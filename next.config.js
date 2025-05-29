/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/port',
  assetPrefix: '/port/',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig 