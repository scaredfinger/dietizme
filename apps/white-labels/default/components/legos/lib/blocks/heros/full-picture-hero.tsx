import React, { FC } from 'react'
import { ButtonPrimary } from '../../atoms'
import _ from 'lodash'
import { useTranslation } from '@otiuming/ui-i18n'

interface SectionHero3Props {
  className?: string
  image?: string
  title?: string
  subtitle?: string
  onClick?: () => void
}

const defaultImg =
  'https://images.unsplash.com/photo-1586611292717-f828b167408c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'

export const FullPictureHero: FC<SectionHero3Props> = ({
  title = 'Hotel Ipanema',
  subtitle = 'Rio de Janeiro, Brasil',
  className = '',
  image = defaultImg,
  onClick = _.noop,
}) => {
  const { t } = useTranslation()

  return (
    <div
      className={`nc-SectionHero3 relative ${className} flex`}
      data-nc-id="SectionHero3"
    >
      <div className="absolute z-10 inset-x-0 top-[5%] sm:top-[10%] text-center flex flex-col items-center max-w-3xl mx-auto space-y-2 lg:space-y-3 xl:space-y-4 p-16 text-black bg-gray-500/60 rounded-2xl">
        <span className="sm:text-l md:text-xl font-semibold p-2">
          {subtitle}
        </span>
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%]">
          {title}
        </h2>
        <ButtonPrimary
          sizeClass="px-6 py-6 lg:px-8 lg:py-4 rounded-xl"
          fontSize="text-sm sm:text-base lg:text-lg font-medium"
          onClick={onClick}
        >
          {t('actions.start-your-search-now.title')}
        </ButtonPrimary>
      </div>
      <div
        className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 "
        style={{ width: '100%' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 object-cover rounded-xl"
          src={image}
          alt="hero"
        />
      </div>
    </div>
  )
}
