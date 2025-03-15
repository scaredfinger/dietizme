import React, { ButtonHTMLAttributes, FC } from 'react'
import Link from 'next/link'
import _ from 'lodash'

import { twFocusClass } from '../../utils'
import { Loading } from '../images'

export interface ButtonProps {
  className?: string
  translate?: string
  sizeClass?: string
  fontSize?: string
  //
  loading?: boolean
  disabled?: boolean
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  href?: string
  targetBlank?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export const Button: FC<ButtonProps> = ({
  className = 'text-neutral-700 dark:text-neutral-200',
  translate = '',
  sizeClass = 'px-4 py-3 sm:px-6',
  fontSize = 'text-sm sm:text-base font-medium',
  disabled = false,
  href,
  children,
  targetBlank,
  type,
  loading,
  onClick = _.noop,
}) => {
  const CLASSES =
    `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${fontSize} ${sizeClass} ${translate} ${className}` +
    twFocusClass(true)

  if (href) {
    return (
      <Link
        aria-disabled={disabled}
        href={href || '#'}
        target={targetBlank ? '_blank' : undefined}
        className={`${CLASSES} `}
        onClick={onClick}
        rel="noopener noreferrer"
      >
        {children || `This is Link`}
      </Link>
    )
  }

  return (
    <button
      disabled={disabled || loading}
      className={`${CLASSES}`}
      onClick={onClick}
      type={type}
    >
      {loading && <Loading />}
      {children || `This is Button`}
    </button>
  )
}
