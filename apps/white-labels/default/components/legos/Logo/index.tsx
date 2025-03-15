import React from 'react'

import { useRoutes } from '@/components/use-routes'

import LogoSvgLight from './components/LogoSvgLight'
import LogoSvg from './components/LogoSvg'

export interface LogoProps {
  image?: string
  imageLight?: string
  className?: string
}

export const Logo: React.FC<LogoProps> = ({
  image,
  imageLight,
  className = 'w-24',
}) => {
  const { home } = useRoutes()

  return (
    <a
      href={home()}
      className={`ttnc-logo inline-block text-primary-6000 focus:outline-none focus:ring-0 ${className}`}
    >
      <LogoSvg image={image} />
      <LogoSvgLight image={imageLight} />
    </a>
  )
}
