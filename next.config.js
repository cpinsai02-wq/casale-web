/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure-euc1.s3.eu-central-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co', // Questo è il dominio dei link diretti di ImgBB
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;