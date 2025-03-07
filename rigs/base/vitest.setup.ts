import '@testing-library/jest-dom/vitest';

// Add any global test setup here

// Add a global fail function (similar to Jest's behavior but using Vitest's expect)
(global as any).fail = (reason = 'fail was called in a test.') => {
  throw new Error(reason);
};
