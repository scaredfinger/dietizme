import moment, { Moment } from 'moment'
import _ from 'lodash'

import { ALL_EXACT_HOURS, ExactHour } from './hours'

type DateValueInner = Moment

export class DateValue {
  constructor(private inner: DateValueInner) {}

  addDays(days: number): DateValue {
    return new DateValue(this.inner.clone().add(days, 'days'))
  }

  toJSON(): string {
    return this.inner.format('YYYY-MM-DDTHH:mm:ss')
  }

  setExactHour(hour: ExactHour): DateValue {
    return new DateValue(buildDatePrivate(this.inner, hour))
  }

  format(format: string): string {
    return this.inner.format(format)
  }
}

export function dateValue(value?: string | DateValueInner): DateValue {
  if (!value) {
    return new DateValue(moment())
  }

  if (_.isString(value)) {
    return new DateValue(moment(value))
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
  return date.format('YYYY-MM-DD') + 'T' + hour
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
  return moment(format(date, getExactHour(hour)))
}

export function buildDate(
  date: DateValue,
  hour: number | ExactHour,
): DateValue {
  return date.setExactHour(getExactHour(hour))
}
