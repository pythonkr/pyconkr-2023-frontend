/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'imgix',
    path: '/',
  },
  async redirects() {
    return [
      {
        source: '/coc',
        destination: '/coc/purpose',
        permanent: true,
      },
    ]
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
