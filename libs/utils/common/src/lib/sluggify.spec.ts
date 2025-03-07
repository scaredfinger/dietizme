import { describe, expect, it } from 'vitest'

import { sluggify } from './sluggify'

describe('sluggify', () => {
  it('should replace German special characters correctly', () => {
    expect(sluggify('Schön ärgere übel Öl grüß Gott!')).toBe(
      'schon-argere-ubel-ol-gruss-gott',
    )
  })

  it('should replace Spanish special characters correctly', () => {
    expect(sluggify('Niño jugó bajo el sol cálido')).toBe(
      'nino-jugo-bajo-el-sol-calido',
    )
  })

  it('should replace French special characters correctly', () => {
    expect(sluggify('Allô, où êtes-vous?')).toBe('allo-ou-etes-vous')
  })

  it('should handle multiple replacements and remove non-alphanumeric characters', () => {
    expect(sluggify('This & that @ the other!')).toBe('this-that-the-other')
  })

  it('should convert to lowercase', () => {
    expect(sluggify('CAPITAL LETTERS')).toBe('capital-letters')
  })

  it('should remove leading and trailing hyphens', () => {
    expect(sluggify('---leading and trailing---')).toBe('leading-and-trailing')
  })

  it('should replace multiple adjacent special characters with a single hyphen', () => {
    expect(sluggify('Hey!!! You there???')).toBe('hey-you-there')
  })

  it('should handle empty strings correctly', () => {
    expect(sluggify('')).toBe('')
  })

  it('should handle strings with only non-alphanumeric characters', () => {
    expect(sluggify('@@@***!!!')).toBe('')
  })

  it('handles complex and mixed scenarios', () => {
    expect(sluggify('München, größte Stadt, 100% cool!')).toBe(
      'munchen-grosste-stadt-100-cool',
    )
  })
})
