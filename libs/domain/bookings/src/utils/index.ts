import { randomUUID } from 'crypto'
import { DateTime } from 'luxon'
import * as _ from 'lodash-es'

import {
  Booking_Question_Answer,
} from '@otiuming/domain-omnidata-types'

import { ReducedOrganizationBookingQuestion } from '../types'

export function createTimeStamp() {
  return DateTime.utc().toISO();
}

export function createUniqueEventId() {
  return randomUUID();
}

export function createUniqueId() {
  return randomUUID();
}


export function toQuestionsById(questions: ReducedOrganizationBookingQuestion[]): { [key: string]: ReducedOrganizationBookingQuestion } {
  return _.keyBy(questions, 'id')
}

export function toAnswersById(anwers: Booking_Question_Answer[]): { [key: string]: Booking_Question_Answer } {
  if (!anwers) {
    return {}
  }

  return _.keyBy(anwers, 'question_id')
}