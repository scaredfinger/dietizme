import { describe, expect, it } from 'vitest'

import { camelCase } from './camelCase';

describe('camelCase', () => {
  it('should convert CONSTANT_CASE to camelCase', () => {
    expect(camelCase('CONSTANT_CASE')).toBe('constantCase');
    expect(camelCase('ANOTHER_CONSTANT')).toBe('anotherConstant');
  });

  it('should convert PascalCase to camelCase', () => {
    expect(camelCase('PascalCase')).toBe('pascalCase');
    expect(camelCase('AnotherPascalCase')).toBe('anotherPascalCase');
  });

  it('should handle kebab-case conversion', () => {
    expect(camelCase('kebab-case')).toBe('kebabCase');
    expect(camelCase('another-kebab-case')).toBe('anotherKebabCase');
  });

  it('should handle strings with numbers', () => {
    expect(camelCase('API_2_CALL')).toBe('api2Call');
    expect(camelCase('get-2nd-item')).toBe('get2ndItem');
  });

  it('should handle edge cases', () => {
    expect(camelCase('')).toBe('');
    expect(camelCase('a')).toBe('a');
    expect(camelCase('alllowercase')).toBe('alllowercase');
    expect(camelCase('ALLUPPERCASE')).toBe('alluppercase');
  });
  
  it('should preserve existing camelCase', () => {
    expect(camelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });
});
