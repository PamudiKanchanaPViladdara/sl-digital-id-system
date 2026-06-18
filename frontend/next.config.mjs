/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*', // Vercel secretly routes this to AWS!
      },
    ]
  },
};

export default nextConfig;