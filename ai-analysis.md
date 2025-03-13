# AI Analysis - Dietizme Root

## Project Overview
Dietizme is a meal planning system using hierarchical food categories, recipes, and meal templates to generate nutritionally balanced meal plans.

## Repository Structure
- **Type**: Monorepo using NX
- **Package Manager**: pnpm with workspace support
- **Main Language**: TypeScript

## Key Directories
- `/apps` - Application projects
- `/libs` - Shared libraries
  - `/libs/biz-builder` - Business logic components
  - `/libs/domain` - Core domain models
  - `/libs/utils` - Various utilities
    - `/libs/utils/common` - Common utilities
    - `/libs/utils/graphql` - GraphQL utilities
    - `/libs/utils/logging` - Logging utilities

## Main Dependencies
- NX: Monorepo build system
- TypeScript: Programming language
- Vitest: Testing framework (replaced Jest)
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

## Development Workflow
1. Run `pnpm nx run-many --target build --all` to build all projects
2. For specific projects, use `pnpm nx build [project-name]`
3. For testing, use `pnpm nx test [project-name]`

## Notes for AI Assistants
- Check individual project ai-analysis.md files for specific details
- This is a relatively new project (created March 2025)
- Uses conventional commits (feat, fix, chore, etc.) and standard branch naming
- Has Dependabot configured for automated dependency updates
