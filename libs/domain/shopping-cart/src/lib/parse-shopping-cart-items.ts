import { dateValue } from '@otiuming/domain-data-types'

import {
  DailySelection,
  DateTimeSelection,
  NewExplainedSearchParams,
  ShoppingCartItem,
  TimeSlotSelection,
  UnitSelection,
} from './types'

type DeserializedDailySelection = Omit<DailySelection, 'dateRange'> & {
  dateRange: {
    from: string
    to: string
  }
}

type DeserializedTimeSlotSelection = Omit<TimeSlotSelection, 'date'> & {
  date: string
}

type DeserializedDateTimeSelection =
  | DeserializedTimeSlotSelection
  | DeserializedDailySelection

interface DeserializedNewExplainedSearchParams {
  type: undefined
  dateTimeSelection: DeserializedDateTimeSelection
  unitSelection: UnitSelection
}

type DeserializedExplainedSearchParams = DeserializedNewExplainedSearchParams

type DeserializedShoppingCartItem = Omit<
  ShoppingCartItem,
  'explainedSearchParams'
> & {
  explainedSearchParams: DeserializedExplainedSearchParams
}

export function parseDateTimeSelection(
  deserializedDateTimeSelection: DeserializedDateTimeSelection,
): DateTimeSelection {
  return deserializedDateTimeSelection.type === 'time-slot-selection'
    ? parseTimeSlotSelection(deserializedDateTimeSelection)
    : parseDailySelection(deserializedDateTimeSelection)
}

export function parseDailySelection(
  deserializedDateTimeSelection: DeserializedDailySelection,
): DailySelection {
  return {
    type: 'daily-selection',
    dateRange: {
      from: dateValue(deserializedDateTimeSelection.dateRange.from),
      to: dateValue(deserializedDateTimeSelection.dateRange.to),
    },
  }
}

export function parseTimeSlotSelection(
  deserializedDateTimeSelection: DeserializedTimeSlotSelection,
): TimeSlotSelection {
  return {
    type: 'time-slot-selection',
    date: dateValue(deserializedDateTimeSelection.date),
    timeSlot: deserializedDateTimeSelection.timeSlot,
  }
}

export function parseShoppingCartItems(serialized: string): ShoppingCartItem[] {
  const items = JSON.parse(serialized) as DeserializedShoppingCartItem[]
  const parsedItems: ShoppingCartItem[] = items.map((item) => {
    const deserializedExplainedSearchParams = item.explainedSearchParams
    const explainedSearchParams = parseExplainedSearchParams(
      deserializedExplainedSearchParams,
    )

    return {
      ...item,
      explainedSearchParams,
    }
  })

  return parsedItems
}

export function parseExplainedSearchParams(
  deserializedExplainedSearchParams: DeserializedExplainedSearchParams,
): NewExplainedSearchParams {
  const deserializedDateTimeSelection =
    deserializedExplainedSearchParams.dateTimeSelection

  const dateTimeSelection =
    deserializedDateTimeSelection.type === 'time-slot-selection'
      ? parseTimeSlotSelection(deserializedDateTimeSelection)
      : parseDailySelection(deserializedDateTimeSelection)

  return {
    unitSelection: deserializedExplainedSearchParams.unitSelection,
    dateTimeSelection,
  }
}
