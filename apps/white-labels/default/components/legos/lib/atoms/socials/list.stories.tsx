import type { StoryObj, Meta } from '@storybook/react'

import { SocialsList1 } from './list'

const meta: Meta<typeof SocialsList1> = {
  component: SocialsList1,
  title: 'Socials List',
}
export default meta

type Story = StoryObj<typeof SocialsList1>
export const Primary: Story = {
  args: {},
}
