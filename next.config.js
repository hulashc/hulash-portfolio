/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath for GitHub Pages if needed
  // basePath: '/hulash-portfolio',
  trailingSlash: true,
}

module.exports = nextConfig
