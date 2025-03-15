import { useLogger } from '@otiuming/ui-common'
import dynamic from 'next/dynamic'

import { Layout } from '@/components'

import { Props } from './_deps/types'

export { getStaticPaths, getStaticProps } from './_deps/server'

const HomePage = dynamic(() => import('./_deps/components/Home'), {
  loading: () => <p>Loading...</p>,
})

export function App({ organization, domain }: Props) {
  const logger = useLogger()

  logger.debug({
    eventId: 'APP_HOME',
    organization
  })

  return (
    <Layout pageTitle="Home" organization={organization}>
      <HomePage organization={organization} domain={domain} />
    </Layout>
  )
}

export default App
