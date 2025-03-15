import _ from 'lodash'
import React, { useEffect, useMemo, useState } from 'react'

import { DateValue, dateValue } from '@otiuming/domain-data-types'
import {
  AsyncResult,
  OptionalAsyncResult,
  ReserveFunction,
  FutureResult,
  SearchFunction,
  OpenChooseOptionsFunction,
  UnitSelectedSupplementsBySupplementId,
  NavigateToContactUsFunction,
  DailyPerResourceViewModel,
} from '@otiuming/ui-white-labels-view-models'
import { useTranslation } from '@otiuming/ui-i18n'
import { Rate, RateOnlyResponse, SearchParams } from '@otiuming/domain-search'
import { DailyPerResourceConfiguration } from '@otiuming/domain-rates'

import { DatesRangeInput } from '../../inputs/date-range-input'
import { NumberInput } from '../../inputs'
import { Amount } from '../../data-types'
import { buildTotalRow } from './components/total-row'
import { buildActionButton } from './components/action-button'

interface Props {
  formatCurrency: (amount: Amount) => string
  viewModel: DailyPerResourceViewModel
}

function renderQuantityInput(
  viewModel: DailyPerResourceViewModel,
): React.ReactNode {
  return (
    <NumberInput
      className="pl-2"
      value={viewModel.quantity}
      onChange={viewModel.handleQuantityChange}
      max={viewModel.maxResources}
      min={1}
    />
  )
}

export const DailyPerProductSearchBox: React.FC<Props> = ({
  formatCurrency,
  viewModel,
}) => {
  const { t } = useTranslation()

  const TotalRow = useMemo(() => buildTotalRow(), [])
  const ActionButton = useMemo(() => buildActionButton(), [])

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
          onChange={viewModel.handleDateRangeChange}
          fieldClassName="p-3"
          value={viewModel.dateRange}
          anchorDirection={'right'}
          className="nc-ListingStayDetailPage__stayDatesRangeInput flex-1"
        />
        <div className="w-full border-b border-neutral-200 dark:border-neutral-700"></div>
        <div className="flex-1 grid grid-cols-2 py-5">
          <div className="pl-3">
            <i className="las la-cash-register text-3xl text-neutral-300 dark:text-neutral-400 pr-2" />
            <span className="text-lg pb-1">{t('fields.quantity.title')}</span>
          </div>
          {renderQuantityInput(viewModel)}
        </div>
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
        <TotalRow viewModel={viewModel} formatCurrency={formatCurrency} />
      </div>

      {/* SUBMIT */}
      {/* Bring back with view model */}
      <ActionButton viewModel={viewModel} />
    </div>
  )
}

function defaultFromDate(): DateValue {
  return dateValue().addDays(4)
}

function defaultToDate(): DateValue {
  return dateValue().addDays(5)
}

export function useDailyPerResourceViewModel({
  configuration,
  search,
  reserve,
  openChooseOptions,
  navigateToContactUs
}: {
  configuration?: DailyPerResourceConfiguration
  search: SearchFunction
  reserve: ReserveFunction
  openChooseOptions: OpenChooseOptionsFunction
  navigateToContactUs: NavigateToContactUsFunction
}) {
  const [from, submitFromChanges] = useState<DateValue>(defaultFromDate())
  const [to, submitToChanges] = useState<DateValue>(defaultToDate())
  const [quantity, submitQuantityChanges] = useState<number>(1)
  const [selectedRate, submitSelectedRateChanges] = useState<
    OptionalAsyncResult<Rate>
  >(OptionalAsyncResult.NotAsked())
  const [searchResult, submitSearchResultChanges] = useState<
    AsyncResult<RateOnlyResponse>
  >(AsyncResult.NotAsked())
  const [selectedSupplements, submitSelectedSupplementsChanges] = useState<
    OptionalAsyncResult<UnitSelectedSupplementsBySupplementId[]>
  >(OptionalAsyncResult.NotAsked())

  const state = useMemo(() => {
    return {
      from,
      submitFromChanges,
      to,
      submitToChanges,
      quantity,
      submitQuantityChanges,
      selectedRate,
      submitSelectedRateChanges,
      searchResult,
      submitSearchResultChanges,
      selectedSupplements,
      submitSelectedSupplementsChanges,
    }
  }, [from, to, quantity, selectedRate, searchResult, selectedSupplements])

  const viewModel = useMemo(() => {
      return new DailyPerResourceViewModel(
        state,
        configuration,
        search,
        openChooseOptions,
        reserve,
        navigateToContactUs
      )
  }, [
    configuration, 
    state, 
    search, 
    reserve, 
    openChooseOptions, 
    navigateToContactUs
  ])

  useEffect(() => {
    // TODO: make sure initial search is executed at the proper time
    setTimeout(() => viewModel.initialize(), 3000)
    // only initialize, which changes values in the state, when configuration changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return viewModel
}

export function useDailyPerResourceSearchFunction({
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
