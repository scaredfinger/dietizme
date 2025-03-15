import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import _ from 'lodash'

import { twFocusClass } from '../../utils'

export interface ButtonCloseProps {
  className?: string
  onClick?: () => void
}

export const ButtonClose: React.FC<ButtonCloseProps> = ({
  className = '',
  onClick = _.noop,
}) => {
  return (
    <button
      className={
        `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${className} ` +
        twFocusClass()
      }
      onClick={onClick}
    >
      <span className="sr-only">Close</span>
      <XMarkIcon className="w-5 h-5" />
    </button>
  )
}
