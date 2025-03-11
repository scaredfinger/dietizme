import {
  Booking_Create_Input, Booking_Events_Event_Type_Enum,
  Rate
} from '@otiuming/domain-omnidata-types'

import { 
  EventBase, 
  MiniOrganization, 
  ReducedOrganizationBookingQuestion 
} from '../types'
import {
  createTimeStamp,
  createUniqueEventId,
  createUniqueId,
  toQuestionsById
} from '../utils'

type RateSnapshot = Pick<Rate, 'id' | 'price_rules'> & { price_calendar: { to: string, from: string, hourly: number, daily: number }[] }
type QuestionsById = Record<string, ReducedOrganizationBookingQuestion>

type CreatedPayload = Booking_Create_Input & { rates_snapshots: RateSnapshot[], booking_id: string, questions: QuestionsById }

export interface Created extends EventBase<Booking_Events_Event_Type_Enum.Created, CreatedPayload> {
  version: 1
}

export function create(request: Booking_Create_Input, organization: MiniOrganization, rates: RateSnapshot[]): Created {

  const timetstamp = createTimeStamp();

  const booking_id = request.id || createUniqueId()

  const allQuestions = organization.booking_questions;
  const allQuestionsById = toQuestionsById(allQuestions)

  return {
    id: createUniqueEventId(),
    booking_id: booking_id,
    type: Booking_Events_Event_Type_Enum.Created,
    version: 1,
    timestamp: timetstamp,
    payload: {
      booking_id: request.id,
      ...request,
      questions: allQuestionsById,
      rates_snapshots: rates
    }
  }
}