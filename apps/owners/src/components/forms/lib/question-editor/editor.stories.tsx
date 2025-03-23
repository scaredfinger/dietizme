import React, {  } from 'react'
import _ from 'lodash'

import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'

import { Editor } from './single-question-editor'

const Template = (args) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <Editor {...args} />
    </div>
  </div>
)

const meta: Meta<typeof Editor> = {
  component: Template,
  title: 'Forms/Question/Editor',
  args: {},
  argTypes: {},
}
export default meta

type Story = StoryObj<typeof Template>
export const Primary: Story = {}
