import { DateTime } from 'luxon';
import { beforeEach, describe, expect, it } from 'vitest';

import { DateValue, dateValue, addDays, buildDate, DateRange } from './dates';
import { ALL_EXACT_HOURS } from './hours';

describe('DateValue', () => {
  const testIsoString = '2023-05-15T10:30:00';
  const testDateTime = DateTime.fromISO(testIsoString);
  let testDate: DateValue;

  beforeEach(() => {
    testDate = dateValue(testIsoString);
  });

  describe('constructor and dateValue factory', () => {
    it('should create a DateValue from string', () => {
      const date = dateValue(testIsoString);
      expect(date.toJSON()).toContain('2023-05-15');
    });

    it('should create a DateValue from DateTime', () => {
      const date = dateValue(testDateTime);
      expect(date.toJSON()).toContain('2023-05-15');
    });

    it('should create a DateValue for current time when no value provided', () => {
      const now = DateTime.now();
      const date = dateValue();
      // Allow some milliseconds of difference between test execution
      expect(DateTime.fromISO(date.toJSON()).diff(now).milliseconds).toBeLessThan(1000);
    });
  });

  describe('addDays', () => {
    it('should add days to date', () => {
      const result = testDate.addDays(5);
      expect(result.format('yyyy-MM-dd')).toBe('2023-05-20');
    });

    it('should subtract days when given negative value', () => {
      const result = testDate.addDays(-5);
      expect(result.format('yyyy-MM-dd')).toBe('2023-05-10');
    });
    
    it('should handle month/year boundaries', () => {
      const endOfMonth = dateValue('2023-05-31T12:00:00');
      const result = endOfMonth.addDays(1);
      expect(result.format('yyyy-MM-dd')).toBe('2023-06-01');
    });
  });

  describe('toJSON', () => {
    it('should format date as ISO string', () => {
      expect(testDate.toJSON()).toBe('2023-05-15T10:30:00');
    });
  });

  describe('format', () => {
    it('should format date according to provided format string', () => {
      expect(testDate.format('YYYY-MM-DD')).toBe('2023-05-15');
      expect(testDate.format('DD/MM/YYYY')).toBe('15/05/2023');
    });
  });

  describe('setExactHour', () => {
    it('should set the hour while preserving the date', () => {
      const result = testDate.setExactHour('08:00');
      expect(result.format('yyyy-MM-dd\'T\'HH:mm')).toBe('2023-05-15T08:00');
    });
  });
});

describe('DateRange', () => {
  it('should correctly represent a range of dates', () => {
    const from = dateValue('2023-05-01T00:00:00');
    const to = dateValue('2023-05-10T00:00:00');
    const range: DateRange = { from, to };
    
    expect(range.from.format('yyyy-MM-dd')).toBe('2023-05-01');
    expect(range.to.format('yyyy-MM-dd')).toBe('2023-05-10');
  });
});

describe('Utility functions', () => {
  describe('addDays', () => {
    it('should add days using the class method', () => {
      const date = dateValue('2023-05-15T00:00:00');
      const result = addDays(date, 3);
      expect(result.format('yyyy-MM-dd')).toBe('2023-05-18');
    });
  });

  describe('buildDate', () => {
    it('should set exact hour using numeric index', () => {
      const date = dateValue('2023-05-15T10:30:00');
      const result = buildDate(date, 2); // Assuming ALL_EXACT_HOURS[2] exists
      expect(result.format('HH:mm')).toBe(ALL_EXACT_HOURS[2].split(':')[0] + ':' + ALL_EXACT_HOURS[2].split(':')[1]);
    });

    it('should set exact hour using string hour', () => {
      const date = dateValue('2023-05-15T10:30:00');
      const result = buildDate(date, '14:00');
      expect(result.format('HH:mm')).toBe('14:00');
    });
  });
});

// Test helpers
describe('Internal helper functions', () => {
  // We can't directly test private functions, but we can test their
  // behavior through the public API
  
  it('should handle exact hour conversion correctly', () => {
    const date1 = dateValue('2023-05-15T00:00:00');
    const date2 = buildDate(date1, '09:00');
    expect(date2.format('HH:mm')).toBe('09:00');
  });
  
  it('should handle numeric hour indices correctly', () => {
    const date = dateValue('2023-05-15T00:00:00');
    
    // Test first, middle, and last hours from the array
    const firstHour = buildDate(date, 0);
    const middleIndex = Math.floor(ALL_EXACT_HOURS.length / 2);
    const middleHour = buildDate(date, middleIndex);
    const lastHour = buildDate(date, ALL_EXACT_HOURS.length - 1);
    
    expect(firstHour.format('HH:mm')).toBe(ALL_EXACT_HOURS[0].split(':')[0] + ':' + ALL_EXACT_HOURS[0].split(':')[1]);
    expect(middleHour.format('HH:mm')).toBe(ALL_EXACT_HOURS[middleIndex].split(':')[0] + ':' + ALL_EXACT_HOURS[middleIndex].split(':')[1]);
    expect(lastHour.format('HH:mm')).toBe(ALL_EXACT_HOURS[ALL_EXACT_HOURS.length - 1].split(':')[0] + ':' + ALL_EXACT_HOURS[ALL_EXACT_HOURS.length - 1].split(':')[1]);
  });
});
