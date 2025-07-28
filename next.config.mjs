/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static optimization for better SSR performance
  experimental: {
    optimizeCss: true,
  },
  
  // Image optimization
  images: {
    domains: ['github-readme-streak-stats.herokuapp.com', 'github-readme-streak-stats.vercel.app'],
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  
  // Compression
  compress: true,
  
  // Headers for better performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // ESLint and TypeScript configurations
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
