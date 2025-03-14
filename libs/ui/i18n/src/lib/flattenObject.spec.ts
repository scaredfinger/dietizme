import { flattenObject } from './translated-app'

describe('flattenObject', () => {
  it('does not modify flat objects', () => {
    const expected = { a: 1, b: 'b' }
    const actual = flattenObject(expected)

    expect(actual).toEqual(expected)
  })

  it('does not modify primitives', () => {
    const expected = 1
    const actual = flattenObject(expected)

    expect(actual).toEqual(expected)
  })

  it('flattens', () => {
    const expected = { nested: { a: 1, superNested: { a: 1 } } }

    const actual = flattenObject(expected)

    expect(actual).toEqual({
      'nested.a': 1,
      'nested.superNested.a': 1,
    })
  })
})
