import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { faker } from '@faker-js/faker'

import { Gallery } from './gallery'

const Story: ComponentMeta<typeof Gallery> = {
  component: Gallery,
  title: 'Gallery',
}
export default Story

const Template: ComponentStory<typeof Gallery> = (args) => <Gallery {...args} />

export const Primary = Template.bind({})
Primary.args = {
  urls: Array(10)
    .fill(0)
    .map((_, index) =>
      faker.image.imageUrl(320, 240, faker.animal.type(), true),
    ),
}
