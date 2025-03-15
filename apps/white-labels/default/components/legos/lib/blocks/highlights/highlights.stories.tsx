import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import { Highlights } from './highlights'

const Story: ComponentMeta<typeof Highlights> = {
  component: Highlights,
  title: 'Highlights',
}
export default Story

const Template: ComponentStory<typeof Highlights> = (args) => (
  <Highlights {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  points: [
    {
      description:
        'With a free listing, you can advertise your rental with no upfront costs',
      title: 'Cost-effective advertising',
    },
    {
      description:
        'A Holiday Lettings listing gives you a secure and easy way to take bookings and payments online',
      title: 'Secure and simple',
    },
    {
      description:
        'Millions of people are searching for unique places to stay around the world',
      title: 'Reach millions with Chisfis',
    },
  ],
}
