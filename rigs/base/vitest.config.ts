/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import path from 'path';

// Determine the path to setup file relative to the project using this config
const setupFilePath = path.resolve(__dirname, './vitest.setup.ts');

export default defineConfig({
  test: {
    globals: true, // This enables describe, it, expect without imports
    environment: 'jsdom',
    include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: [setupFilePath],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    // Match Jest's snapshot format
    snapshotFormat: { 
      escapeString: true, 
      printBasicPrototype: true 
    },
  },
});
