/** @type {import('next').NextConfig} */
const nextConfig = {
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

      // Force "node:" prefixed modules to be treated as externals
      // This prevents the "UnhandledSchemeError" you saw
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
