import React, { FC, ReactNode } from 'react'
import _ from 'lodash'

import HeaderFilter from './header-filter'
import CardH from './card-h'
import { CardInfo } from '../../data-types'

interface Props {
  cards: CardInfo[]
  gridClass?: string
  heading?: ReactNode
  subHeading?: ReactNode
  tabs?: string[]
  onTabClick?: (tab: string) => void
  activeTab?: string
}

export const CardsGrid: FC<Props> = ({
  cards,
  gridClass = '',
  heading = 'Our products',
  subHeading = 'We have many products for you to choose from',
  tabs = [],
  activeTab = '',
  onTabClick = _.noop,
}) => {
  const renderCard = (card: CardInfo, index: number) => {
    return <CardH key={index} className="h-full" data={card} />
  }

  return (
    <div className="nc-SectionGridFeatureProperty relative px-6 mx-6">
      <HeaderFilter
        tabActive={activeTab}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
        onClickTab={onTabClick}
      />
      <div
        className={`pt-10 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-1 xl:grid-cols-2 ${gridClass}`}
      >
        {cards?.map(renderCard)}
      </div>
      <div className="flex mt-16 justify-center items-center">
        {/* <ButtonPrimary loading>Show me more</ButtonPrimary> */}
      </div>
    </div>
  )
}

export default CardsGrid