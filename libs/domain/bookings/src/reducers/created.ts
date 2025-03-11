import {
  Booking_Insert_Input,
  Booking_Question_Scope_Enum,
  Booking_State_Enum,
  Contact_Constraint,
  Contact_Update_Column
} from '@otiuming/domain-omnidata-types'

import { Created } from '../action-creators'
import { toAnswersById, toQuestionsById } from '../utils'

import { BookingInsert } from './types'

export function reduceCreated(event: Created): BookingInsert {
  const booking_id = event.payload.booking_id
  const allAnswers = event.payload.answers
  const allQuestions = Object.values(event.payload.questions);

  const amount = event.payload.items.reduce((acc, item) =>
    acc
    + item.expected_price
    + item.units.reduce((unitTotal, unit) =>
      unitTotal
      + unit.supplements.reduce((supplementsTotal, supplement) =>
        supplementsTotal
        + supplement.quantity * supplement.expected_unit_price,
        0),
      0),
    0)

  const bookingQuestions = allQuestions.filter((question) => question.scope === Booking_Question_Scope_Enum.PerBooking)
  const bookingQuestionsById = toQuestionsById(bookingQuestions)
  const bookingAnswers = toAnswersById(allAnswers.booking)

  const productQuestions = allQuestions.filter((question) => question.scope === Booking_Question_Scope_Enum.PerProduct)
  const productQuestionsById = toQuestionsById(productQuestions)

  const paxQuestions = allQuestions.filter((question) => question.scope === Booking_Question_Scope_Enum.PerPax)
  const paxQuestionsById = toQuestionsById(paxQuestions)

  const booking: Booking_Insert_Input = {
    id: booking_id,
    friendly_id: event.payload.friendly_id,
    organization_id: event.payload.organization_id,
    state: Booking_State_Enum.Created,
    version: 1,
    created_on: event.timestamp,
    last_modified_on: event.timestamp,
    amount,
    questions_by_scope_by_id: {
      booking: bookingQuestionsById,
      product: productQuestionsById,
      pax: paxQuestionsById,
    },
    booking_answers_by_id: bookingAnswers,
    locale: event.payload.locale,
    contact: {
      data: {
        ...event.payload.contact,
        organization_id: event.payload.organization_id
      },
      on_conflict: {
        constraint: Contact_Constraint.ContactPkey,
        update_columns: [
          Contact_Update_Column.Id,
          Contact_Update_Column.Name,
          Contact_Update_Column.Email,
          Contact_Update_Column.OrganizationId,
        ],
      },
    },
    products: {
      data: event.payload.items.map((item, index) => ({
        price: item.expected_price + item.units.reduce((unitTotal, unit) =>
          unitTotal
          + unit.supplements.reduce((supplementsTotal, supplement) =>
            supplementsTotal
            + supplement.quantity * supplement.expected_unit_price,
            0),
          0),
        rate_id: item.rate_id,
        search_params: item.search_params,
        starts_on: item.search_params.date_range.from,
        ends_on: item.search_params.date_range.to,
        quantity: item.search_params.units.length,
        explained_search_params: item.explained_search_params,
        product_answers_by_id: toAnswersById(allAnswers.products[index].product_anwers),
        pax_answers_by_pax_type_by_index_by_id: {
          adults: allAnswers.products[index].adults.map(toAnswersById),
          children: allAnswers.products[index].children.map(toAnswersById),
        }
      }))
    }
  }

  return {
    type: 'INSERT',
    booking
  }
}