import React, { useMemo } from 'react'
import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import _ from 'lodash'
import { IntlProvider } from 'react-intl'

import { PropsOf } from '../../utils'

import { SimpleSearchBox } from './simple'
import { DailyPerProductSearchBox, useDailyPerResourceViewModel } from './daily-per-resource'
import {
  FutureResult, SearchFunction,
} from '@otiuming/ui-white-labels-view-models'
import { Rate, RateOnlyResponse, SearchParams } from '@otiuming/domain-search'
import { DailyPerResourceConfiguration } from '@otiuming/domain-rates'

type Props = PropsOf<typeof SimpleSearchBox>

const Template = (args: Props) => {
  const searchFunction: SearchFunction = useMemo(() => (
    args: SearchParams,
  ) => {
    const promise = (async () => {
      await new Promise((resolve) => setTimeout(resolve, 700))
      return [
        {
          id: 'rate-1',
          units: args.units,
        } as Rate,
      ] as RateOnlyResponse
    })()
    return FutureResult.fromPromise(promise)
  }, [])

  const configuration = useMemo<DailyPerResourceConfiguration>(() => ({
    type: 'daily-per-resource',
    pricePerResource: 10,
    maxResources: 3
  }), [])

  const viewModel = useDailyPerResourceViewModel({
    configuration,
    reserve: _.noop,
    search: searchFunction,
    openChooseOptions: _.noop,
    navigateToContactUs: _.noop,
  })

  console.log('RENDERED')

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <IntlProvider locale="en">
          <DailyPerProductSearchBox {...args} viewModel={viewModel} />
        </IntlProvider>
      </div>
      <div></div>
    </div>
  )
}

const meta: Meta<typeof SimpleSearchBox> = {
  component: Template,
  title: 'Blocks/Search/DailyPerResource',
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
