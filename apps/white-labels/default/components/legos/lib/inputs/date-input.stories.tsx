import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { PropsOf } from '../utils'
import { DateInput } from './date-input'

type Props = PropsOf<typeof DateInput>

const Template = (args: Props) => (
  <div className="grid grid-cols-3 gap-4">
    <div>
      <DateInput {...args} />
    </div>
    <div></div>
  </div>
)

const meta: Meta<typeof DateInput> = {
  component: Template,
  title: 'Inputs/Date',
}
export default meta
type Story = StoryObj<typeof DateInput>

export const Primary: Story = {
  args: {
    value: null,
  },
}
