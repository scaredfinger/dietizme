import React, { FC } from 'react'
import _ from 'lodash'
import Link from 'next/link'

import { NcImage } from '../../../atoms'
import { TaxonomyType } from '../../../data-types'

export interface CardCategory4Props {
  className?: string
  taxonomy: TaxonomyType
}

export const Medium: FC<CardCategory4Props> = ({
  className = '',
  taxonomy,
}) => {
  const { name, onClick = _.noop, thumbnail, desc, href="#" } = taxonomy

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nc-CardCategory4 flex flex-col ${className}`}
      data-nc-id="CardCategory4"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-5 aspect-h-4 sm:aspect-h-6 h-0 rounded-2xl overflow-hidden group`}
      >
        <NcImage
          src={thumbnail}
          className="object-cover w-full h-full rounded-2xl"
        />
        <span className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity"></span>
      </div>
      <div className="mt-4 px-2 truncate text-center">
        <h2
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate`}
        >
          {name}
        </h2>
        <span
          className={`block mt-2 text-sm text-neutral-6000 dark:text-neutral-400`}
        >
          {desc}
        </span>
      </div>
    </Link>
  )
}
