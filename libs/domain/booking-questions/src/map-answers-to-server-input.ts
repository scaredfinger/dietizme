import { Booking_Questions_Answers_By_Scope } from '@otiuming/domain-omnidata-types'

import { Answers, AnswersByScope } from './types'

export function mapAnswersToServerInput(answers: AnswersByScope): Booking_Questions_Answers_By_Scope { 
  return {
    booking: Object.entries(answers.booking)
      .map(([question_id, value]) => ({ 
        question_id, 
        value 
      })),
    products: answers.products.map(pq => ({
      product_anwers: answersObjectToArray(pq.productAnswers),
      adults: pq.adults.map(answersObjectToArray),
      children: pq.children.map(answersObjectToArray)
    }))
  }
}

function answersObjectToArray(answers: Answers) {
  return Object.entries(answers)
    .map(([question_id, value]) => ({ 
      question_id, 
      value 
    }))
}