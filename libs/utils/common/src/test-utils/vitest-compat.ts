/**
 * Vitest compatibility layer for Jest
 * 
 * This provides backward compatibility for Jest mocking APIs
 * Import this file in your test to have access to Jest-like globals
 */

import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';

// Re-export all Vitest testing functions
export { 
  afterAll, 
  afterEach, 
  beforeAll, 
  beforeEach, 
  describe, 
  expect, 
  it, 
  vi 
};

// Export Jest compatibility layer
export const jest = {
  mock: vi.mock,
  fn: vi.fn,
  spyOn: vi.spyOn,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
  // Add other Jest APIs as needed
};

// For convenient global usage in tests
globalThis.jest = jest;

// Export a cleanup function to restore original globals
export function cleanupMocks() {
  delete globalThis.jest;
}
