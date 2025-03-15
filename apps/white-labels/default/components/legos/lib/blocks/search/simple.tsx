import _ from 'lodash'
import React, { useState } from 'react'

import { DatesRangeInput } from '../../inputs/date-range-input'
import { GuestsInput } from '../../inputs'
import { ButtonPrimary } from '../../atoms/buttons'
import { Amount } from '../../data-types'

import {
  DateRange,
  DateValue,
  Guests,
  addDays,
  dateValue,
} from '@otiuming/domain-data-types'
import { useTranslation } from '@otiuming/ui-i18n'

interface Props {
  formatCurrency: (amount: Amount) => string
}

function defaultStartDate(): DateValue {
  return dateValue().addDays(4)
}
export const SimpleSearchBox: React.FC<Props> = ({ formatCurrency }) => {
  const { t } = useTranslation()

  const [selectedDateRange, setSelectedDateRage] = useState<DateRange>({
    from: defaultStartDate(),
    to: addDays(defaultStartDate(), 1),
  })

  const [selectedGuests, setSelectedGuests] = useState<Guests>({
    adults: 1,
    children: 0,
    infants: 0,
  })

  // Bring back with viewModel
  const formattedTotal = '' // total && formatCurrency(total)

  function withChanges<NewValue extends Guests | DateRange>(
    dispatcher: (newValue: NewValue) => void,
  ) {
    return (newValue: NewValue) => {
      dispatcher(newValue)

      const valueAsDateRange = newValue as DateRange
      const overridenDateRange =
        valueAsDateRange.from && valueAsDateRange.to
          ? { dateRange: valueAsDateRange }
          : {}
      const valueAsGuests = newValue as Guests
      const overridenGuests =
        valueAsGuests.adults || valueAsGuests.children || valueAsGuests.infants
          ? { guests: valueAsGuests }
          : {}

      const composedNewValue = {
        guests: selectedGuests,
        dateRange: selectedDateRange,
        ...overridenDateRange,
        ...overridenGuests,
      }

      // TODO: Bring back with ViewModel
      // onChange(composedNewValue)
    }
  }

  return (
    <div className="listingSectionSidebar__wrap shadow-xl">
      {/* 
            // TODO: Add price per unit/person etc https://trello.com/c/7afJZJGW
            <div className="flex justify-between">
        <span className="text-3xl font-semibold">
          {formattedTotal}
          <span className="ml-1 text-base font-normal text-neutral-500 dark:text-neutral-400">
            /night
          </span>
        </span>
        <StartRating />
      </div> */}

      <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
        <DatesRangeInput
          // wrapClassName="divide-x divide-neutral-200 dark:divide-neutral-700 !grid-cols-1 sm:!grid-cols-2"
          onChange={withChanges<DateRange>(setSelectedDateRage)}
          fieldClassName="p-3"
          value={selectedDateRange}
          anchorDirection={'right'}
          className="nc-ListingStayDetailPage__stayDatesRangeInput flex-1"
        />
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
        <GuestsInput
          className="nc-ListingStayDetailPage__guestsInput flex-1"
          fieldClassName="p-3"
          value={selectedGuests}
          onChange={withChanges<Guests>(setSelectedGuests)}
          hasButtonSubmit={false}
        />
      </form>

      {/* SUM */}
      <div className="flex flex-col space-y-4">
        {/* // TODO: Add price breakdown https://trello.com/c/x3xYhNOW
        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          <span>$119 x 3 night</span>
          <span>$357</span>
        </div>
        
        <div className="flex justify-between text-neutral-6000 dark:text-neutral-300">
          <span>Service charge</span>
          <span>$0</span>
        </div>
        <div className="border-b border-neutral-200 dark:border-neutral-700"></div> */}
        <div className="flex justify-between font-semibold">
          <span>{formattedTotal && 'Total'}</span>
          <span>{formattedTotal}</span>
        </div>
      </div>

      {/* SUBMIT */}
      {/* Bring back with view model */}
      <ButtonPrimary onClick={_.noop}>
        {t('actions.reserve.title')}
      </ButtonPrimary>
    </div>
  )
}
