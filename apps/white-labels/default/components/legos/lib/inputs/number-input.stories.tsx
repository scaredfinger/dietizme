import type { Meta, StoryObj } from '@storybook/react'

import { NumberInput } from './number-input'

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: 'Inputs/Number',
}
export default meta
type Story = StoryObj<typeof NumberInput>

export const Primary: Story = {
  args: {},
}
