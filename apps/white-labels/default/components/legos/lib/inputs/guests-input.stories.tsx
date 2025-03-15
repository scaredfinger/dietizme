import type { Meta, StoryObj } from '@storybook/react'
import { GuestsInput } from './guests-input'

const meta: Meta<typeof GuestsInput> = {
  component: GuestsInput,
  title: 'Inputs/Guests',
}
export default meta
type Story = StoryObj<typeof GuestsInput>

export const Primary: Story = {
  args: {
    value: {
      adults: 2,
      children: 2,
      infants: 2,
    },
  },
}
