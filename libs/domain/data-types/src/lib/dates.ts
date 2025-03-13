import { DateTime } from 'luxon'
import * as _ from 'lodash-es'

import { ALL_EXACT_HOURS, ExactHour } from './hours'

type DateValueInner = DateTime

export class DateValue {
  constructor(private inner: DateValueInner) {}

  addDays(days: number): DateValue {
    return new DateValue(this.inner.plus({ days }))
  }

  toJSON(): string {
    return this.inner.toFormat("yyyy-MM-dd'T'HH:mm:ss")
  }

  setExactHour(hour: ExactHour): DateValue {
    return new DateValue(buildDatePrivate(this.inner, hour))
  }

  format(format: string): string {
    // Convert common moment formats to luxon formats
    // This is a simple conversion and might need to be extended
    const luxonFormat = format
      .replace('YYYY', 'yyyy')
      .replace('MM', 'MM')
      .replace('DD', 'dd')
    
    return this.inner.toFormat(luxonFormat)
  }
}

export function dateValue(value?: string | DateValueInner): DateValue {
  if (!value) {
    return new DateValue(DateTime.now())
  }

  if (_.isString(value)) {
    return new DateValue(DateTime.fromISO(value))
  }

  return new DateValue(value)
}

export interface DateRange {
  from: DateValue
  to: DateValue
}

export function addDays(date: DateValue, days: number): DateValue {
  return date.addDays(days)
}

function format(date: DateValueInner, hour: ExactHour): string {
  return date.toFormat('yyyy-MM-dd') + 'T' + hour
}

function getExactHour(hour: number | ExactHour): ExactHour {
  if (_.isNumber(hour)) {
    return ALL_EXACT_HOURS[hour]
  }

  return hour
}

function buildDatePrivate(
  date: DateValueInner,
  hour: number | ExactHour,
): DateValueInner {
  return DateTime.fromISO(format(date, getExactHour(hour)))
}

export function buildDate(
  date: DateValue,
  hour: number | ExactHour,
): DateValue {
  return date.setExactHour(getExactHour(hour))
}
