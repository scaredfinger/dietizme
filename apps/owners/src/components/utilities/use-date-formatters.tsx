import _ from 'lodash'

import { DateValue, dateValue } from '@otiuming/domain-data-types'

export function useDateFormaters() {
  return {
    renderShortDate,
    renderLongDate,
    renderLongDateWithTime,
  }
}

function renderShortDate(date: DateValue | string) {
  const dateValue = parseDate(date)

  return dateValue.format('ll')
}

function renderLongDate(date: DateValue | string) {
  const dateValue = parseDate(date)

  return dateValue.format('LL')
}

function renderLongDateWithTime(date: DateValue | string) {
  const dateValue = parseDate(date)

  return dateValue.format('LLLL')
}

function parseDate(date: DateValue | string) {
  return _.isString(date) ? dateValue(date) : date
}
