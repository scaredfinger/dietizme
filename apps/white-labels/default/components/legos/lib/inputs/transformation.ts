import { DateTime } from 'luxon'

import { DateValue } from '@otiuming/domain-data-types'

export function toDateTime(date: DateValue | null): DateTime {
  return date 
    ? DateTime.fromFormat(date.format('YYYY-MM-DD'), 'yyyy-MM-dd') 
    : DateTime.now()
}
