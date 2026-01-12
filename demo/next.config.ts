import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.tailwindplus.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'tailwindcss.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ajo9kxm7rzpucqha.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
}

export default nextConfig
