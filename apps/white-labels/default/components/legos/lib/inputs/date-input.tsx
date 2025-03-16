import React, { FC, useEffect, useMemo, useState } from 'react'
import { AnchorDirectionShape, SingleDatePicker } from 'react-dates'
import { DateTime } from 'luxon'

import { DateValue, dateValue } from '@otiuming/domain-data-types'

import { useWindowSize, useNcId } from '../hooks'
import { Calendar } from '../atoms'
import { toDateTime } from './transformation'
import { Moment } from 'moment'
import moment from 'moment'

interface Props {
  value: DateValue
  onChange?: (data: DateValue) => void
  className?: string
  fieldClassName?: string
  wrapClassName?: string
  numberOfMonths?: 1 | 2
  anchorDirection?: AnchorDirectionShape
  texts?: {
    date: string
    selectDate: string
  }
}

export const DateInput: FC<Props> = ({
  value,
  onChange,
  anchorDirection,
  className = '',
  texts = {
    date: 'Date',
    selectDate: 'Select Date',
  },
  fieldClassName = '[ nc-hero-field-padding ]',
}) => {
  const [focusedInput, setFocusedInput] = useState(false)
  const [currentValue, setStartDate] = useState<DateValue | null>(value)
  const startDateId = useNcId()

  const windowSize = useWindowSize()

  useEffect(() => {
    setStartDate(value)
  }, [value])

  const handleDateFocusChange = useMemo(
    () =>
      function handleDateFocusChange(arg: { focused: boolean }) {
        setFocusedInput(arg.focused)
      },
    [],
  )

  const handleDateChange = useMemo(
    () =>
      function (date: Moment | null) {
        if (!date) {
          return
        }

        const value = dateValue(date.toISOString())
        setStartDate(value)
        onChange && onChange(value)
      },
    [onChange],
  )

  const renderInputCheckInDate = () => {
    const focused = focusedInput
    return (
      <div
        className={`flex-1 flex relative ${fieldClassName} items-center space-x-3 cursor-pointer ${
          focused ? 'rounded-t-3xl dark:bg-white/5 shadow-lg' : ''
        }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <Calendar />
        </div>
        <div className="flex-grow">
          <span className="block xl:text-lg font-semibold">
            {currentValue 
              ? currentValue.format('dd LLL') 
              : texts.date}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {currentValue ? texts.date : texts.selectDate}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`ExperiencesDateSingleInput relative flex ${className} ${
        focusedInput ? 'nc-date-focusedInput' : 'nc-date-not-focusedInput'
      }`}
    >
      <div className="absolute inset-0 flex">
        <SingleDatePicker
          date={moment(currentValue.toJSON())}
          onDateChange={handleDateChange}
          id={startDateId}
          focused={focusedInput}
          daySize={56}
          // daySize={windowSize.width > 1279 ? 56 : 44}
          orientation={'horizontal'}
          onFocusChange={handleDateFocusChange}
          noBorder
          hideKeyboardShortcutsPanel
          numberOfMonths={1}
          anchorDirection={anchorDirection}
          reopenPickerOnClearDate
        />
      </div>

      {renderInputCheckInDate()}
    </div>
  )
}
