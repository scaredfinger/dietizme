import type { Meta, StoryObj } from '@storybook/react'

import { ButtonCircle } from './circle'

const meta: Meta<typeof ButtonCircle> = {
  component: ButtonCircle,
  title: 'Atoms/Buttons/Circle',
}
export default meta
type Story = StoryObj<typeof ButtonCircle>

export const Primary: Story = {
  args: {},
}
