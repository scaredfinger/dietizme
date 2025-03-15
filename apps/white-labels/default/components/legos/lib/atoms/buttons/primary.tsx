import React from 'react'

import { Button, ButtonProps } from './base'

type Props = ButtonProps

export const ButtonPrimary: React.FC<Props> = ({ className = '', ...args }) => {
  return (
    <Button
      className={`ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 ${className}`}
      {...args}
    />
  )
}

export default ButtonPrimary
