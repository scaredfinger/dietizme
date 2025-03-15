import React, { FC } from 'react'
import { ButtonPrimary } from '../../atoms'

const imagePng = 'https://via.placeholder.com/1900x960'

const example: Props = {
  image: 'image_1901x960',
  smallTopText: 'Booking tax-free from Chis. platform',
  largeLine1: 'New generation',
  largeLine2: 'of booking',
  buttonText: 'Keep calm & travel on',
}

interface Props {
  className?: string
  image?: string
  smallTopText: string
  largeLine1: string
  largeLine2: string
  buttonText: string
  buttonClick?: () => void
}

export const BigImageHero: FC<Props> = ({
  className = '',
  image,
  smallTopText,
  largeLine1,
  largeLine2,
  buttonText,
  buttonClick,
}) => {
  return (
    <div
      className={`nc-SectionHero3 relative ${className}`}
      data-nc-id="SectionHero3"
    >
      <div className="absolute z-10 inset-x-0 top-[10%] sm:top-[15%] text-center flex flex-col items-center max-w-2xl mx-auto space-y-4 lg:space-y-5 xl:space-y-8">
        <span className="sm:text-lg md:text-xl font-semibold text-neutral-900">
          {smallTopText}
        </span>
        <h2 className="font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl !leading-[115%] ">
          {largeLine1} <br /> {largeLine2}
        </h2>
        <ButtonPrimary
          onClick={buttonClick}
          sizeClass="px-6 py-3 lg:px-8 lg:py-4 rounded-xl"
          fontSize="text-sm sm:text-base lg:text-lg font-medium"
        >
          {buttonText}
        </ButtonPrimary>
      </div>
      <div className="relative aspect-w-1 aspect-h-1 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9 xl:aspect-h-8 ">
        {image ? (
          <img
            className="absolute inset-0 object-cover rounded-xl"
            src={image}
            alt="hero"
          />
        ) : (
          <img
            className="absolute inset-0 object-cover rounded-xl"
            src={imagePng}
            alt="hero"
          />
        )}
      </div>
    </div>
  )
}
