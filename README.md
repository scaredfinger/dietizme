# DietizMe

A TypeScript-based monorepo application for diet and nutrition management.

## Project Overview

DietizMe is built using a modular architecture with a focus on maintainability and scalability. The project uses Nx for workspace management and follows domain-driven design principles with a clear separation of concerns.

## Project Structure

```
dietizme/
├── .devcontainer/       # Development container configuration for VSCode
├── .github/             # GitHub workflows and Dependabot configuration
├── apps/                # Application modules
│   └── backend/         # Backend services
│       ├── functions/   # Serverless functions
│       ├── nhost/       # Nhost configuration
│       └── nhost-config-template/ # Templates for Nhost setup
├── libs/                # Shared libraries
│   ├── biz-builder/     # Business operation builder pattern utility
│   ├── domain/          # Domain-specific modules
│   │   ├── booking-questions/ # Booking questions domain logic
│   │   ├── bookings/    # Bookings domain logic
│   │   ├── data-types/  # Common data type definitions
│   │   ├── omnidata-types/ # Types generated from Omnidata GraphQL schema
│   │   ├── rates/       # Rates and pricing domain logic
│   │   ├── search/      # Search functionality domain logic
│   │   ├── shopping-cart/ # Shopping cart domain logic
│   │   └── templates/   # Templates domain logic
│   ├── integration-tests/ # Integration test utilities
│   └── utils/           # Utility libraries
│       ├── common/      # Common utilities
│       ├── graphql/     # GraphQL-related utilities
│       └── logging/     # Logging utilities
├── rigs/                # Configuration templates
└── ignored/             # Non-versioned files (excluded from Git)
```

## Technology Stack

- **Build System**: [Nx](https://nx.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Language**: TypeScript
- **Backend**: [Nhost](https://nhost.io/) (Hasura/GraphQL/PostgreSQL)
- **Data Source**: Omnidata (via GraphQL)
- **Testing**: Vitest
- **Containerization**: Docker

## Package Dependency Management

### Workspace Structure

The project uses pnpm workspaces to manage the monorepo structure, as defined in `pnpm-workspace.yaml`:

```yaml
packages:
  - 'apps/*'
  - 'libs/**/*'
```

This allows each application and library to have its own dependencies while sharing common packages.

### Dependency Management Strategy

1. **Root Dependencies**: Core development tools and build system dependencies are defined in the root `package.json`

2. **Local Package Dependencies**: Each app and library has its own `package.json` defining:
   - Direct dependencies needed for that module
   - Peer dependencies that should be provided by the consuming app

3. **Dependency Updates**: Managed via GitHub's Dependabot with configuration in `.github/dependabot.yml`
   - Updates are grouped to minimize PR noise
   - Minor and patch updates can be auto-merged
   - Major updates require manual review

### Checking Dependency Health

```bash
# Find unused dependencies
npx depcheck

# Find version mismatches across packages
npx syncpack list-mismatches
```

## Development Setup

### Prerequisites

1. Install pnpm: `npm install -g pnpm`
2. Install Docker and Docker Compose
3. VSCode with Dev Containers extension
4. SSH configuration in `~/.ssh`

### Environment Setup

1. Download `.secrets` and `.env` files (not included in repo) to the root directory
2. Add the following host entries to your host file:

```
127.0.0.1 host.docker.internal
127.0.0.1 local.auth.nhost.run
127.0.0.1 local.dashboard.nhost.run
127.0.0.1 local.db.nhost.run
127.0.0.1 local.functions.nhost.run
127.0.0.1 local.graphql.nhost.run
127.0.0.1 local.hasura.nhost.run
127.0.0.1 local.storage.nhost.run
```

3. Open the project in a Dev Container in VSCode

### Building and Running

Build the entire project:
```bash
pnpm nx run-many --target build --all
```

Run the backend (omnidata):
```bash
pnpm nx dev omnidata
```

Stop the backend:
```bash
pnpm nx stop omnidata
```

Clean all data:
```bash
pnpm nx clean omnidata
```

### Testing

Run tests for a specific module:
```bash
pnpm nx test [module-name]
```

Run all tests:
```bash
pnpm nx run-many --target=test --all
```

## Key Components

### BizBuilder

A fluent API for structuring business operations with validation, context loading, and persistence. It helps organize business logic into a clean, testable pipeline.

Example usage:

```typescript
const result = await using<RequestType, SdkType>(sdk, logger)
  .buildLoadContextVariablesWith(buildLoadContextVariables)
  .loadContextWith(sdk => sdk.loadContext)
  .validateWith(validateRule1, validateRule2)
  .buildPersistVariablesWith(buildPersistVariables)
  .persistWith(sdk => sdk.persistOperation)
  .whenDone(afterPersistAction)
  .execute(request);
```

### Domain Modules

Domain modules encapsulate business logic for specific features such as the shopping cart, bookings, and rates. These are organized in the `libs/domain/` directory.

### Backend

The backend is built using Nhost, which provides:
- Hasura GraphQL API
- PostgreSQL database
- Storage
- Authentication
- Serverless functions

### Omnidata Integration

The project integrates with Omnidata as a data source:
- GraphQL schema from Omnidata is used to generate TypeScript types in `libs/domain/omnidata-types`
- The generated types provide strongly-typed interfaces for API calls
- Integration with the backend is handled through the GraphQL utilities

## Sample Data Generation

Open file `generate-sample-organizations.spec.ts` and run the whole file to generate sample data.

## Troubleshooting

If you encounter permission issues:
```bash
./fix-permissions.sh
```

For cleaning up the environment:
```bash
./clean-up.sh
```

## Common Issues

### 1. 'jsx' is not exported by node_modules
This is because of missing commonjs import in rollup. Add:
```javascript
import commonjs from '@rollup/plugin-commonjs';
```

### 2. 'React' refers to a UMD global
Use `"jsx": "react-jsx"` in tsconfig or import React explicitly:
```javascript
import React from 'react'
```

### 3. Module not found: ESM packages need to be imported
Use 'import' to reference the package instead. See the Next.js documentation: https://nextjs.org/docs/messages/import-esm-externals

## Web Components Structure

For components that have sub-components, create folders with the following structure:

```yaml
components:
  buttons:
    - SimpleButton.tsx
    - ComplexButton:
      components:
        - InnerPiece1.tsx
        - InnerPiece2.tsx
      index.tsx
```

## Additional Resources

- [Rollup](https://rollupjs.org/introduction/)
- [pnpm workspace](https://pnpm.io/pnpm-workspace_yaml)
- [TypeScript ESLint](https://typescript-eslint.io/getting-started/)
- [Prettier](https://prettier.io/docs/en/install)
- [Component Library Setup Guide](https://dev.to/siddharthvenkatesh/component-library-setup-with-react-typescript-and-rollup-onj)
