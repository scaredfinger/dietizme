import React, { FC } from 'react'

const Component: FC<{ children?: JSX.Element, className?: string }> = ({ children = (<></>), className = '' }) => {
  return (
    <div className={className}>
      <div
        className={`
        bg-white dark:bg-white/10 text-theme-gray dark:text-white/60
        py-[20px] px-[25px] overflow-hidden 
        rounded-10 
        relative 
        text-[15px]`}
      >
        {children}
      </div>
    </div>
  )
}

export const SimpleContainer = Component
