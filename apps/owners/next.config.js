/** @type {import('next').NextConfig} */
const nextConfig = {
  // distDir: '../../dist/apps/owners/.next',
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  async redirects() {
    return [
    ]
  },
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [80, 160, 320, 640, 1024, 1920],
    domains: [
      'lh3.googleusercontent.com',
      'host.docker.internal',
      'images.unsplash.com',
      'local.storage.nhost.run'
    ],
  },
  transpilePackages: [
    '@otiuming/utils-logging',
    '@otiuming/domain-shopping-cart',
    'lodash-es',
    '@otiuming/ui-text-formatting',
    '@otiuming/ui-white-labels-view-models'
  ],
  webpack: (config, { isServer }) => {
    // This ensures the files from these local libraries are processed correctly as ES modules
    config.module.rules.push({
      test: /\.js$/,
      include: [
        /libs\/ui\/text-formatting\/dist/,
        /libs\/ui\/white-labels-view-models\/dist/,
        /libs\/ui\/common\/dist/,
        /libs\/ui\/i18n\/dist/,
        /libs\/ui\/shopping-cart\/dist/
      ],
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false
      }
    });
    
    // Handle ESM modules
    config.module.rules.push({
      test: /\.m?js$/,
      include: [
        /node_modules/
      ],
      resolve: {
        fullySpecified: false
      }
    });
    
    return config;
  }
}

module.exports = nextConfig
