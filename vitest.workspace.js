import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './libs/biz-builder/vitest.config.ts',
  
  './libs/domain/bookings/vitest.config.ts',
  './libs/domain/data-types/vitest.config.ts',
  './libs/domain/rates/vitest.config.ts',
  './libs/domain/shopping-cart/vitest.config.ts',
  './libs/domain/templates/vitest.config.ts',

  './libs/utils/logging/vitest.config.ts',
  './libs/utils/common/vitest.config.ts',
  './libs/utils/graphql/vitest.config.ts',

  './libs/integration-tests/vitest.config.ts',
])
