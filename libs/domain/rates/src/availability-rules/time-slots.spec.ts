import { describe, it, expect } from 'vitest'
import { createTimeSlotsRule } from './time-slots'

describe('TimeSlots', () => {
  describe('createTimeSlotsRule', () => {
    it('does it', () => {
      const asTimeSlots = createTimeSlotsRule({
        type: 'time-slots-per-pax',
        durationInHours: 3,
        pricePerPerson: 10,
        startingHours: [10, 14],
      })

      expect(asTimeSlots.type).toBe('time-slots')

      expect(asTimeSlots.slots[0].start).toBe('10:00')
      expect(asTimeSlots.slots[0].end).toBe('13:00')

      expect(asTimeSlots.slots[1].start).toBe('14:00')
      expect(asTimeSlots.slots[1].end).toBe('17:00')
    })
  })
})
