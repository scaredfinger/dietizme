import React, { useMemo } from 'react'

import { ReserveFunction } from '@otiuming/ui-white-labels-view-models'
import { useTranslation } from '@otiuming/ui-i18n'

import {
  FirstBlock,
  Gallery,
  SimpleTextBlock,
  formatMoney,
  SearchBoxChooser,
} from '@/components/legos'
import { clientConfig } from '@/config'
import {
  useImageMediumUrlFunction,
} from '@/utils'
import { ProductFeatures } from '@/components/legos/lib/blocks/products'
import { Location } from '@/components/legos/lib/blocks/location'

import { Product_Page_Organization, Product_Page_Product } from '../types'

interface Props {
  product: Product_Page_Product
  organization: Product_Page_Organization
  onReserve: ReserveFunction
}

export const ProductPage: React.FC<Props> = ({
  product,
  organization,
  onReserve,
}) => {
  const { t } = useTranslation()

  const makePublicUrl = useImageMediumUrlFunction()

  const business_model = useMemo(() => {
    return product?.business_model ?? organization?.business_model
  }, [organization?.business_model, product?.business_model])

  const lowerPart = useMemo(() => {
    return (
      <div className="flex flex-wrap space-x-4">
        <ProductFeatures
          product={product}
          businessModel={business_model}
        />
      </div>
    )
  }, [business_model, product])

  return (
    <div id="product-details">
      <div className="nc-HomePage relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
          <Gallery
            urls={product.gallery.items.map((i) => makePublicUrl(i.file_id))}
          />
        </div>
      </div>

      <main className="container relative z-10 mt-11 flex flex-col lg:flex-row pb-10">
        <div className="w-full lg:w-3/5 xl:w-2/3 space-y-8 lg:space-y-10 lg:pr-10">
          <FirstBlock
            title={product.name.value}
            subtitle={product.headline.value}
            lowerPart={lowerPart}
          />

          <div className="lg:hidden">
            <SearchBoxChooser
              formatCurrency={formatMoney}
              productId={product.id}
              businessModel={business_model}
              rateConfiguration={product?.rates[0].configuration}
              searchEngineUrl={clientConfig.searchEngine}
              onReserve={onReserve}
            />
          </div>

          <SimpleTextBlock
            title={t('sections.description.title')}
            description={product.description.value}
          />

          {
            product.place && (
              <Location
                address={product.place.name}
                latitude={product.place.latitude}
                longitude={product.place.longitude}
                mapboxToken={clientConfig.maps.mapboxToken}
              />
            )
          }
        </div>

        <div className="hidden lg:block lg:w-2/5 xl:w-1/3 flex-grow mt-14 lg:mt-0">
          <div className="sticky top-28">
            <SearchBoxChooser
              formatCurrency={formatMoney}
              productId={product.id}
              businessModel={business_model}
              rateConfiguration={product?.rates[0].configuration}
              searchEngineUrl={clientConfig.searchEngine}
              onReserve={onReserve}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default ProductPage