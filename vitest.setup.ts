import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Add Jest compatibility layer for imports
// This allows 'jest.mock()' to work as 'vi.mock()'
globalThis.jest = {
  ...vi,
  mock: vi.mock,
  spyOn: vi.spyOn,
  fn: vi.fn,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
};

// Make sure 'mock' function works as expected in auto-hoisting scenario
const originalMock = vi.mock;

// Add more Jest compatibility as needed
