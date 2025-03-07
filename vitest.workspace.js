import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./libs/biz-builder/vitest.config.ts",
  "./libs/utils/graphql/vitest.config.ts",
  "./libs/utils/common/vitest.config.ts",
  "./libs/utils/logging/vitest.config.ts"
])
