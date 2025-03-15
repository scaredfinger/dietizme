import React, { useEffect, useMemo, useState } from 'react'
import _ from 'lodash'

import {
  AsyncResult,
  FutureResult,
  NavigateToContactUsFunction,
  OpenChooseOptionsFunction,
  OptionalAsyncResult,
  SearchFunction,
  TimeSlotsPerPaxViewModel,
  TimeSlotsPerPaxViewModelConfiguration,
  UnitSelectedSupplementsBySupplementId,
  NewReserveFunction,
  Optional,
} from '@otiuming/ui-white-labels-view-models'
import { TimeSlot } from '@otiuming/domain-rates'
import { RateOnlyResponse, Rate, SearchParams } from '@otiuming/domain-search'
import {
  DateValue,
  ExactHour,
  Guests,
  dateValue,
} from '@otiuming/domain-data-types'
import { useTranslation } from '@otiuming/ui-i18n'

import { GuestsInput } from '../../inputs'
import { Amount } from '../../data-types'
import { DateInput } from '../../inputs/date-input'
import { DropDown } from './components/DropDown'
import { buildTotalRow } from './components/total-row'
import { buildActionButton } from './components/action-button'

interface Props {
  formatCurrency: (amount: Amount) => string
  viewModel: TimeSlotsPerPaxViewModel
}

export const TimeSlotsPerPaxSearchBox: React.FC<Props> = ({
  formatCurrency,
  viewModel,
}) => {
  const { t } = useTranslation()

  const TotalRow = useMemo(() => buildTotalRow(), [])
  const ActionButton = useMemo(
    () => buildActionButton(),
    [],
  )

  return (
    <div className="listingSectionSidebar__wrap shadow-xl">
      <form className="flex flex-col border border-neutral-200 dark:border-neutral-700 rounded-3xl ">
        {renderDateSelection(viewModel)}
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flex">
          {renderGuestsInput(viewModel)}
          {renderTimeSlotSelection(viewModel, t)}
        </div>
      </form>

      {/* SUM */}
      <div className="flex flex-col space-y-4">
        <TotalRow viewModel={viewModel} formatCurrency={formatCurrency} />
      </div>

      {/* SUBMIT */}
      <ActionButton viewModel={viewModel} />
    </div>
  )
}

function renderDateSelection(viewModel: TimeSlotsPerPaxViewModel) {
  return (
    <DateInput
      // wrapClassName="divide-x divide-neutral-200 dark:divide-neutral-700 !grid-cols-1 sm:!grid-cols-2"
      onChange={viewModel.handleDateChange}
      fieldClassName="p-3"
      value={viewModel.date}
      numberOfMonths={1}
      anchorDirection={'right'}
      className="nc-ListingStayDetailPage__stayDatesRangeInput flex-1"
    />
  )
}

function renderGuestsInput(viewModel: TimeSlotsPerPaxViewModel) {
  return (
    <GuestsInput
      className="flex-1 rounded-t-none rounded-r-none"
      fieldClassName="p-3"
      value={viewModel.guests}
      onChange={viewModel.handleGuestsChange}
      hasButtonSubmit={false}
    />
  )
}

function renderTimeSlotSelection(
  viewModel: TimeSlotsPerPaxViewModel,
  t: (key: string) => string,
): React.ReactNode {
  const options = viewModel.timeSlotOptions

  const value = viewModel.timeSlot.match({
    Some: (timeSlot) => timeSlot.start,
    None: () => '',
  })

  return (
    <DropDown
      texts={{ placeholder: t('actions.select-time.title') }}
      options={options}
      value={value}
      onChange={(value) => viewModel.handleTimeSlotByStartChange(value as ExactHour)}
    />
  )
}

export function useSearchFunction({
  productId,
  searchEngineUrl,
}: {
  productId: string
  searchEngineUrl: string
}) {
  return useMemo(() => {
    return ({
      dateRange,
      units,
    }: SearchParams): FutureResult<RateOnlyResponse> => {
      const promise = fetch(`${searchEngineUrl}/search-only-rates`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...dateRange,
          products: [productId],
          units,
        }),
      }).then((res) => res.json())

      return FutureResult.fromPromise(promise)
    }
  }, [productId, searchEngineUrl])
}

export function useTimeSlotViewModel({
  configuration,
  search,
  reserve,
  openChooseBookableOptions,
  navigateToContactUs
}: {
  configuration: TimeSlotsPerPaxViewModelConfiguration
  search: SearchFunction
  reserve: NewReserveFunction
  openChooseBookableOptions: OpenChooseOptionsFunction
  navigateToContactUs: NavigateToContactUsFunction
}) {
  const [date, submitDateChanges] = useState<DateValue>(defaultStartDate())
  const [guests, submitGuestsChanges] = useState<Guests>({
    adults: 1,
    children: 0,
    infants: 0,
  })
  const [timeSlot, submitTimeSlotChanges] = useState<Optional<TimeSlot>>(Optional.None())
  const [selectedRate, submitSelectedRateChanges] = useState<
    OptionalAsyncResult<Rate>
  >(OptionalAsyncResult.NotAsked())
  const [searchResult, submitSearchResultChanges] = useState<
    AsyncResult<RateOnlyResponse>
  >(AsyncResult.NotAsked())
  const [selectedSupplements, submitSelectedSupplementsChanges] = useState<
    OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>
  >(OptionalAsyncResult.NotAsked())

  const state = useMemo(
    () => ({
      date,
      submitDateChanges,
      guests,
      submitGuestsChanges,
      timeSlot,
      submitTimeSlotChanges,
      selectedRate,
      submitSelectedRateChanges,
      searchResult,
      submitSearchResultChanges,
      selectedSupplements,
      submitSelectedSupplementsChanges,
    }),
    [date, guests, searchResult, selectedRate, selectedSupplements, timeSlot],
  )

  const viewModel = useMemo(() => {
    if (configuration) {
      return new TimeSlotsPerPaxViewModel(
        state,
        configuration,
        search,
        openChooseBookableOptions,
        reserve,
        navigateToContactUs,
      )
    }

    return new TimeSlotsPerPaxViewModel(
      state,
      configuration,
      search,
      openChooseBookableOptions,
      reserve,
      navigateToContactUs,
    )
  }, [
    configuration, 
    state, 
    search, 
    openChooseBookableOptions, 
    reserve, 
    navigateToContactUs
  ])

  useEffect(() => {
    viewModel.initialize()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return viewModel
}

function defaultStartDate() {
  return dateValue().addDays(4)
}
