import {
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
  Organization_Booking_Question
} from '@otiuming/domain-omnidata-types'
import { faker } from '@faker-js/faker'
import _ from 'lodash'

import { buildAnswers } from './build-answers'
import { AnswersByScope } from './types'

describe('buildAnswers()', () => {
  let perBooking: Organization_Booking_Question[]
  let perProduct: Organization_Booking_Question[]
  let perPax: Organization_Booking_Question[]

  let questions: Organization_Booking_Question[]

  let answers: AnswersByScope

  beforeEach(() => {
    perBooking = randomQuestions(Booking_Question_Scope_Enum.PerBooking)
    perProduct = randomQuestions(Booking_Question_Scope_Enum.PerProduct)
    perPax = randomQuestions(Booking_Question_Scope_Enum.PerPax)

    questions = [
      ...perBooking,
      ...perProduct,
      ...perPax
    ]

    answers = buildAnswers({
      questions,
      products: 3,
      adults: 5,
      children: 1
    })
  })

  it('assigns booking answers', () => {
    const answerSortedIds = _.keys(answers.booking).sort()
    const questionSortedIds = perBooking.map(q => q.id).sort()

    expect(answerSortedIds).toEqual(questionSortedIds)
  })

  describe('products', () => {
    it('matches the number of products', () => {
      expect(answers.products.length).toEqual(3)
    })

    it('all products have same questions', () => {
      answers.products.forEach(pq => {
        const answersSortedIds = _.keys(pq.productAnswers).sort()
        const questionsSortedIds = perProduct.map(q => q.id).sort()

        expect(answersSortedIds).toEqual(questionsSortedIds)
      })
    })

    it('matches number of adults', () => {
      answers.products.forEach(pq => {
        expect(pq.adults.length).toEqual(5)
      })
    })

    it('matches number of children', () => {
      answers.products.forEach(pq => {
        expect(pq.children.length).toEqual(1)
      })
    })

    it('all adults have same questions', () => {
      answers.products.forEach(pq => {
        pq.adults.forEach(a => {
          const answersSortedIds = _.keys(a).sort()
          const questionsSortedIds = perPax.map(q => q.id).sort()

          expect(answersSortedIds).toEqual(questionsSortedIds)
        })
      })
    })
  })

})

function randomQuestions(scope: Booking_Question_Scope_Enum, numberOfQuestions = 10): Organization_Booking_Question[] {
  return Array(numberOfQuestions).fill(0).map(() => {
    const type = faker.helpers.arrayElement([
      Booking_Question_Type_Enum.FreeText,
      Booking_Question_Type_Enum.Numeric,
      Booking_Question_Type_Enum.Select,
    ])

    return ({
      __typename: 'organization_booking_question',
      id: randomId(),
      position: 0,
      text_id: randomId(),
      organization_id: randomId(),
      scope,
      text: {
        id: randomId(),
        en: faker.lorem.sentence(),
        es: faker.lorem.sentence(),
        fr: faker.lorem.sentence(),
        de: faker.lorem.sentence(),
      },
      type,
      value: randomQuestionValue(type)
    })
  })
}

function randomId(): string {
  return faker.random.alphaNumeric(10)
}

function randomQuestionValue(type: Booking_Question_Type_Enum) {
  switch (type) {
    case Booking_Question_Type_Enum.FreeText:
      return {
      }
    case Booking_Question_Type_Enum.Numeric:
      return {
        min: 0,
        max: 10,
        step: 1
      }
    case Booking_Question_Type_Enum.Select:
      return {
        options: Array(10).fill(0).map(() => ({
          value: faker.random.alphaNumeric(10),
          en: faker.lorem.sentence(),
          es: faker.lorem.sentence(),
          fr: faker.lorem.sentence(),
          de: faker.lorem.sentence()
        }))
      }
  }
}
