/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // TODO: domain 추후 수정하기
    unoptimized: true,
    domains: ['cdn.pixabay.com', '**'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '**',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{
        loader: '@svgr/webpack',
        options: {
          icon: true,
        },
      }],
    });

    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
};

module.exports = nextConfig;
