import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './libs/utils/logging/vitest.config.ts',
  './libs/utils/common/vitest.config.ts',
  './libs/biz-builder/vitest.config.ts',
])
