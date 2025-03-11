/* eslint-disable */
export default {
  displayName: 'domain-templates',
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
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'build/coverage',
}
