/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // This part handles standard imports (e.g., 'fs')
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
        crypto: false,
        stream: false,
      };

      // This part handles Next 16's "node:" prefix imports
      config.externals.push(({ request }, callback) => {
        if (/^node:/.test(request)) {
          return callback(null, "commonjs " + request);
        }
        callback();
      });
    }
    return config;
  },
};

module.exports = nextConfig;
