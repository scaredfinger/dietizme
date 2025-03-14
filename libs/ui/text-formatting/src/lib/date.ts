import * as _ from 'lodash-es'
import { DateTime } from 'luxon'
import { Moment } from './moment-shim'

type AnyTimeOfDate = Date | Moment | DateTime | string

function getDate(date: AnyTimeOfDate): DateTime {
  return (
    (_.isString(date) && DateTime.fromISO(date)) ||
    (_.isDate(date) && DateTime.fromJSDate(date)) ||
    ((date as Moment).toDate &&
      DateTime.fromJSDate((date as Moment).toDate())) ||
    (date as DateTime)
  )
}

export function shortDate(date: AnyTimeOfDate, locale = 'en-US') {
  const asDate = getDate(date)

  return asDate && asDate.toFormat('MMM d', { locale })
}

export function shortDateWithFullYear(date: AnyTimeOfDate, locale = 'en-US') {
  const asDate = getDate(date)

  return asDate && asDate.toFormat('MMM d, yyyy', { locale })
}

export function shortDateWith2DigitYear(date: AnyTimeOfDate, locale = 'en-US') {
  const asDate = getDate(date)

  return asDate && asDate.toFormat('MMM d, yy', { locale })
}
