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
    ],
  },
}

export default nextConfig
