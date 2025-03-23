import '../components/wdyr'

import React, { PropsWithChildren, useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import {
  NhostClient,
  NhostProvider,
  useAuthenticationStatus,
  useUserData,
} from '@nhost/nextjs'
import { NhostApolloProvider } from '@nhost/react-apollo'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

import { clientConfig } from '@/config/env'

import i18n from '@/i18n/config'

import { wrapper, store } from '../redux/store'
import { AuthContextProvider } from '../authentication/AuthContext'

import AdminLayout from './adminLayout'
import AuthLayout from './authLayout'

import '@/styles/globals.css'
import '@/components/forms/style.css'

const nhost = new NhostClient({
  ...clientConfig.nhostClient,
})

const isDev = clientConfig.isDev

// if (typeof window !== 'undefined' && !isDev) {
//   posthog.init(clientConfig.posthog.key, {
//     api_host: clientConfig.posthog.host,
//     capture_pageview: true,
//   })
//   posthog.register({
//     Environment: clientConfig.environment,
//     ApplicationName: 'owners',
//   })
// }

const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  const { pathname, locale } = useRouter()

  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  const renderLayout = () => {
    if (
      pathname == '/' ||
      pathname.startsWith('/register') ||
      pathname.startsWith('/forgotPassword') ||
      pathname.startsWith('/login')
    ) {
      return (
        <AuthLayout>
          <Component {...pageProps} />
        </AuthLayout>
      )
    } else {
      return (
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      )
    }
  }

  return (
    <>
      <NhostProvider nhost={nhost}>
        <NhostApolloProvider nhost={nhost as any}>
          {/* <PostHogProviderWrapper> */}
            <QueryClientProvider client={queryClient}>
              <Provider store={store}>
                <AuthContextProvider>{renderLayout()}</AuthContextProvider>
              </Provider>
            </QueryClientProvider>
          {/* </PostHogProviderWrapper> */}
        </NhostApolloProvider>
      </NhostProvider>
    </>
  )
}

const PostHogProviderWrapper = ({
  children,
}: PropsWithChildren) => {
  const user = useUserData()
  const { isAuthenticated } = useAuthenticationStatus()
  
  useEffect(() => {
    if (! posthog || ! user) {
      return
    }

    if (isDev) return

    if (isAuthenticated) {
      posthog.identify(user?.id, {
        email: user?.email
      })
    }
  }, [user, isAuthenticated])
  
  if (typeof window === 'undefined') {
    return <>{children}</>
  }

  if (isDev) {
    return <>{children}</>
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export default wrapper.withRedux(App)
