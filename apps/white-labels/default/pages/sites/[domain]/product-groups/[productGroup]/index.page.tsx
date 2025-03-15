import dynamic from 'next/dynamic'

import { useTranslation } from '@otiuming/ui-i18n'

import { Layout } from '@/components/Layout'
import { Loader } from '@/components/legos/lib/atoms/layout/loader'

import {
  CardInfo,
} from '@/components/legos/lib/data-types'
import {
  useImageMediumUrlFunction,
  useImageThumbailUrlFunction,
} from '@/utils'

import { useRoutes } from '@/components/use-routes'

import { Props } from './_deps/types'
import { useFormatCurrency } from '@/components/tools/use-format-currency'
export { getStaticPaths, getStaticProps } from './_deps/server'

const CardsGrid = dynamic(
  () => import('@/components/legos/lib/blocks/card-grid/card-grid'),
  {
    loading: () => <Loader/>,
  }
)
const ProductHero = dynamic(
  () => import('@/components/legos/lib/blocks/heros/product-hero'),
  {
    loading: () => <Loader/>,
  }
)
const SimpleTextBlock = dynamic(
  () => import('@/components/legos/lib/blocks/simple-text-block'),
  {
    loading: () => <Loader/>
  }
)
const BackgroundSection = dynamic(
  () => import('@/components/legos/lib/atoms/layout/background-section'),
  {
    loading: () => <Loader/>
  }
)

const ProductGroup: React.FC<Props> = ({
  productGroup,
  organization,
}) => {
  const { t } = useTranslation()
  const { productDetails } = useRoutes()
  const { formatCurrency } = useFormatCurrency()

  const buildPublicUrl = useImageMediumUrlFunction()
  const buildThumbnail = useImageThumbailUrlFunction()

  const products: CardInfo[] = productGroup.products.map((p) => ({
    href: productDetails(p.product),
    id: p.product.id,
    title: p.product.name.value,
    name: p.product.name.value,
    taxonomy: 'category',
    desc: p.product.headline.value,
    price: t('fields.from.format', { value: formatCurrency(p.product.price_from, { hideDecimals: true}) }),
    galleryImgs: p.product.gallery.items.map((i) => buildThumbnail(i.file_id)),
  }))

  return (
    <Layout organization={organization} pageTitle="title">
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <ProductHero
            image={buildPublicUrl(productGroup.image_id)}
            name={productGroup.name.value}
            headline={productGroup.headline.value}
          ></ProductHero>
        </div>
      </div>
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <div className="relative py-16">
            <BackgroundSection />
            <CardsGrid
              cards={products}
              heading={t('sections.our-products.title')}
              subHeading={t('sections.our-products.subtitle')}
            />
          </div>
        </div>
      </div>
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <SimpleTextBlock
            description={productGroup.description.value}
            title={productGroup.name.value}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ProductGroup
