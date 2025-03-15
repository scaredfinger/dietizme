import { useMemo } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { useLogger } from '@otiuming/ui-common'
import { useShoppingCart } from '@otiuming/ui-shopping-cart'
import { ReserveArguments } from '@otiuming/ui-white-labels-view-models'

import { useRoutes } from '@/components/use-routes'
import { Loader } from '@/components/legos/lib/atoms/layout/loader'
import { Layout } from '@/components/Layout'
import {
  useImageMediumUrlFunction,
  useImageThumbailUrlFunction,
} from '@/utils'

import { Props, Supplement } from './_deps/types'

export { getStaticPaths, getStaticProps } from './_deps/server'

const ProductPage = dynamic(() => import('./_deps/components/ProductPage'), {
  loading: () => <Loader />,
})

export function Product({ product, organization }: Props) {
  const logger = useLogger()
  logger.info({
    eventId: 'APP_PRODUCT',
    product,
  })

  const shoppingCart = useShoppingCart()

  const { push } = useRouter()

  const { confirm } = useRoutes()

  const makeThumbnailUrl = useImageThumbailUrlFunction()
  const makePublicUrl = useImageMediumUrlFunction()

  const supplementsById = useMemo(
    () =>
      product.supplements
        .map((s) => s.supplement)
        .reduce(
          (acc, supplement) => ({
            ...acc,
            [supplement.id]: supplement
          }),
          {},
        ) as Record<string, Supplement>,
    [product.supplements],
  )

  const handleOnReserve = useMemo(() => {
    return function handleOnReserve(item: ReserveArguments) {
      shoppingCart.replaceItemsWith({
        ...item,
        title: product.name.value,
        description: product.name.value,
        image: makeThumbnailUrl(product.gallery.items[0]?.file_id),
        units: item.units.map((unit) => ({
          supplements: unit.supplements.map((supplement) => {
            const supplementData = supplementsById[supplement.id]

            return {
              ...supplement,
              title: supplementData.name.value,
              description: supplementData.headline.value,
              image: makePublicUrl(supplementData.image_id ?? ''),
            }
          }),
        })),
      })
      push(confirm())
    }
  }, [confirm, makePublicUrl, makeThumbnailUrl, product, push, shoppingCart, supplementsById])

  return (
    <Layout
      pageTitle={product.name.value}
      pageDescription={product.headline.value}
      organization={organization}
    >
      <ProductPage
        product={product}
        organization={organization}
        onReserve={handleOnReserve}
      />
    </Layout>
  )
}

export default Product


