import React from 'react'
import { FC, useEffect, useMemo } from 'react'

import { useNcId } from '../../hooks'

import { TaxonomyType } from '../../data-types'

import { Tall, Medium, Short } from './cards'

import { createGlide, NextPrev, Heading } from '../../atoms'

export enum CardType {
  tall = 'TALL',
  medium = 'MEDIUM',
  short = 'SHORT',
}

export enum Type {
  headingLeftControlsRight = 'HEADING_LEFT_CONTROLS_RIGHT',
  allCentered = 'ALL_CENTERED',
}

interface Props {
  className?: string
  itemClassName?: string
  heading?: string
  subHeading?: string
  categories: TaxonomyType[]
  categoryCardType?: CardType
  itemPerRow?: 4 | 5
  type?: Type
  uniqueClassName: string
}

export const CategorySlider: FC<Props> = ({
  heading,
  subHeading,
  className = '',
  itemClassName = '',
  categories,
  itemPerRow = 5,
  categoryCardType = 'tall',
  type = Type.headingLeftControlsRight,
  uniqueClassName,
}) => {
  const uniqueClass =
    'SectionSliderNewCategories__' + uniqueClassName + useNcId()

  const slider = useMemo(() => {
    return createGlide(`.${uniqueClass}`, {
      perView: itemPerRow,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerRow - 1,
        },
        1024: {
          gap: 20,
          perView: itemPerRow - 1,
        },
        768: {
          gap: 20,
          perView: itemPerRow - 2,
        },
        640: {
          gap: 20,
          perView: itemPerRow - 3,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    })
  }, [itemPerRow, uniqueClass])

  useEffect(() => {
    setTimeout(() => {
      slider.mount()
    }, 100)
  }, [slider, uniqueClass, type])

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case CardType.tall:
        return <Tall taxonomy={item} />
      case CardType.medium:
        return <Medium taxonomy={item} />
      case CardType.short:
        return <Short taxonomy={item} />
      default:
        return <Tall taxonomy={item} />
    }
  }

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${uniqueClass} flow-root`}>
        <Heading
          desc={subHeading}
          hasNextPrev={type === Type.headingLeftControlsRight} //{sliderStyle === 'style1'}
          isCenter={type === Type.allCentered} //{sliderStyle === 'style2'}
        >
          {heading && heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={item.id} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>
        {type === Type.allCentered && (
          <NextPrev className="justify-center mt-16" />
        )}
      </div>
    </div>
  )
}
