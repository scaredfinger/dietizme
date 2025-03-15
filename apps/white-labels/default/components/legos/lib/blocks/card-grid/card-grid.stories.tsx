import React from 'react'
import type { ComponentStory, ComponentMeta } from '@storybook/react'

import { faker } from '@faker-js/faker'

import { CardsGrid } from './card-grid'
import { random } from 'lodash'
import { randomInt } from 'crypto'

const Story: ComponentMeta<typeof CardsGrid> = {
  component: CardsGrid,
  title: 'CardsGrid',
}
export default Story

const Template: ComponentStory<typeof CardsGrid> = (args) => (
  <CardsGrid {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  heading: 'Cards grid',
  subHeading: faker.lorem.sentence(),
  cards: Array(10)
    .fill(0)
    .map((_, index) => ({
      id: faker.random.alphaNumeric(),
      title: faker.lorem.sentence(),
      price: faker.finance.amount(),
      galleryImgs: Array(7)
        .fill(0)
        .map(() => {
          return faker.image.imageUrl(320, 240, faker.animal.type(), true)
        }),
      onClick: _.noop,
    })),
}
