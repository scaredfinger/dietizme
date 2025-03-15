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
  sentry: {},
  experimental: {
    esmExternals: true,
    optimizePackageImports: [
      "lodash",
      "joi",
      "@sentry/nextjs"
    ]
  },
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

  silent: false, // Suppresses all logs

  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
}

module.exports = async function withCustom(/** @type {string} */ phase) {
  if (phase.includes('development')) {
    return nextConfig
  }

  // @ts-ignore
  const configWithBundler = withBundleAnalyzer(nextConfig)

  return withSentryConfig(configWithBundler, sentryWebpackPluginOptions)
}
