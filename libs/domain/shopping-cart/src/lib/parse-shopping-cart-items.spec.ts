import { DateValue } from '@otiuming/domain-data-types'
import { parseShoppingCartItems } from './parse-shopping-cart-items'
import { NewExplainedSearchParams, PerPaxUnitSelection, TimeSlotSelection } from './types'

// import dailyPerResouce from './daily-per-resource.spec.json'
// import timeSlotsPerPax from './time-slots-per-pax.spec.json'
import newFormat from './new-format.spec.json'

describe('parseShoppingCartItems', () => {
 
  it('is defined', () => {
    expect(parseShoppingCartItems).toBeDefined()
  })

  describe('new format', () => {
    it('parses', () => {
      const parsed = parseShoppingCartItems(JSON.stringify(newFormat))

      parsed.forEach((parsedItem, i) => {
        const explainedSearchParams = parsedItem.explainedSearchParams as NewExplainedSearchParams
        expect(explainedSearchParams.dateTimeSelection.type).toEqual('time-slot-selection')
        expect(explainedSearchParams.unitSelection.type).toEqual('per-pax')

        const rawItem = newFormat[i]
        const rawExplainedSearchParams = rawItem.explainedSearchParams

        expect(parsedItem.title).toEqual(rawItem.title)
        expect(parsedItem.description).toEqual(rawItem.description)
        expect(parsedItem.price).toEqual(rawItem.price)
        expect(parsedItem.image).toEqual(rawItem.image)
        expect(parsedItem.rateId).toEqual(rawItem.rateId)
        expect(parsedItem.searchParams).toEqual(rawItem.searchParams)

        const unitSelection = explainedSearchParams.unitSelection as PerPaxUnitSelection
        expect(unitSelection.units).toEqual(rawExplainedSearchParams.unitSelection.units)

        const timeSlotSelection = explainedSearchParams.dateTimeSelection as TimeSlotSelection
        expect(timeSlotSelection.date).toBeInstanceOf(DateValue)
        expect(timeSlotSelection.date.toJSON()).toEqual(rawExplainedSearchParams.dateTimeSelection.date)
        expect(timeSlotSelection.timeSlot).toEqual(rawExplainedSearchParams.dateTimeSelection.timeSlot)
      })
    
    })
  })

})
