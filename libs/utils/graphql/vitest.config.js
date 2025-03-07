import { defineConfig } from 'vitest/config';
export default defineConfig({
    test: {
        name: 'utils-graphql',
        globals: true,
        environment: 'node',
        include: ['**/*.{test,spec}.{ts,js}'],
        setupFiles: ['./test-setup.ts'],
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
//# sourceMappingURL=vitest.config.js.map