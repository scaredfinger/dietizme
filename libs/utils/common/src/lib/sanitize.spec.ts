import { sanitizeInput } from './sanitize'
import { describe, expect, it } from 'vitest'

describe('sanitizeInput', () => {
  it('should remove __typename property from objects', () => {
    const input = {
      id: 1,
      name: 'Test',
      __typename: 'TestType',
      nested: {
        id: 2,
        __typename: 'NestedType',
      },
    }

    const expected = {
      id: 1,
      name: 'Test',
      nested: {
        id: 2,
      },
    }

    expect(sanitizeInput(input)).toEqual(expected)
  })

  it('should handle arrays of objects', () => {
    const input = [
      { id: 1, __typename: 'Type1' },
      { id: 2, __typename: 'Type2' },
    ]

    const expected = [{ id: 1 }, { id: 2 }]

    expect(sanitizeInput(input)).toEqual(expected)
  })

  it('should return primitive values as is', () => {
    expect(sanitizeInput(123)).toBe(123)
    expect(sanitizeInput('test')).toBe('test')
    expect(sanitizeInput(null)).toBe(null)
    expect(sanitizeInput(undefined)).toBe(undefined)
  })
})
