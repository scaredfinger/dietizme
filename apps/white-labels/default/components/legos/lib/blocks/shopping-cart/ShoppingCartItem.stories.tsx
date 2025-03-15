import type { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { PropsOf } from '@/components/legos/lib/utils/propsOf'
import { dateValue } from '@otiuming/domain-data-types'
import { flattenObject } from '@otiuming/ui-i18n'

import en from '@/translations/en.json'

import ShoppingCartItem from './ShoppingCartItem'

type Props = PropsOf<typeof ShoppingCartItem>

const Template = (args: Props) => (
  <IntlProvider locale="en" messages={flattenObject(en)}>
    <ShoppingCartItem {...args} />
  </IntlProvider>
)

const meta: Meta<Props> = {
  component: Template,
  title: 'Blocks/ShoppingCartItem',
  args: {},
}

export default meta

// Define the time slots story
type Story = StoryObj<typeof Template>
export const WithTimeSlots: Story = {
  args: {
    item: {
      image: 'https://via.placeholder.com/150',
      title: 'Time Slot Item',
      description: 'This item includes a specific time slot selection.',
      price: 150,
      rateId: 'rate-id',
      searchParams: {
        dateRange: {
          from: dateValue('2022-01-01'),
          to: dateValue('2022-01-07'),
        },
        units: [],
      },
      explainedSearchParams: {
        dateTimeSelection: {
          type: 'time-slot-selection',
          date: dateValue('2022-01-01'),
          timeSlot: {
            start: '10:00',
            end: '12:00',
          },
        },
        unitSelection: {
          type: 'per-pax',
          units: [
            {
              guests: {
                adults: 2,
                children: 1,
                infants: 0,
              },
            },
          ],
        },
      },
      units: [],
    },
  },
}

// Define the daily selection story
export const WithDailySelection: Story = {
  args: {
    item: {
      image: 'https://via.placeholder.com/150',
      title: 'Daily Selection Item',
      description: 'This item includes a daily selection range.',
      price: 200,
      rateId: 'rate-id',
      searchParams: {
        dateRange: {
          from: dateValue('2022-01-01'),
          to: dateValue('2022-01-07'),
        },
        units: [],
      },
      explainedSearchParams: {
        dateTimeSelection: {
          type: 'daily-selection',
          dateRange: {
            from: dateValue('2022-01-01'),
            to: dateValue('2022-01-07'),
          },
        },
        unitSelection: {
          type: 'per-resource',
          quantity: 3,
        },
      },
      units: [],
    },
  },
}
