import React, { FC } from 'react'
import { ButtonPrimary } from '../../atoms'

const imagePng = 'https://via.placeholder.com/1000x1030'

const example: Props = {
  title: 'Living la vida',
  subtitle: 'Lorem ipsum dolor sit amet.',
  buttonText: 'Start your search',
  image: '1001x1031.png',
}

interface Props {
  className?: string
  title: string
  subtitle: string
  image?: string
  children?: React.ReactNode
  buttonText: string
  buttonClick?: () => void
}

export const TitleSubTitleRightHero: FC<Props> = ({
  className = '',
  title,
  subtitle,
  image,
  children,
  buttonText,
  buttonClick,
}) => {
  return (
    <div
      className={`nc-SectionHero flex flex-col-reverse lg:flex-col relative ${className}`}
      data-nc-id="SectionHero"
    >
      <div className="flex flex-col lg:flex-row lg:items-center">
        <div className="flex-shrink-0 lg:w-1/2 flex flex-col items-start space-y-8 sm:space-y-10 pb-14 lg:pb-64 xl:pr-14 lg:mr-10 xl:mr-0">
          <h2 className="font-medium text-4xl md:text-5xl xl:text-7xl !leading-[114%] ">
            {title}
          </h2>
          <span className="text-base md:text-lg text-neutral-500 dark:text-neutral-400">
            {subtitle}
          </span>
          <ButtonPrimary onClick={buttonClick}>{buttonText}</ButtonPrimary>
        </div>
        <div className="flex-grow">
          {image ? (
            <img className="w-full" src={image} alt="hero" />
          ) : (
            <img className="w-full" src={imagePng} alt="hero" />
          )}
        </div>
      </div>

      <div className="hidden lg:block z-10 mb-12 lg:mb-0 lg:-mt-40 w-full">
        {children}
      </div>
    </div>
  )
}
