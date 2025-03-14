import moment from 'moment'
import { DateTime } from 'luxon'
import { describe, expect, it } from 'vitest'

import {
  shortDate,
  shortDateWith2DigitYear,
  shortDateWithFullYear,
} from './date'

describe('date', () => {
  describe('shortDate', () => {
    ;[
      { date: new Date('2020-01-01'), locale: `en-US`, expected: 'Jan 1' },
      { date: new Date('2020-01-31'), locale: `en-US`, expected: 'Jan 31' },
      { date: moment('2020-01-01'), locale: `en-US`, expected: 'Jan 1' },
      { date: moment('2020-01-31'), locale: `en-US`, expected: 'Jan 31' },
      {
        date: DateTime.fromISO('2020-01-01'),
        locale: `en-US`,
        expected: 'Jan 1',
      },
      {
        date: DateTime.fromISO('2020-01-31'),
        locale: `en-US`,
        expected: 'Jan 31',
      },
      { date: '2020-01-01', locale: `en-US`, expected: 'Jan 1' },
      { date: '2020-01-31', locale: `en-US`, expected: 'Jan 31' },
    ].forEach(({ date, locale, expected }) =>
      it(`is ${expected} for ${date.constructor.name}(${date}) and ${locale}`, () => {
        const actual = shortDate(date, locale)

        expect(actual).toEqual(expected)
      }),
    )
  })

  describe('shortDateWithFullYear', () => {
    ;[
      {
        date: new Date('2020-01-01'),
        locale: `en-US`,
        expected: 'Jan 1, 2020',
      },
      { date: moment('2020-01-01'), locale: `en-US`, expected: 'Jan 1, 2020' },
      {
        date: DateTime.fromISO('2020-01-01'),
        locale: `en-US`,
        expected: 'Jan 1, 2020',
      },
      { date: '2020-01-01', locale: `en-US`, expected: 'Jan 1, 2020' },
    ].forEach(({ date, locale, expected }) =>
      it(`is ${expected} for ${date.constructor.name}(${date}) and ${locale}`, () => {
        const actual = shortDateWithFullYear(date, locale)

        expect(actual).toEqual(expected)
      }),
    )
  })

  describe('shortDateWith2DigitYear', () => {
    ;[
      { date: new Date('2020-01-01'), locale: `en-US`, expected: 'Jan 1, 20' },
      { date: moment('2020-01-01'), locale: `en-US`, expected: 'Jan 1, 20' },
      {
        date: DateTime.fromISO('2020-01-01'),
        locale: `en-US`,
        expected: 'Jan 1, 20',
      },
      { date: '2020-01-01', locale: `en-US`, expected: 'Jan 1, 20' },
    ].forEach(({ date, locale, expected }) =>
      it(`is ${expected} for ${date.constructor.name}(${date}) and ${locale}`, () => {
        const actual = shortDateWith2DigitYear(date, locale)

        expect(actual).toEqual(expected)
      }),
    )
  })
})
