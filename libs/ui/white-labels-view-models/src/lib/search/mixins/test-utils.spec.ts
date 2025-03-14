import { describe, beforeEach, it, expect, vi, Mock } from 'vitest'

import { delay } from "../../tools"
import { TestStateImplementation } from "./test-utils"

describe('TestUtils', () => {
  let sut: TestStateImplementation

  beforeEach(() => {
    sut = new TestStateImplementation()
  })

  it('is defined', () => {
    expect(sut).toBeDefined()
  })

  describe('properties', () => {

    describe('selectedSupplements', () => {
      it('returns the selected supplements', () => {
        expect(sut.selectedSupplements).toBeTruthy()
      })

      it('can be changed', async () => {
        sut.submitSelectedSupplementsChanges(current => current)
        await delay()
      })
    })

    describe('selectedRate', () => {
      it('returns the selected rate', () => {
        expect(sut.selectedRate).toBeTruthy()
      })

      it('can be changed', async () => {
        sut.submitSelectedRateChanges(current => current)
        await delay()
      })
    })

    describe('searchResult', () => {
      it('returns the search result', () => {
        expect(sut.searchResult).toBeTruthy()
      })

      it('can be changed', async () => {
        sut.submitSearchResultChanges(current => current)
        await delay()
      })
    })

  })
})