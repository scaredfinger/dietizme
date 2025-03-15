import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

import { useTranslation } from '@otiuming/ui-i18n'
import { useLogger } from '@otiuming/ui-common'

import { Layout } from '@/components/Layout'
import { useImageMediumUrlFunction } from '@/utils'
import { Props } from './_deps/types'

const ProductList: any = dynamic(() => import('@/components/blocks/product-list/ProductList'), {
  loading: () => <p>Loading...</p>,
})

export { getStaticPaths, getStaticProps } from './_deps/server'

export function App({ organization, products, groups }: Props) {
  const logger = useLogger()
  logger.debug({
    eventId: 'APP_PRODUCTS',
  })

  const { t } = useTranslation()
  const { push } = useRouter()
  const makeImageUrl = useImageMediumUrlFunction()

  return (
    <Layout pageTitle={t('pages.products.title')} organization={organization}>
      <ProductList
        groups={groups}
        products={products}
        organization={organization}
        push={push}
        t={t}
        makeImageUrl={makeImageUrl}
      />
    </Layout>
  )
}

export default App
