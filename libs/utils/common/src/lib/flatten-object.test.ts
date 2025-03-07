import { describe, test, expect } from 'vitest'

import { flattenObject } from './flatten-object'

describe('flattenObject', () => {
  test('should return empty object when input is empty', () => {
    expect(flattenObject({})).toEqual({})
  })

  test('should return the same object when there are no nested properties', () => {
    const input = { a: 1, b: 'string', c: 3 }
    const expected = { a: 1, b: 'string', c: 3 }
    expect(flattenObject(input)).toEqual(expected)
  })

  test('should flatten a nested object', () => {
    const input = {
      a: 1,
      b: {
        c: 2,
        d: 'string',
      },
    }
    const expected = {
      a: 1,
      'b.c': 2,
      'b.d': 'string',
    }
    expect(flattenObject(input)).toEqual(expected)
  })

  test('should flatten deeply nested objects', () => {
    const input = {
      a: {
        b: {
          c: {
            d: 'value',
          },
        },
      },
    }
    const expected = {
      'a.b.c.d': 'value',
    }
    expect(flattenObject(input)).toEqual(expected)
  })

  test('should handle mixed nested and non-nested properties', () => {
    const input = {
      a: 1,
      b: {
        c: 2,
        d: {
          e: 'string',
        },
      },
      f: 3,
    }
    const expected = {
      a: 1,
      'b.c': 2,
      'b.d.e': 'string',
      f: 3,
    }
    expect(flattenObject(input)).toEqual(expected)
  })

  test('should use provided prefix', () => {
    const input = {
      a: 1,
      b: {
        c: 2,
      },
    }
    const expected = {
      'prefix.a': 1,
      'prefix.b.c': 2,
    }
    expect(flattenObject(input, 'prefix')).toEqual(expected)
  })

  test('should handle arrays as objects with numeric keys', () => {
    const input = {
      a: [1, 2, 3],
      b: {
        c: ['x', 'y'],
      },
    }
    const expected = {
      'a.0': 1,
      'a.1': 2,
      'a.2': 3,
      'b.c.0': 'x',
      'b.c.1': 'y',
    }
    expect(flattenObject(input)).toEqual(expected)
  })

  test('should handle null and undefined values', () => {
    const input = {
      a: null,
      b: undefined,
      c: {
        d: null,
      },
    }
    const expected = {
      a: null,
      b: undefined,
      'c.d': null,
    }
    expect(flattenObject(input)).toEqual(expected)
  })
})
