import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { DateTime } from 'luxon'

import { dateValue } from '@otiuming/domain-data-types'

import { PropsOf } from '../utils'

import { DatesRangeInput } from './date-range-input'

type Props = PropsOf<typeof DatesRangeInput>

const Template = (args: Props) => (
  <div className="grid grid-cols-3 gap-4">
    <div>
      <DatesRangeInput {...args} />
    </div>
    <div></div>
  </div>
)

const meta: Meta<typeof DatesRangeInput> = {
  component: Template,
  title: 'Inputs/DateRange',
}
export default meta
type Story = StoryObj<typeof DatesRangeInput>

export const Primary: Story = {
  args: {
    value: {
      from: dateValue(DateTime.utc().plus({ days: 4 })),
      to: dateValue(DateTime.utc().plus({ days: 5 })),
    },
  },
}
