import React from 'react'
import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import _ from 'lodash'
import { IntlProvider } from 'react-intl'

import { PropsOf } from '../../utils'

import { SimpleSearchBox } from './simple'

type Props = PropsOf<typeof SimpleSearchBox>

const Template = (args: Props) => (
  <div className="grid grid-cols-2 gap-4">
    <div>
      <IntlProvider locale="en">
        <SimpleSearchBox {...args} />
      </IntlProvider>
    </div>
    <div></div>
  </div>
)

const meta: Meta<typeof SimpleSearchBox> = {
  component: Template,
  title: 'Blocks/Search/SimpleSearchBox',
  args: {
    formatCurrency: (amount: number) => `$${amount}`,
  },
  argTypes: {
    formatCurrency: {
      type: 'function',
    },
  },
}
export default meta

type Story = StoryObj<typeof Template>
export const Primary: Story = {}
