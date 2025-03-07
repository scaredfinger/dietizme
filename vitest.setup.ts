import '@testing-library/jest-dom/vitest';
import { vi } from 'vitest';

// Vitest already has expect.extend, so no need to redefine it

// Add a global fail function similar to Jest's
(global as any).fail = (reason = 'fail was called in a test.') => {
  throw new Error(reason);
};

// Important: don't try to reassign jest.mock since it won't work
// Vitest automatically handles module mocking
// Instead, provide a compatibility layer for existing tests
(global as any).jest = {
  fn: vi.fn,
  spyOn: vi.spyOn,
  mock: vi.mock,
  clearAllMocks: vi.clearAllMocks,
  resetAllMocks: vi.resetAllMocks,
  restoreAllMocks: vi.restoreAllMocks,
  useFakeTimers: vi.useFakeTimers,
  useRealTimers: vi.useRealTimers,
  runOnlyPendingTimers: vi.runOnlyPendingTimers,
  runAllTimers: vi.runAllTimers,
  advanceTimersByTime: vi.advanceTimersByTime,
};
