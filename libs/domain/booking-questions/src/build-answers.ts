import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
  Organization_Booking_Question
} from '@otiuming/domain-omnidata-types'

import { AnswersByScope } from './types'

interface BuildAnswersArguments {
  questions: Organization_Booking_Question[]
  adults?: number
  products?: number
  children?: number
}

export function buildAnswers({
  questions,
  adults = 1,
  children = 0,
  products = 1
}: BuildAnswersArguments): AnswersByScope {
  const bookingQuestionsList = questions.filter(question => question.scope === Booking_Question_Scope_Enum.PerBooking)
  const bookingAnswers = listToObject(bookingQuestionsList)

  const productQuestionsList = questions.filter(question => question.scope === Booking_Question_Scope_Enum.PerProduct)
  const productAswersProto = listToObject(productQuestionsList)

  const paxQuestionsList = questions.filter(question => question.scope === Booking_Question_Scope_Enum.PerPax)
  const paxAnswersProto = listToObject(paxQuestionsList)

  const productsAnswers = Array(products).fill(0).map(() => ({
    productAnswers: {
      ...productAswersProto
    },
    adults: Array(adults).fill(0).map(() => ({
      ...paxAnswersProto
    })),
    children: Array(children).fill(0).map(() => ({
      ...paxAnswersProto
    }))
  }))

  return {
    booking: bookingAnswers,
    products: productsAnswers,
  }
}

function listToObject(bookingQuestionsList: Organization_Booking_Question[]) {
  return bookingQuestionsList.reduce((agg, q) => ({
    ...agg,
    [q.id]: q.type === Booking_Question_Type_Enum.Select
      ? q.value.options[0].value
      : ''
  }), {})
}
