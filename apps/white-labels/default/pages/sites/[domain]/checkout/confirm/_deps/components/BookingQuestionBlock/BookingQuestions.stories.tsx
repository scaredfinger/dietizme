import { IntlProvider } from 'react-intl'
import { Meta, StoryObj } from '@storybook/react'
import _ from 'lodash'

import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
} from '@otiuming/domain-omnidata-types'
import { dateValue } from '@otiuming/domain-data-types'
import { flattenObject } from '@otiuming/ui-i18n'

import { PropsOf } from '@/components/legos/lib/utils'
import en from '@/translations/en.json'

import BookingQuestions from './BookingQuestions'

type Props = PropsOf<typeof BookingQuestions>

const Template = (args: Props) => (
  <IntlProvider locale="en" messages={flattenObject(en)}>
    <div className='max-width-2'>
      <BookingQuestions {...args} />
    </div>
  </IntlProvider>
)

const meta: Meta<typeof BookingQuestions> = {
  title: 'CheckOut/Components/BookingQuestions',
  component: Template,
  args: {
    questions: [
      {
        id: '1',
        scope: Booking_Question_Scope_Enum.PerBooking,
        type: Booking_Question_Type_Enum.FreeText,
        text: {
          en: 'Booking Question 1',
        },
        value: { multiline: false },
      },
      {
        id: '2',
        scope: Booking_Question_Scope_Enum.PerBooking,
        type: Booking_Question_Type_Enum.Numeric,
        text: { en: 'Booking Question 2' },
        value: { min: 1, max: 10, step: 1 },
      },
      {
        id: '3',
        scope: Booking_Question_Scope_Enum.PerProduct,
        type: Booking_Question_Type_Enum.Select,
        text: { en: 'Product Question 1' },
        value: {
          options: [
            { value: 'us', en: 'United States' },
            { value: 'ca', en: 'Canada' },
            { value: 'uk', en: 'United Kingdom' },
          ],
        },
      },
      {
        id: '4',
        scope: Booking_Question_Scope_Enum.PerProduct,
        type: Booking_Question_Type_Enum.FreeText,
        text: { en: 'Product Question 2' },
        value: { multiline: true },
      },
      {
        id: '5',
        scope: Booking_Question_Scope_Enum.PerPax,
        type: Booking_Question_Type_Enum.Numeric,
        text: { en: 'Pax Question 1' },
        value: { min: 1, max: 10, step: 1 },
      },
      {
        id: '6',
        scope: Booking_Question_Scope_Enum.PerPax,
        type: Booking_Question_Type_Enum.Select,
        text: { en: 'Pax Question 2' },
        value: {
          options: [
            { value: 'us', en: 'United States' },
            { value: 'ca', en: 'Canada' },
            { value: 'uk', en: 'United Kingdom' },
          ],
        },
      },
    ],
    items: [
      {
        title: 'Time Slot Item',
        explainedSearchParams: {
          dateTimeSelection: {
            type: 'time-slot-selection',
            date: dateValue('2022-01-01'),
            timeSlot: { start: '10:00', end: '12:00' },
          },
          unitSelection: {
            type: 'per-pax',
            units: [
              {
                guests: { adults: 2, children: 1, infants: 0 },
              },
            ],
          },
        },
      },
      {
        title: 'Daily Selection Item',
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
      },
    ],
    answers: {
      booking: {},
      products: [
        { productAnswers: {}, adults: [{}], children: [{}] },
        { productAnswers: {}, adults: [], children: [] },
      ],
    },
    onChange: _.noop,
  },
  argTypes: {
    onChange: { action: 'onChange' },
  }
}

export default meta

type Story = StoryObj<typeof BookingQuestions>

export const Default: Story = {}
