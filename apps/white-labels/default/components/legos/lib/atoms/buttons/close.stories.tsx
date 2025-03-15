import type { Meta, StoryObj } from '@storybook/react'

import { ButtonClose } from './close'

const meta: Meta<typeof ButtonClose> = {
  component: ButtonClose,
  title: 'Atoms/Buttons/Close',
}
export default meta
type Story = StoryObj<typeof ButtonClose>

export const Primary: Story = {
  args: {},
}
