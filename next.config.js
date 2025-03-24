/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configure webpack to use a fixed port for HMR
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      const hmrPort = parseInt(process.env.NEXT_HMR_PORT || '8097', 10);
      config.devServer = {
        ...config.devServer,
        hmr: {
          port: hmrPort
        }
      };
      
      // Enable polling for file changes if specified
      if (process.env.NEXT_WEBPACK_USEPOLLING === '1') {
        config.watchOptions = {
          ...config.watchOptions,
          poll: 500,
          aggregateTimeout: 300
        };
      }
    }
    return config;
  }
};

module.exports = nextConfig;
