import { FC, useEffect, useMemo, useState } from 'react'

import { BackgroundSection, CardInfo, CardsGrid } from '@/components/legos'
import { useRoutes } from '@/components/use-routes'

import { GroupListItem, ProductListItem } from './ProductList.types'
import { extractFeatures } from './components/features'
import { Organization_By_Domain_Minimal } from '@/data-access/queries/get-organization'
import { useFormatCurrency } from '@/components/tools/use-format-currency'
import { useTranslation } from '@otiuming/ui-i18n'

interface Props {
  organization: Organization_By_Domain_Minimal
  products: ProductListItem[]
  groups: GroupListItem[]
  push: (url: string) => Promise<boolean>
  makeImageUrl: (fileId: string) => string
}

export const ProductList: FC<Props> = ({
  products,
  groups,
  organization,
  push,
  makeImageUrl,
}) => {
  const { t } = useTranslation()
  const { productDetails } = useRoutes()
  const { formatCurrency } = useFormatCurrency()

  const [selectedProductGroup, setSelectedProductGroup] = useState<string>()
  const [cards, setCards] = useState<CardInfo[]>([])

  const { business_model: businessModel } = organization

  const tabs = useMemo(() => groups.map((g) => g.name.value), [groups])
  const productsByGroupName = useMemo(
    () =>
      groups.reduce(
        (acc, g) => ({
          ...acc,
          [g.name.value]: g.products.map((p) => p.product_id),
        }),
        {},
      ),
    [groups],
  )
  const allCards: CardInfo[] = useMemo(
    () =>
      products.map((product) => ({
        id: product.id,
        title: product.name.value,
        subtitle: product.headline.value,
        galleryImgs: product.gallery.items.map((i) => makeImageUrl(i.file_id)),
        price: t('fields.from.format', {
          value: formatCurrency(product.price_from, { hideDecimals: true }),
        }),
        onClick: () => push(productDetails(product)),
        href: productDetails(product),
        features: extractFeatures({
          businessModel: product.business_model ?? businessModel,
          product,
          maxFeatures: 3
        }),
      })),
    [
      businessModel,
      formatCurrency,
      makeImageUrl,
      productDetails,
      products,
      push,
      t,
    ],
  )

  useEffect(() => {
    setCards(allCards)
  }, [])

  function onGroupSelected(name: string) {
    setSelectedProductGroup(name)

    if (!name) {
      setCards(allCards)
      return
    }
    const group = productsByGroupName[name]
    const cardsInGroup = allCards.filter((c) => group.includes(c.id))
    setCards(cardsInGroup)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <div className="relative py-16">
          <BackgroundSection />
          <CardsGrid
            activeTab={selectedProductGroup}
            tabs={tabs}
            cards={cards}
            onTabClick={onGroupSelected}
            heading={t('sections.our-products.title')}
            subHeading={t('sections.our-products.subtitle')}
          />
        </div>
      </div>
    </div>
  )
}

export default ProductList
