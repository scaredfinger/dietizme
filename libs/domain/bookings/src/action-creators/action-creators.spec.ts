import { faker } from '@faker-js/faker'
import { Booking_Events_Event_Type_Enum } from '@otiuming/domain-omnidata-types'

import { create } from './create'
import { createUniqueId } from '../utils'

describe('action-creators', () => {
  it('should work', () => {
    expect(true).toBe(true)
  })

  describe('create', () => {
    it('creates a created event', () => {
      const created = create({
        id: createUniqueId(),
        organization_id: createUniqueId(),
        friendly_id: faker.random.alphaNumeric(10),
        items: [],
        contact: {
          email: faker.internet.email(),
          name: faker.name.fullName(),
        },
        answers: {
          booking: [],
          products: [],
        },
        locale: faker.random.locale(),
      }, {
        id: createUniqueId(),
        email: faker.internet.email(),
        name: faker.company.name(),
        phone_number: faker.phone.number(),
        booking_questions: [],
      }, [{
        id: createUniqueId(),
        price_calendar: [],
        price_rules: [],
      }])

      expect(created.type).toBe(Booking_Events_Event_Type_Enum.Created)
    })
  })
})