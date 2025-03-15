import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DropDown } from './drop-down'

const meta: Meta<typeof DropDown> = {
  component: DropDown,
  title: 'Inputs/DropDown',
  argTypes: {
    onChange: {
      action: 'onChange',
    },
  },
}
export default meta
type Story = StoryObj<typeof DropDown>

export const Primary: Story = {
  args: {
    options: {
      Economy: 'Economy',
      Business: 'Business',
      Multiple: 'Multiple',
    },
    texts: {
      placeholder: 'Select class',
    },
  },
}
