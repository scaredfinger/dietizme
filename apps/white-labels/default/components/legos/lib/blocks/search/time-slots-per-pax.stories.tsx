import React, { useState } from 'react'
import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import _ from 'lodash'

import { PropsOf } from '../../utils'

import './wdyr'

import {
  TimeSlotsPerPaxSearchBox,
  useSearchFunction,
  useTimeSlotViewModel,
} from './time-slots-per-pax'
import { TimeSlotsPerPaxConfiguration} from '@otiuming/domain-rates'

type Props = PropsOf<typeof TimeSlotsPerPaxSearchBox>

const Template = (args: Props) => {
  const [productId] = useState('2840a88d-01f4-42f3-868e-209188f28b54')
  const [configuration] = useState<TimeSlotsPerPaxConfiguration>({
    type: 'time-slots-per-pax',
    startingHours: [9, 12, 14, 15, 16],
    pricePerPerson: 99,
    durationInHours: 3,
  })
  const [searchEngine] = useState('http://localhost:29355')

  const search = useSearchFunction({
    productId,
    searchEngineUrl: searchEngine,
  })

  const viewModel = useTimeSlotViewModel({
    configuration,
    search,
    reserve: _.noop,
    openChooseBookableOptions: _.noop,
    navigateToContactUs: _.noop,
  })

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <IntlProvider locale='en'>
          <TimeSlotsPerPaxSearchBox {...args} viewModel={viewModel} />
        </IntlProvider>
      </div>
      <div></div>
    </div>
  )
}

const meta: Meta<typeof TimeSlotsPerPaxSearchBox> = {
  component: Template,
  title: 'Blocks/Search/TimeSlotsSearchBox',
  args: {
    formatCurrency: (amount: number) => `$${amount}`,
  },
  argTypes: {
    formatCurrency: {
      type: 'function',
    },
    viewModel: {},
  },
}
export default meta

type Story = StoryObj<typeof Template>
export const Primary: Story = {
  args: {},
}
