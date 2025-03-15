//@ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withSentryConfig } = require('@sentry/nextjs')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true',
})

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    imageSizes: [80, 160, 320, 640, 1024, 1920],
    domains: [
      'host.docker.internal',
      'images.unsplash.com',
      'local.storage.nhost.run',
      'my.otiuming.com'
    ],
  },
  transpilePackages: [
    '@otiuming/utils-logging',
    '@otiuming/domain-shopping-cart',
    'lodash-es',
    '@otiuming/ui-text-formatting',
    '@otiuming/ui-white-labels-view-models'
  ],
  // This helps with Sentry integration
  sentry: {
    hideSourceMaps: true,
  },
  experimental: {
    esmExternals: 'loose', // Changed back to 'loose' which often works better with mixed module types
    optimizePackageImports: [
      "lodash",
      "lodash-es",
      "joi",
      "@sentry/nextjs",
      "@otiuming/utils-logging",
      "@otiuming/domain-shopping-cart",
      "@otiuming/ui-text-formatting",
      "@otiuming/ui-white-labels-view-models"
    ]
  },
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

const sentryWebpackPluginOptions = {
  // Additional config options for the Sentry webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, configFile, stripPrefix, urlPrefix, include, ignore

  org: 'otiuming',
  project: 'white-labels-default',

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: true, // Prevents Sentry from failing the build

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
  hideSourceMaps: true,
}

module.exports = async function withCustom(/** @type {string} */ phase) {
  if (phase.includes('development')) {
    return nextConfig
  }

  // @ts-ignore
  const configWithBundler = withBundleAnalyzer(nextConfig)

  return withSentryConfig(configWithBundler, sentryWebpackPluginOptions)
}
