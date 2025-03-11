import { faker } from '@faker-js/faker'
import _ from 'lodash'
import { randomInt } from 'crypto'

import {
  Booking_Contact_Input,
  Booking_Events_Event_Type_Enum,
  Booking_Item_Input,
  Booking_Question_Scope_Enum,
  Booking_Question_Type_Enum,
  Booking_Questions_Answers_By_Scope,
  Booking_State_Enum,
  Organization_Booking_Question,
} from '@otiuming/domain-omnidata-types'

import { reduceAcceptedWithUpdates, reduceCreated, reduceNoteAdded } from '../reducers'

import { BookingInsert } from './types'

describe('reducers', () => {
  const bookindId = faker.random.alphaNumeric()
  const eventId = faker.random.alphaNumeric()
  const version = randomInt(20000)
  const timestamp = faker.date.recent().toISOString()
  const eventVersion = randomInt(20000)
  const locale = faker.random.locale()

  describe('created', () => {
    let result: BookingInsert
    let friendlyId: string
    let organizationId: string
    let answers: Booking_Questions_Answers_By_Scope
    let contact: Booking_Contact_Input
    let items: Booking_Item_Input[]
    let questions: Record<string, Organization_Booking_Question>
    let ratesSnapshots

    beforeEach(() => {
      friendlyId = randomId()
      organizationId = randomId()
      items = randomNumberOf(() => ({
        expected_price: randomInt(100, 1000),
        explained_search_params: {},
        rate_id: randomId(),
        search_params: {
          date_range: {
            from: faker.date.recent().toISOString(),
            to: faker.date.future().toISOString(),
          },
          units: randomNumberOf(() => ({
            people: randomNumberOf(() => ({
              age: randomInt(1, 100),
            }))
          })),
        },
        units: randomNumberOf(() => ({
          supplements: randomNumberOf(() => ({
            id: randomId(),
            quantity: randomInt(1, 5),
            expected_unit_price: randomInt(100, 500),
          }))
        }))
      }))
      answers = {
        products: exactNumberOf(() => ({
          product_anwers: randomAnwsers(),
          adults: randomNumberOf(randomAnwsers),
          children: randomNumberOf(randomAnwsers),
        }), items.length),
        booking: randomAnwsers(),
      }
      contact = {
        name: faker.name.fullName(),
        email: faker.internet.email(),
      }
      const questionsArray = randomNumberOf(() => ({
        id: randomId(),
        organization_id: organizationId,
        position: randomInt(0, 10),
        scope: randomBookingQuestionScope(),
        text: {
          id: randomId(),
          en: faker.lorem.sentence(),
          es: faker.lorem.sentence(),
          fr: faker.lorem.sentence(),
          de: faker.lorem.sentence(),
        },
        text_id: randomId(),
        type: randomBookingQuestionType(),
        value: randomObject()
      }), 30, 50)
      questions = _.keyBy(questionsArray, 'id')
      ratesSnapshots = randomNumberOf(() => ({
        id: randomId(),
        price_calendar: randomNumberOf(() => ({
          from: faker.date.future().toISOString(),
          to: faker.date.future().toISOString(),
          daily: randomInt(100, 500),
          hourly: randomInt(100, 500),
        })),
        price_rules: randomNumberOf(randomObject)
      }))

      result = reduceCreated({
        id: eventId,
        booking_id: bookindId,
        timestamp,
        type: Booking_Events_Event_Type_Enum.Created,
        version: 1,
        payload: {
          booking_id: bookindId,
          organization_id: organizationId,
          friendly_id: friendlyId,
          locale,
          answers,
          contact,
          items,
          questions: questions,
          rates_snapshots: ratesSnapshots,
        },
      })
    })

    it('returns a new booking', () => {
      expect(result).toBeDefined()
    })

    it('assigns simple first level props', () => {
      expect(result.booking.id).toEqual(bookindId)
      expect(result.booking.friendly_id).toEqual(friendlyId)
      expect(result.booking.organization_id).toEqual(organizationId)
      expect(result.booking.version).toEqual(1)
      expect(result.booking.state).toEqual(Booking_State_Enum.Created)
      expect(result.booking.locale).toEqual(locale)
    })

    it('assigns time stamps', () => {
      expect(result.booking.created_on).toEqual(timestamp)
      expect(result.booking.last_modified_on).toEqual(timestamp)
    })

    it('assigs contact', () => {
      expect(result.booking.contact?.data).toEqual({
        ...contact,
        organization_id: organizationId
      })
    })

    it('assigns calculated amount', () => {
      const calculatedAmount = items.reduce((total, current) => 
        total 
        + current.expected_price 
        + current.units.reduce((totalUnit, unit) => 
          totalUnit 
          + unit.supplements.reduce((totalSupplement, supplement) => supplement.expected_unit_price * supplement.quantity + totalSupplement, 0), 0), 0)

      expect(result.booking.amount).toEqual(calculatedAmount)
    })

    it('assigns product calculated amount', () => {
      result.booking.products?.data.forEach((item, index) => {
        const expectedAmount = items[index].expected_price
          + items[index].units.reduce((totalUnit, unit) => 
            totalUnit 
            + unit.supplements.reduce((totalSupplement, supplement) => supplement.expected_unit_price * supplement.quantity + totalSupplement, 0), 0)

        expect(item.price).toEqual(expectedAmount)
      })
    })

    describe('questions', () => {
      it('assigns booking questions', () => {
        const bookingQuestions = _.values(questions).filter(q => q.scope === Booking_Question_Scope_Enum.PerBooking)
        const bookingQuestionsById = _.keyBy(bookingQuestions, 'id')

        expect(result.booking.questions_by_scope_by_id.booking).toEqual(bookingQuestionsById)
      })

      it('assigns product questions', () => {
        const productQuestions = _.values(questions).filter(q => q.scope === Booking_Question_Scope_Enum.PerProduct)
        const productQuestionsById = _.keyBy(productQuestions, 'id')

        expect(result.booking.questions_by_scope_by_id.product).toEqual(productQuestionsById)
      })

      it('assigns pax questions', () => {
        const paxQuestions = _.values(questions).filter(q => q.scope === Booking_Question_Scope_Enum.PerPax)
        const paxQuestionsById = _.keyBy(paxQuestions, 'id')

        expect(result.booking.questions_by_scope_by_id.pax).toEqual(paxQuestionsById)
      })
    })

    describe('items', () => {
      it('matches number of items', () => {
        expect(result.booking.products?.data.length).toEqual(items.length)
      })

      it('assigns first level properties', () => {
        items.forEach((item, index) => {
          const resultItem = result.booking.products?.data[index]

          expect(resultItem).toBeDefined()
          expect(resultItem?.price)
            .toEqual(item.expected_price 
              + item.units.reduce((totalUnit, unit) =>
                totalUnit 
                + unit.supplements.reduce((totalSupplement, supplement) => 
                    supplement.expected_unit_price * supplement.quantity + totalSupplement, 
                  0),
                0)
            )
          expect(resultItem?.rate_id).toEqual(item.rate_id)
          expect(resultItem?.search_params).toEqual(item.search_params)
          expect(resultItem?.explained_search_params).toEqual(item.explained_search_params)
        })
      })

      it('assigns product answers', () => {
        items.forEach((_item, index) => {
          const resultItem = result.booking.products?.data[index]
          const producAnwersByQuestionId = _.keyBy(answers.products[index].product_anwers, 'question_id')

          expect(resultItem?.product_answers_by_id).toEqual(producAnwersByQuestionId)
        })
      })

      it('assing pax answers', () => {
        items.forEach((_item, index) => {
          const resultItem = result.booking.products?.data[index]
          const productAndPaxAnswers = answers.products[index]

          const productAdultsAnswers = productAndPaxAnswers.adults.map((a) => _.keyBy(a, 'question_id'))
          const productChildrenAnswers = productAndPaxAnswers.children.map((a) => _.keyBy(a, 'question_id'))

          expect(resultItem?.pax_answers_by_pax_type_by_index_by_id.adults).toEqual(productAdultsAnswers)
          expect(resultItem?.pax_answers_by_pax_type_by_index_by_id.children).toEqual(productChildrenAnswers)
        })
      })
    })

    it('assings items', () => {
      expect(result.booking.products?.data).toBeDefined()
      expect(result.booking.products?.on_conflict).not.toBeDefined()
    })
  })

  describe('accepted', () => {
    it('changed booking to accepted', () => {
      const reducedResult = reduceAcceptedWithUpdates({
        id: bookindId,
        version: version,
      }, {
        booking_id: bookindId,
        id: eventId,
        payload: {},
        timestamp: timestamp,
        type: Booking_Events_Event_Type_Enum.Accepted,
        version: eventVersion
      })

      expect(reducedResult).toBeDefined()

      expect(reducedResult.type).toEqual('UPDATE')

      expect(reducedResult.booking).toEqual({
        state: Booking_State_Enum.Accepted,
        last_modified_on: timestamp,
        version: eventVersion
      })
    })
  })

  describe('note-added', () => {
    it('returns a booking with same state', () => {
      const reducedResult = reduceNoteAdded({
        id: bookindId,
        version: version,
      }, {
        booking_id: bookindId,
        id: eventId,
        payload: {
          note: faker.lorem.sentence()
        },
        timestamp: timestamp,
        type: Booking_Events_Event_Type_Enum.NoteAdded,
        version: eventVersion
      })

      expect(reducedResult.type).toEqual('UPDATE')
      expect(reducedResult.booking).toEqual({
        version: eventVersion,
        last_modified_on: timestamp
      })
    })
  })
})

function randomId(): string {
  return faker.random.alphaNumeric(32)
}

function randomBookingQuestionType(): Booking_Question_Type_Enum {
  return faker.helpers.arrayElement([
    Booking_Question_Type_Enum.FreeText,
    Booking_Question_Type_Enum.Numeric,
    Booking_Question_Type_Enum.Select,
  ])
}

function randomBookingQuestionScope(): Booking_Question_Scope_Enum {
  return faker.helpers.arrayElement([
    Booking_Question_Scope_Enum.PerBooking,
    Booking_Question_Scope_Enum.PerPax,
    Booking_Question_Scope_Enum.PerProduct
  ])
}

function randomNumberOf<T>(f: () => T, min = 3, max = 5): T[] {
  return Array(randomInt(min, max)).fill(0).map(f)
}

function exactNumberOf<T>(f: () => T, n: number): T[] {
  return Array(n).fill(0).map(f)
}

function randomAnwsers() {
  return Array(randomInt(3, 5)).fill(0).map(() => ({
    question_id: randomId(),
    value: randomObject()
  }))
}

function randomObject(): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  Array(randomInt(3, 5)).fill(0)
    .forEach(() => {
      result[faker.random.alphaNumeric(7)] = faker.lorem.sentence()
    })

  return result
}
