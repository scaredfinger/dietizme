import React, { FC } from 'react'

import { NcImage } from '../../atoms'

const defaultImg =
  'https://images.unsplash.com/photo-1609601540898-52ca92508901?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDIzMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQ3MzQ3MzQ&ixlib=rb-4.0.3&q=80&w=1441&h=1251'

interface Props {
  className?: string
  line1: string
  line2: string
  image?: string
  children?: React.ReactNode
}

export const TwoShortLinesRightHero: FC<Props> = ({
  className = '',
  line1,
  line2,
  children,
  image,
}) => {
  return (
    <div
      className={`nc-SectionHero2 relative ${className}`}
      data-nc-id="SectionHero2"
    >
      <div className="relative py-14 lg:py-20">
        <div className="relative inline-flex">
          <div className="w-screen inset-y-0 absolute bg-primary-500/75 -m-6 max-w-3xl"></div>
          <div className="relative max-w-3xl inline-flex flex-shrink-0 flex-col items-start py-16 sm:py-16 lg:py-16 space-y-8 sm:space-y-10 text-white">
            {children ? (
              children
            ) : (
              <h2 className="font-semibold text-4xl md:text-5xl xl:text-7xl !leading-[110%]">
                {line1} <br /> {line2}
              </h2>
            )}
          </div>
        </div>
        <div className="hidden lg:block lg:mt-20 w-full">{children}</div>
      </div>
      <div className="inset-y-0 right-0 flex-grow">
        {image ? (
          <NcImage
            className="inset-0 object-cover w-full h-full"
            src={image}
            alt="hero"
          />
        ) : (
          <NcImage
            className="inset-0 object-cover w-full h-full"
            src={defaultImg}
            alt="hero"
          />
        )}
      </div>
    </div>
  )
}
