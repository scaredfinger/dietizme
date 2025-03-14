import { describe, beforeEach, it, expect, vi } from 'vitest'
import { MonadicMap } from './monadic-map'

describe('MonadicMap', () => {
  let sut: MonadicMap<string, number>

  beforeEach(() => {
    sut = new MonadicMap<string, number>()
  })

  it('can be created', () => {
    expect(sut).toBeTruthy()
  })

  it('returns Optional None when key is not found', () => {
    expect(sut.get('foo').isNone()).toBe(true)
  })

  it('returns Optional Some when key is found', () => {
    sut.set('foo', 42)
    expect(sut.get('foo').isSome()).toBe(true)
  })

  it('can map values', () => {
    sut.set('foo', 42)
    const result = sut.mapValues((v) => v + 1)
    expect(result[0]).toBe(43)
  })

  describe('when created from collection', () => {
    beforeEach(() => {
      sut = new MonadicMap<string, number>([
        ['foo', 42],
        ['bar', 43],
      ])
    })

    it('returns them as values', () => {
      for (const value of sut) {
        expect(value).toBeTruthy()
      }
    })

    it('returns them as values', () => {
      expect(sut.values()).toEqual([42, 43])
    })

    it('executes with forEach', () => {
      const callback = vi.fn()
      sut.forEach(callback)
      expect(callback).toHaveBeenCalledTimes(2)
    })
  })
})
