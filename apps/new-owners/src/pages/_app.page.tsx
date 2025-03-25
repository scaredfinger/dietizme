import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/auth-context'

import { NhostClient, NhostProvider } from '@nhost/react'
import { NhostApolloProvider } from '@nhost/react-apollo'

import i18n from '@/i18n/config'

import '@/styles/globals.css'
import '@/styles/side-menu.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'

// Import FontAwesome CSS to ensure it works correctly
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
// Prevent fontawesome from automatically adding its CSS since we did it manually above
config.autoAddCss = false

const nhost = new NhostClient({
  subdomain: 'local',
  // region: '<Your Nhost project region>'
})

export default function App({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()
  
  useEffect(() => {
    if (locale && i18n.language !== locale) {
      i18n.changeLanguage(locale)
    }
  }, [locale])

  return (
    <NhostApolloProvider nhost={nhost}>
      <NhostProvider nhost={nhost}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </NhostProvider>
    </NhostApolloProvider>
  )
}
