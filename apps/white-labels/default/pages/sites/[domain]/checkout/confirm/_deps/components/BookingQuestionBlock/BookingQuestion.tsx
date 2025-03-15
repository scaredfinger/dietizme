import _ from 'lodash'
import React, { FC } from 'react'

import { Booking_Question_Type_Enum } from '@otiuming/domain-omnidata-types'
import { useTranslation } from '@otiuming/ui-i18n'

import { Label, Input } from '@/components/legos'
import { DropDown } from '@/components/legos/lib/inputs/drop-down'

import { BookingQuestionQuestion } from './BookingQuestion.types'
import {
  NumericQuestionValue,
  SelectQuestionValue,
} from '@otiuming/domain-booking-questions'

type MyBookingQuestion = Omit<BookingQuestionQuestion, 'scope'>

interface BookingQuestionProps {
  question: MyBookingQuestion

  value: unknown
  onChange: (value: unknown) => void
}

const BookingQuestion: FC<BookingQuestionProps> = ({
  value,
  question,
  onChange,
}) => {
  const { t, locale } = useTranslation() 

  const label = question.text[locale]

  const renderInput = () => {
    if (question.type === Booking_Question_Type_Enum.FreeText) {
      return (
        <Input
          onChange={(e) => onChange(e.target.value)}
          value={value as string}
        />
      )
    }

    if (question.type === Booking_Question_Type_Enum.Numeric) {
      const questionValue = question.value as NumericQuestionValue

      return (
        <Input
          type="number"
          min={questionValue.min}
          max={questionValue.max}
          step={questionValue.step}
          value={value as number}
          onChange={(e) => onChange(e.target.value)}
        />
      )
    }

    if (question.type === Booking_Question_Type_Enum.Select) {
      const questionValue = question.value as SelectQuestionValue
      const options = questionValue.options.reduce(
        (acc, item) => ({ ...acc, [item.value.toString()]: item[locale] }),
        {},
      )

      return (
        <DropDown
          options={options}
          texts={{ placeholder: t('actions.please-select.title') }}
          value={value as string}
          onChange={onChange}
        ></DropDown>
      )
    }

    return <></>
  }

  return (
    <div className="mt-6">
      <div className="space-y-5">
        <div className="space-y-1 full-width">
          <Label>{label}</Label>
          <div></div>
          {renderInput()}
        </div>
      </div>
    </div>
  )
}

export default BookingQuestion
