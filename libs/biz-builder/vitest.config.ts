import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    name: 'biz-builder',
    globals: true,
    environment: 'node',
    include: ['**/*.{test,spec}.{ts,js}'],
    typecheck: {
      tsconfig: './tsconfig.spec.json',
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './build/coverage',
    },
  },
});
