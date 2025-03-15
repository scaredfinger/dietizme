import React from 'react'
import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import { FC, useEffect, useMemo, MouseEvent } from 'react'
import _ from 'lodash'

import { useNcId } from '../../hooks'
import { NcImage } from '../nc-image'
import { NextPrev } from '../buttons'

import { createGlide } from './glide'

export interface GallerySliderProps {
  className?: string
  galleryImgs: string[]
  ratioClass?: string
  uniqueID: string
  href?: Url
  onClick: () => void
}

export const GallerySlider: FC<GallerySliderProps> = ({
  className = '',
  galleryImgs,
  ratioClass = 'aspect-w-4 aspect-h-3',
  uniqueID = 'uniqueID',
  onClick = _.noop,
  href,
}) => {
  const UNIQUE_CLASS = `gallerySlider__${uniqueID}` + useNcId()

  const MY_GLIDEJS = useMemo(() => {
    return createGlide(`.${UNIQUE_CLASS}`, {
      perView: 1,
      gap: 0,
      keyboard: false,
    })
  }, [UNIQUE_CLASS])

  useEffect(() => {
    setTimeout(() => {
      MY_GLIDEJS.mount()
    }, 10)
  }, [MY_GLIDEJS, UNIQUE_CLASS, galleryImgs])

  const renderDots = () => {
    return (
      <div
        className="glide__bullets flex items-center justify-center absolute bottom-2 left-1/2 transform -translate-x-1/2 space-x-1.5"
        data-glide-el="controls[nav]"
      >
        {galleryImgs.map((_, i) => (
          <button
            className="glide__bullet w-1.5 h-1.5 rounded-full bg-neutral-300"
            key={i}
            data-glide-dir={`=${i}`}
          />
        ))}
      </div>
    )
  }

  function handleClick(e: MouseEvent<unknown>) {
    e.preventDefault()
    onClick()
  }

  const renderSliderGallery = () => {
    return (
      <div className={`${UNIQUE_CLASS} relative group overflow-hidden`}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {galleryImgs.map((item, index) => (
              <li key={index} className="glide__slide">
                {href && (
                  <Link href={href} className={`block ${ratioClass}`}>
                    <NcImage src={item} />
                  </Link>
                )}
                {!href && (
                  <a
                    href="#"
                    onClick={handleClick}
                    className={`block ${ratioClass}`}
                  >
                    <NcImage src={item} />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* DOTS */}
        <div className="absolute -bottom-4 inset-x-0 h-10 bg-gradient-to-t from-neutral-900"></div>
        {renderDots()}

        {/* NAV */}
        <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity flex top-1/2 transform -translate-y-1/2 inset-x-2 justify-between">
          <NextPrev className="w-full justify-between" btnClassName="w-8 h-8" />
        </div>
      </div>
    )
  }

  return (
    <div className={`nc-GallerySlider ${className}`} data-nc-id="GallerySlider">
      {renderSliderGallery()}
    </div>
  )
}
