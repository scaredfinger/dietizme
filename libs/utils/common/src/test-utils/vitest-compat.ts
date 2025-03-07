/**
 * Vitest compatibility layer for Jest
 * 
 * This provides backward compatibility for Jest mocking APIs
 * Import this file in your test to have access to Jest-like globals
 */

import { 
  afterAll, 
  afterEach, 
  beforeAll, 
  beforeEach, 
  describe, 
  expect, 
  it, 
  vi,
  type MockInstance,
  type SpyInstance
} from 'vitest';

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

// Explicitly define the type for the jest object to avoid reference errors
type JestCompat = {
  mock: typeof vi.mock;
  fn: typeof vi.fn;
  spyOn: typeof vi.spyOn;
  clearAllMocks: typeof vi.clearAllMocks;
  resetAllMocks: typeof vi.resetAllMocks;
};

// Export Jest compatibility layer with proper explicit type
export const jest: JestCompat = {
  mock: vi.mock,
  fn: vi.fn,
  spyOn: vi.spyOn,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
};

// For global usage
declare global {
  // eslint-disable-next-line no-var
  var jest: JestCompat;
}

// Add jest to global for compatibility
globalThis.jest = jest;

// Export a cleanup function to restore original globals
export function cleanupMocks() {
  delete globalThis.jest;
}
