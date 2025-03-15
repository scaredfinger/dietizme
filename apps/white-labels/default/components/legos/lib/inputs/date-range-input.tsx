import React, { FC, useEffect, useState } from 'react'
import {
  AnchorDirectionShape,
  DateRangePicker,
  FocusedInputShape,
} from 'react-dates'
import { DateTime } from 'luxon'

import { DateRange, DateValue, dateValue } from '@otiuming/domain-data-types'

import { useWindowSize, useNcId } from '../hooks'
import { Calendar } from '../atoms'
import { toDateTime } from './transformation'

interface Props {
  value: DateRange
  focus?: FocusedInputShape | null
  onChange?: (data: DateRange) => void
  className?: string
  fieldClassName?: string
  wrapClassName?: string
  numberOfMonths?: 1 | 2
  anchorDirection?: AnchorDirectionShape
  texts?: {
    startDate: string
    endDate: string
    addStartDate: string
    addEndDate: string
  }
}

export const DatesRangeInput: FC<Props> = ({
  value,
  onChange,
  focus = null,
  className = '[ lg:nc-flex-2 ]',
  fieldClassName = '[ nc-hero-field-padding ]',
  wrapClassName = '',
  numberOfMonths,
  anchorDirection,
  texts: {
    startDate: startDateText,
    endDate: endDateText,
    addStartDate: addStartDateText,
    addEndDate: addEndDateText,
  } = {
    startDate: 'Check in',
    endDate: 'Check out',
    addStartDate: 'Add date',
    addEndDate: 'Add date',
  },
}) => {
  const [currentFocusedInput, setCurrentFocusedInput] = useState(focus)
  const [currentValue, setCurrentValue] = useState(value)
  const startDateId = useNcId()
  const endDateId = useNcId()
  const windowSize = useWindowSize()

  useEffect(() => {
    setCurrentValue(value)
  }, [value])

  useEffect(() => {
    setCurrentFocusedInput(focus)
  }, [focus])

  const handleDateFocusChange = (focus: FocusedInputShape | null) => {
    setCurrentFocusedInput(focus)
  }

  const handleDatesChange = (newDateRange: {
    startDate: DateTime | null
    endDate: DateTime | null
  }) => {
    if (!newDateRange.startDate || !newDateRange.endDate) {
      return
    }

    const dateRange = {
      from: dateValue(newDateRange.startDate.toJSDate()),
      to: dateValue(newDateRange.endDate.toJSDate()),
    }

    setCurrentValue(dateRange)
    onChange && onChange(dateRange)
  }

  const renderInputCheckInDate = () => {
    const focused = currentFocusedInput === 'startDate'
    return (
      <div
        className={`relative flex ${fieldClassName} items-center space-x-3 cursor-pointer ${
          focused ? 'rounded-tl-lg shadow-lg' : ' '
        }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <Calendar />
        </div>
        <div className="flex-1">
          <span className="block xl:text-lg font-semibold">
            {currentValue.from
              ? DateTime.fromISO(currentValue.from.toString()).toFormat('dd LLL')
              : startDateText}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {currentValue.from ? startDateText : addStartDateText}
          </span>
        </div>
      </div>
    )
  }

  const renderInputCheckOutDate = () => {
    const focused = currentFocusedInput === 'endDate'
    return (
      <div
        className={`relative flex ${fieldClassName} items-center space-x-3 cursor-pointer ${
          focused ? 'rounded-tr-lg shadow-lg' : ' '
        }`}
      >
        <div className="text-neutral-300 dark:text-neutral-400">
          <Calendar />
        </div>
        <div className="flex-1">
          <span className="block xl:text-lg font-semibold">
            {currentValue.to 
              ? DateTime.fromISO(currentValue.to.toString()).toFormat('dd LLL') 
              : endDateText}
          </span>
          <span className="block mt-1 text-sm text-neutral-400 leading-none font-light">
            {currentValue.to ? endDateText : addEndDateText}
          </span>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`StayDatesRangeInput relative flex z-10 ${className} ${
        currentFocusedInput
          ? 'nc-date-focusedInput'
          : 'nc-date-not-focusedInput'
      }`}
    >
      <div className="absolute inset-0 flex">
        <DateRangePicker
          startDate={toDateTime(currentValue.from).toJSDate()}
          endDate={toDateTime(currentValue.to).toJSDate()}
          focusedInput={currentFocusedInput}
          onDatesChange={handleDatesChange}
          onFocusChange={handleDateFocusChange}
          numberOfMonths={
            numberOfMonths || (windowSize.width < 1024 ? 1 : undefined)
          }
          startDateId={startDateId}
          endDateId={endDateId}
          daySize={
            windowSize.width >= 1024
              ? windowSize.width > 1279
                ? 56
                : 44
              : undefined
          }
          orientation={'horizontal'}
          showClearDates
          noBorder
          hideKeyboardShortcutsPanel
          anchorDirection={anchorDirection}
          customArrowIcon={<div />}
          reopenPickerOnClearDates
        />
      </div>

      <div className={`flex-1 grid grid-cols-2 relative ${wrapClassName}`}>
        {renderInputCheckInDate()}
        {renderInputCheckOutDate()}
      </div>
    </div>
  )
}
