# AI Analysis - Dietizme Root

## Project Overview
Dietizme is a meal planning system using hierarchical food categories, recipes, and meal templates to generate nutritionally balanced meal plans. It integrates with Omnidata for data access and management.

## Repository Structure
- **Type**: Monorepo using NX
- **Package Manager**: pnpm with workspace support
- **Main Language**: TypeScript

## Key Directories
- `/apps` - Application projects
- `/libs` - Shared libraries
  - `/libs/biz-builder` - Business logic components using a fluent API pattern
  - `/libs/domain` - Core domain models
    - `/libs/domain/bookings` - Booking-related domain models
    - `/libs/domain/booking-questions` - Booking question domain models
    - `/libs/domain/data-types` - Common data type definitions
    - `/libs/domain/omnidata-types` - Types generated from Omnidata GraphQL schema
    - `/libs/domain/rates` - Rate and pricing domain models
    - `/libs/domain/search` - Search functionality domain models
    - `/libs/domain/shopping-cart` - Shopping cart domain models
    - `/libs/domain/templates` - Template domain models
  - `/libs/integration-tests` - Integration test utilities
  - `/libs/utils` - Various utilities
    - `/libs/utils/common` - Common utilities
    - `/libs/utils/graphql` - GraphQL utilities
    - `/libs/utils/logging` - Logging utilities

## Main Dependencies
- NX: Monorepo build system
- TypeScript: Programming language
- Vitest: Testing framework (replaced Jest)
- GraphQL: For API communication with Omnidata
- Various other utilities

## Build System
- NX for task running and dependency management
- Commands in package.json:
  - `build`: `nx build`
  - `build-all`: `nx run-many --target=build --all`
  - `test-all`: `nx run-many --target=test --all`

## Database Design
The system uses PostgreSQL with:
- ltree extension for hierarchical categories
- pgcrypto for UUID generation
- Core tables: categories, recipes, meal_templates, meal_plans

## Omnidata Integration
- The project integrates with Omnidata as a data source
- GraphQL schema from Omnidata is used to generate TypeScript types
- Located in `libs/domain/omnidata-types`

## Development Workflow
1. Run `pnpm nx run-many --target build --all` to build all projects
2. For specific projects, use `pnpm nx build [project-name]`
3. For testing, use `pnpm nx test [project-name]`
4. For Omnidata backend: `pnpm nx dev omnidata` (to start) and `pnpm nx stop omnidata` (to stop)

## Notes for AI Assistants
- Check individual project ai-analysis.md files for specific details
- This is a relatively new project (created March 2025)
- Uses conventional commits (feat, fix, chore, etc.) and standard branch naming
- Has Dependabot configured for automated dependency updates
