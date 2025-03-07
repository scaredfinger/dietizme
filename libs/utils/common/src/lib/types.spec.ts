import { ArrayElement } from './types'
import { describe, expect, it } from 'vitest'

describe('ArrayElement', () => {
  it('should extract the element type from an array type', () => {
    // Type tests are compile-time, but we can demonstrate usage
    type NumberArray = number[]
    type StringArray = string[]

    // Runtime checks for demonstration
    const testNumber: ArrayElement<NumberArray> = 42
    const testString: ArrayElement<StringArray> = 'test'

    expect(typeof testNumber).toBe('number')
    expect(typeof testString).toBe('string')
  })
})
