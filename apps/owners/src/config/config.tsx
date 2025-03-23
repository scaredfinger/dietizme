import { theme } from './theme/themeVariables'

const region = process.env.NEXT_PUBLIC_NHOST_REGION || undefined
const subdomain = process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || 'local'

const publicUrlPrefix = region
  ? `https://${subdomain}.storage.${region}.nhost.run/v1/files`
  : 'https://local.storage.nhost.run/v1/files'

const imageOptimizerUrl = region
  ? `https://otiuming-images.netlify.app`
  : '/'

const config = {
  menuCollapse: false,
  topMenu: false,
  rtl: false,
  mainTemplate: 'lightMode',
  loggedIn: false,
  theme,
  publicUrlPrefix,
  imageOptimizerUrl,
  statistics: {
    key: process.env.NEXT_PUBLIC_POSTHOG_KEY || '',
    init: {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.posthog.com',
      capture_pageview: true,
    },
    register: {
      environment: process.env.NEXT_PUBLIC_ENVIRONMENT,
      application: 'owners',
    },
    statistics_disabled: ['local', 'development'].includes(process.env.NEXT_PUBLIC_ENVIRONMENT || ''),
  }
}

export default config
