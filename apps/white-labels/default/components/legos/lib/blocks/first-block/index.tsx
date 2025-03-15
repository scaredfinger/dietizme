import React from 'react'

const Noop = () => <></>

interface Props {
  title: string
  subtitle: string
  lowerPart?: React.ReactNode
}

export const FirstBlock: React.FC<Props> = ({
  title,
  subtitle,
  lowerPart
}) => {
  return (
    <div className="listingSection__wrap !space-y-6">
      {/* 1 */}
      <div className="flex justify-between items-center"></div>

      {/* 2 */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
        {title}
      </h2>

      {/* 3 */}
      <div className="flex items-center space-x-4">
        <span className="ml-1">{subtitle}</span>
      </div>

      {/* lowerPart */}
      { lowerPart && (
        <>
        <div className="w-full border-b border-neutral-100 dark:border-neutral-700"></div>
        <div className="flex items-center space-x-4">
          {lowerPart}
        </div>
        </>
      ) }
    </div>
  )
}
