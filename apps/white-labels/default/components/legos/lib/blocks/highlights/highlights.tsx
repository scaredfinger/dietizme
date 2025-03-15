import React from 'react'
import { NcImage } from '../../atoms'

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1611776702479-79cf8fafadea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw0MDIzMTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzQ3MzQ5NjI&ixlib=rb-4.0.3&q=80&w=1179&h=1032'

interface HighlightPoint {
  title: string
  description: string
}

export interface SectionOurFeaturesProps {
  className?: string
  image?: string
  points: HighlightPoint[]
  type?: 'type1' | 'type2'
  subtitle: string
  title: string
}

export const Highlights: React.FC<SectionOurFeaturesProps> = ({
  className = 'lg:py-6',
  image = DEFAULT_IMAGE,
  points,
  type = 'type1',
  subtitle = 'Bennefits',
  title = 'Highlights',
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === 'type1' ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <NcImage src={image} className="rounded-xl" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === 'type1' ? 'lg:pl-16' : 'lg:pr-16'
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          {subtitle}
        </span>
        <h2 className="font-semibold text-4xl mt-5">{title}</h2>

        <ul className="space-y-10 mt-16">
          {points.map(({ title, description }, i) => (
            <li className="space-y-4" key={`${i}-${title}`}>
              <span className="block text-xl font-semibold">{title}</span>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {description}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
