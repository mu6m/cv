/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This tells webpack to ignore these modules on the server side
      // as they will be provided by Cloudflare's nodejs_compat layer
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false,
        stream: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
