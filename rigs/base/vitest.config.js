import { defineConfig } from 'vitest/config';
import { fileURLToPath } from 'url';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['**/*.test.js'],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    // Fix for ES module compatibility
    sequence: {
      setupFiles: 'serial',
    },
    testTimeout: 10000,
  },
  resolve: {
    // Ensure ES modules work properly
    conditions: ['import', 'node', 'default'],
  },
});
