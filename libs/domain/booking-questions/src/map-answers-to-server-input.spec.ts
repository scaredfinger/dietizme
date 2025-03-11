import { faker } from '@faker-js/faker'
import { randomInt } from 'crypto'

import { Booking_Questions_Answers_By_Scope } from '@otiuming/domain-omnidata-types'

import { AnswersByScope } from './types'
import { mapAnswersToServerInput } from './map-answers-to-server-input'

describe('mapAnswersToServerInput', () => {
  let answers: AnswersByScope
  let serverInput: Booking_Questions_Answers_By_Scope

  beforeEach(() => {
    answers = {
      booking: randomQuestionsObject(),
      products: randomNumberOf(() => ({
        productAnswers: randomQuestionsObject(),
        adults: randomNumberOf(randomQuestionsObject),
        children: randomNumberOf(randomQuestionsObject)
      }))
    }

    serverInput = mapAnswersToServerInput(answers)
  })

  describe('booking answers', () => {
    it('it matches length', () => {
      expect(serverInput.booking.length).toEqual(Object.keys(answers.booking).length)
    })

    it('matches keys and values', () => {
      serverInput.booking.forEach(({ question_id, value }) => {
        expect(answers.booking[question_id]).toEqual(value)
      })
    })
  })

  describe('per product', () => {
    it('matches length', () => {
      expect(serverInput.products.length).toEqual(answers.products.length)
    })

    describe('product answers', () => {
      it('matches keys and values', () => {
        answers.products.forEach(({ productAnswers }, index) => {
          const serverInputProductAnswers = serverInput.products[index]
  
          const productAnswersKeys = Object.keys(productAnswers)
          expect(serverInputProductAnswers.product_anwers.length).toEqual(productAnswersKeys.length)
  
          serverInputProductAnswers.product_anwers.forEach(({ question_id, value }) => {
            expect(value).toEqual(productAnswers[question_id])
          })
        })
      })
    })

    describe('pax answers', () => {
      it('matches keys and values', () => {
        answers.products.forEach(({ adults, children }, pi) => {
          const serverInputProductAnswers = serverInput.products[pi]

          adults.forEach((adultAnswers, ai) => {
            const serverInputAdultAnswers = serverInputProductAnswers.adults[ai]

            const adultAnswersKeys = Object.keys(adultAnswers)
            expect(serverInputAdultAnswers.length).toEqual(adultAnswersKeys.length)
          })

          children.forEach((childAnswers, ci) => {
            const serverInputChildAnswers = serverInputProductAnswers.children[ci]

            const childAnswersKeys = Object.keys(childAnswers)
            expect(serverInputChildAnswers.length).toEqual(childAnswersKeys.length)
          })
        })
      })
    })
  })
})

function randomNumberOf<T>(f: () => T): T[] {
  return Array(randomInt(1, 5)).fill(0).map(f)
}

function randomQuestionsObject() {
  return Array(randomInt(10, 15)).fill(0).reduce((agg) => ({
    ...agg,
    [faker.random.word().toLowerCase()]: faker.random.word()
  }), {})
}
