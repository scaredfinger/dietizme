import { describe, test, expect, it } from 'vitest'

import { constantCase } from './constantCase';

describe('constantCase', () => {
  it('should convert camelCase to CONSTANT_CASE', () => {
    expect(constantCase('camelCase')).toBe('CAMEL_CASE');
    expect(constantCase('anotherCamelCase')).toBe('ANOTHER_CAMEL_CASE');
  });

  it('should convert PascalCase to CONSTANT_CASE', () => {
    expect(constantCase('PascalCase')).toBe('PASCAL_CASE');
    expect(constantCase('AnotherPascalCase')).toBe('ANOTHER_PASCAL_CASE');
  });

  it('should handle already uppercase acronyms correctly', () => {
    expect(constantCase('getURL')).toBe('GET_URL');
    expect(constantCase('parseJSON')).toBe('PARSE_JSON');
  });

  it('should handle strings with numbers', () => {
    expect(constantCase('api2Call')).toBe('API2_CALL');
    expect(constantCase('get2ndItem')).toBe('GET2ND_ITEM');
  });

  it('should handle edge cases', () => {
    expect(constantCase('')).toBe('');
    expect(constantCase('a')).toBe('A');
    expect(constantCase('alllowercase')).toBe('ALLLOWERCASE');
    expect(constantCase('ALLUPPERCASE')).toBe('ALLUPPERCASE');
  });
});
