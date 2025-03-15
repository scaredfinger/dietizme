import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { IntlProvider } from 'react-intl'

import { Booking_Question_Type_Enum } from '@otiuming/domain-omnidata-types'
import { flattenObject } from '@otiuming/ui-i18n'

import { PropsOf } from '@/components/legos/lib/utils/propsOf'
import en from '@/translations/en.json'

import BookingQuestion from './BookingQuestion'

type Props = PropsOf<typeof BookingQuestion>

const Template: React.FC<Props> = (args) => (
  <IntlProvider locale="en" messages={flattenObject(en)}>
    <BookingQuestion {...args} />
  </IntlProvider>
)

const meta: Meta<Props> = {
  title: 'Components/BookingQuestion',
  component: Template,
  args: {
    question: {
      id: '1',
      type: Booking_Question_Type_Enum.FreeText,
      text: { en: 'What is your name?' },
      value: { multiline: false },
    },
    value: '',
    onChange: () => {},
  },
}

export default meta

type Story = StoryObj<Props>

export const FreeText: Story = {
  args: {
    question: {
      id: '1',
      type: Booking_Question_Type_Enum.FreeText,
      text: { en: 'What is your name?' },
      value: { multiline: false },
    },
    value: 'John Doe',
  },
}

export const Numeric: Story = {
  args: {
    question: {
      id: '2',
      type: Booking_Question_Type_Enum.Numeric,
      text: { en: 'How many guests?' },
      value: { min: 1, max: 10, step: 1 },
    },
    value: 2,
  },
}

export const Select: Story = {
  args: {
    question: {
      id: '3',
      type: Booking_Question_Type_Enum.Select,
      text: { en: 'Select your country' },
      value: {
        options: [
          { value: 'us', en: 'United States' },
          { value: 'ca', en: 'Canada' },
          { value: 'uk', en: 'United Kingdom' },
        ],
      },
    },
    value: 'us',
  },
}
