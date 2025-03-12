import base from './node_modules/@otiuming/base/eslint.config.mjs'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...base,
  {
    files: ["*.ts"],
    ignores: ["**/generated.ts"],
  }
]
