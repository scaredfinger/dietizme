import { ALL_EXACT_HOURS, ExactHour } from '@otiuming/domain-data-types'

import { TimeSlotsPerPaxConfiguration } from '../types'

export interface TimeSlots {
  type: 'time-slots'
  slots: TimeSlot[]
}

export interface TimeSlot {
  start: ExactHour
  end: ExactHour
}

export function createTimeSlotsRule({
  durationInHours,
  startingHours,
}: TimeSlotsPerPaxConfiguration): TimeSlots {
  return {
    type: 'time-slots',
    slots: startingHours.map((hour) => ({
      start: ALL_EXACT_HOURS[hour],
      end: ALL_EXACT_HOURS[hour + durationInHours],
    })),
  }
}
