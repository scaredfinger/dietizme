import { defineConfig } from 'vitest/config'

import packageJson from './package.json'

export default defineConfig({
  test: {
    name: packageJson.name,
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
})
