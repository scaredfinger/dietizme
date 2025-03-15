import type { Meta, StoryObj } from '@storybook/react'

import { ButtonSecondary } from './secondary'

const meta: Meta<typeof ButtonSecondary> = {
  component: ButtonSecondary,
  title: 'Atoms/Buttons/Secondary',
}
export default meta
type Story = StoryObj<typeof ButtonSecondary>

export const Primary = {
  args: {},
}
