import * as Sentry from '@sentry/nextjs'

import { clientConfig } from './config'

Sentry.init({
  dsn: clientConfig.sentry.dsn,
  environment: clientConfig.environment,

  tracesSampleRate: clientConfig.environment == 'local' ? 0 : 1.0,
  replaysSessionSampleRate: clientConfig.environment == 'local' ? 0 : 0.1,
  replaysOnErrorSampleRate: clientConfig.environment == 'local' ? 0 : 1.0,
  profilesSampleRate: clientConfig.environment == 'local' ? 0 : 1.0,
  sampleRate: clientConfig.environment == 'local' ? 0 : 1.0,
})
