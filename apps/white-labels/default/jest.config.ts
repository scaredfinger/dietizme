/* eslint-disable */
export default {
  displayName: 'white-labels-default',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': [
      'ts-jest', 
      { 
        tsconfig: '<rootDir>/tsconfig.spec.json' 
      }
    ],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: 'build/coverage',
}
