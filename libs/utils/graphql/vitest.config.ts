import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'utils-logging',
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{ts,js}'],
    typecheck: {
      tsconfig: './tsconfig.spec.json',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      reportsDirectory: '../../build/coverage',
    },
  },
});
