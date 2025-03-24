import type { AppProps } from 'next/app'
import { AuthProvider } from '@/contexts/auth-context'

import { NhostClient, NhostProvider } from '@nhost/react'
import { NhostApolloProvider } from '@nhost/react-apollo'

import '@/styles/globals.css'

const nhost = new NhostClient({
  subdomain: 'local',
  // region: '<Your Nhost project region>'
})

export default function App({ Component, pageProps }: AppProps) {
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
