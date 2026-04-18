/** @type {import('next').NextConfig} */
const nextConfig = {
  // This tells Next 16 we are sticking with Webpack for this config
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
