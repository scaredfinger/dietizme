import base from './node_modules/@dietizme/base/eslint.config.mjs'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  {
    files: ["*.ts"],
  }
]

