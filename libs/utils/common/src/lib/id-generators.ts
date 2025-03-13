import { now } from 'lodash-es'
import { default as ShortUniqueId } from 'short-unique-id'

const numberId = new ShortUniqueId({
  dictionary: 'number',
  length: 6,
})

const alphaId = new ShortUniqueId({
  dictionary: 'alpha_upper',
  length: 3,
})

export function createBookingId() {
  return alphaId.rnd() + '-' + numberId.rnd()
}

const eventId = new ShortUniqueId({
  dictionary: 'alphanum_lower',
  length: 8,
})

export function createEventId() {
  return now() + '-' + eventId.rnd()
}

const length4Id = new ShortUniqueId({
  dictionary: 'alphanum',
  length: 4,
})

export function createLength4Id(prefix?: string) {
  return prefix ? `${prefix}-${length4Id.rnd()}` : length4Id.rnd()
}

const length6Id = new ShortUniqueId({
  dictionary: 'alphanum',
  length: 6,
})

export function createLength6Id() {
  return length6Id.rnd()
}
