import React from 'react'

interface Props {
  title: string
  description: string
}

export const SimpleTextBlock: React.FC<Props> = ({ title, description }) => {
  const obj = { __html: description }

  return (
    <div className="listingSection__wrap">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="text-neutral-6000 dark:text-neutral-300">
        <span dangerouslySetInnerHTML={obj} />
      </div>
    </div>
  )
}

export default SimpleTextBlock