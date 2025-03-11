import type { Config } from 'jest'

/* eslint-disable */
const config: Config = {
  displayName: 'domain-bookings',
  preset: '../../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.ts$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
      },
    ],
  },
  coverageDirectory: 'build/coverage',
}

export default config
