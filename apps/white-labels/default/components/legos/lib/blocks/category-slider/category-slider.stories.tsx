import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { faker } from '@faker-js/faker'

import { CardType, CategorySlider } from './category-slider'

const Story: ComponentMeta<typeof CategorySlider> = {
  component: CategorySlider,
  title: 'CategorySlider',
}
export default Story

const Template: ComponentStory<typeof CategorySlider> = (args) => (
  <CategorySlider {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Categories',
  subHeading: 'Sub Heading',
  categories: Array(10)
    .fill(0)
    .map((_, index) => ({
      id: index.toString(),
      name: faker.lorem.sentence(),
      count: faker.datatype.number(),
      thumbnail: faker.image.imageUrl(320, 240, faker.animal.type(), true),
      taxonomy: 'category',

      href: '#',
    })),
  categoryCardType: CardType.tall,
}
