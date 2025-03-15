import { getClientEnv } from './client'

const clientProcessEnv = getClientEnv()

const region = clientProcessEnv.NEXT_PUBLIC_NHOST_REGION
const subdomain = clientProcessEnv.NEXT_PUBLIC_NHOST_SUBDOMAIN

const publicUrlPrefix = region
  ? `https://${subdomain}.storage.${region}.nhost.run/v1/files`
  : 'https://local.storage.nhost.run/v1/files'

const imageOptimizerUrl = region ? `https://otiuming-images.netlify.app` : '/'

const isDev = !region

export const clientConfig = {
  isDev,
  nhostClient: {
    devTools: isDev,
    subdomain,
    region,
  },
  maps: {
    mapboxToken: 'https://local.graphql.nhost.run/v1', // clientProcessEnv.NEXT_PUBLIC_MAPBOX_TOKEN,
  },
  graphql: clientProcessEnv.NEXT_PUBLIC_GRAPHQL_SERVER,
  publicUrlPrefix,
  searchEngine: clientProcessEnv.NEXT_PUBLIC_SEARCH_ENGINE_URL,
  imageOptimizerUrl,
  imageSizes: {
    tile: 80,
    xxsmall: 160,
    xsmall: 320,
    small: 640,
    medium: 1024,
    large: 1920,
  },
  imageQualities: {
    low: 20,
    medium: 50,
    high: 85,
  },
  posthog: {
    key: clientProcessEnv.NEXT_PUBLIC_POSTHOG_KEY,
    host: clientProcessEnv.NEXT_PUBLIC_POSTHOG_HOST,
  },
  environment: clientProcessEnv.NEXT_PUBLIC_ENVIRONMENT,
  sentry: {
    dsn: clientProcessEnv.NEXT_PUBLIC_SENTRY_WHITE_LABEL_DEFAULT_DSN,
    environment: clientProcessEnv.NEXT_PUBLIC_ENVIRONMENT,
    tracesSampleRate: 1.0,
    sendClientReports: false,
  },
}

export * from './server'
export * from './client'
