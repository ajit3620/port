/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enables static HTML export
  images: {
    unoptimized: true,
  },
  basePath: '/port',  // Required for GitHub Pages
  assetPrefix: '/port'  // Required for GitHub Pages
}

module.exports = nextConfig 