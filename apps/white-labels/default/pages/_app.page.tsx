import { AppProps } from 'next/app'
import {
  NhostClient,
  NhostProvider,
  useAuthenticationStatus,
  useSignInAnonymous,
} from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import posthog from 'posthog-js'

import {
  ComponentWithTranslations,
  flattenObject,
  translatedApp,
  withTranslations,
} from '@otiuming/ui-i18n'
import { logger as initLogger } from '@otiuming/utils-logging'
import {
  ImageOptimizerContext,
  PublicUrlPrefixContext,
} from '@otiuming/ui-common'

import { clientConfig } from '../config'

import en from '../translations/en.json'
import es from '../translations/es.json'
import fr from '../translations/fr.json'
import de from '../translations/de.json'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import './styles.scss'
import { useEffect, useState } from 'react'

initLogger.info({
  eventId: 'APP_INIT',
  environment: clientConfig,
})

const nhost = new NhostClient({
  ...clientConfig.nhostClient,
})

const isDev = clientConfig.isDev

if (typeof window !== 'undefined' && !isDev) {
  posthog.init(clientConfig.posthog.key, {
    api_host: clientConfig.posthog.host,
    capture_pageview: true,
  })
  posthog.register({
    Environment: clientConfig.environment,
    ApplicationName: 'owners',
  })
}

type AppPropsWithTranslations = AppProps & ComponentWithTranslations

if (typeof window !== 'undefined' && !clientConfig.isDev) {
  posthog.init(clientConfig.posthog.key, {
    api_host: clientConfig.posthog.host,
    capture_pageview: true,
  })
  posthog.register({
    environment: clientConfig.environment,
    application: 'white-labels/chisfis',
  })
}

function CustomApp(props: AppPropsWithTranslations) {
  // const router = useRouter()

  // useEffect(() => {
  //   // Track page views
  //   const handleRouteChange = () => posthog?.capture('$pageview')
  //   router.events.on('routeChangeComplete', handleRouteChange)

  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange)
  //   }
  // }, [])

  const { Component, pageProps } = props

  const [signInError, setSignInError] = useState(false)

  const AnonymousAuthenticate = () => {
    const { signInAnonymous } = useSignInAnonymous()
    const { isAuthenticated } = useAuthenticationStatus()

    useEffect(() => {
      if (isAuthenticated || signInError) return

      signInAnonymous().then((value) => {
        setSignInError(!!value.error)
      })
    }, [isAuthenticated, signInAnonymous])

    return <></>
  }

  return (
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <NhostProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost as any}>
          <PublicUrlPrefixContext.Provider value={clientConfig.publicUrlPrefix}>
            <ImageOptimizerContext.Provider
              value={clientConfig.imageOptimizerUrl}
            >
              <AnonymousAuthenticate />
              <Component {...pageProps} />
            </ImageOptimizerContext.Provider>
          </PublicUrlPrefixContext.Provider>
        </NhostApolloProvider>
      </NhostProvider>
    </div>
  )
}

const messages = {
  en: flattenObject(en),
  es: flattenObject(es),
  fr: flattenObject(fr),
  de: flattenObject(de),
}

const CustomTranslatedApp = translatedApp(messages)(withTranslations(CustomApp))

export default CustomTranslatedApp
