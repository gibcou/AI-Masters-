/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/AI-Masters-',
  assetPrefix: '/AI-Masters-/'
}

module.exports = nextConfig