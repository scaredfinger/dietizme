import { describe, expect, it } from 'vitest'

import {
  createBookingId,
  createEventId,
  createLength4Id,
  createLength6Id,
} from './id-generators'

describe('ID Generators', () => {
  describe('createBookingId', () => {
    it('should generate a booking ID with the correct format', () => {
      const id = createBookingId()
      // Format should be XXX-NNNNNN (where X is uppercase alpha and N is numeric)
      expect(id).toMatch(/^[A-Z]{3}-\d{6}$/)
    })

    it('should generate unique booking IDs', () => {
      const ids = new Set()
      for (let i = 0; i < 10; i++) {
        ids.add(createBookingId())
      }
      expect(ids.size).toBe(10)
    })
  })

  describe('createEventId', () => {
    it('should generate an event ID with the correct format', () => {
      const id = createEventId()
      expect(id).toMatch(/^\d+-[a-z0-9]{8}$/)
    })
  })

  describe('createLength4Id', () => {
    it('should generate an ID with 4 alphanumeric characters', () => {
      const id = createLength4Id()
      expect(id).toMatch(/^[a-zA-Z0-9]{4}$/)
    })

    it('should prepend a prefix if provided', () => {
      const id = createLength4Id('test')
      expect(id).toMatch(/^test-[a-zA-Z0-9]{4}$/)
    })
  })

  describe('createLength6Id', () => {
    it('should generate an ID with 6 alphanumeric characters', () => {
      const id = createLength6Id()
      expect(id).toMatch(/^[a-zA-Z0-9]{6}$/)
    })
  })
})
