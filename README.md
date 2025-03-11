# Dietizme

A comprehensive meal planning and nutrition system built with modern web technologies.

## Project Structure

This project is organized as a monorepo using NX and PNPM workspace, providing a scalable architecture for multiple apps and shared libraries.

```
/
├── apps/                  # Frontend and backend applications
│   └── backend/           # Backend services
├── libs/                  # Shared libraries used across apps
│   ├── biz-builder/       # Business logic building utilities
│   ├── domain/            # Core domain models and interfaces
│   └── utils/             # General utilities and helpers
├── .devcontainer/         # Dev container configuration for VSCode
├── nx.json                # NX configuration
├── package.json           # Root package.json with shared dependencies
└── pnpm-workspace.yaml    # PNPM workspace configuration
```

## Development Setup

### Prerequisites

- [VSCode](https://code.visualstudio.com/) with [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)
- SSH configuration in your `~/.ssh` directory
- Docker and Docker Compose

### Local Environment Setup

1. Clone the repository and open it in VSCode
2. Download `.secrets` and `.env` and copy to root directory
3. Add the following entries to your hosts file:

```text
127.0.0.1 host.docker.internal
127.0.0.1 local.auth.nhost.run
127.0.0.1 local.dashboard.nhost.run
127.0.0.1 local.db.nhost.run
127.0.0.1 local.functions.nhost.run
127.0.0.1 local.graphql.nhost.run
127.0.0.1 local.hasura.nhost.run
127.0.0.1 local.storage.nhost.run
```

4. Open the project in a Dev Container using VSCode's "Reopen in Container" option

### Common Commands

Build all projects:
```bash
pnpm nx run-many --target build --all
```

Run development server:
```bash
pnpm nx dev [app-name]  # e.g., pnpm nx dev backend
```

Stop services:
```bash
pnpm nx stop [app-name]
```

Run tests:
```bash
pnpm test-all  # Run tests for all projects
pnpm test      # Run tests for the current project
```

## Workspace Package Management

### Structure

This project uses PNPM workspaces to manage dependencies across multiple packages:

- **Root Dependencies**: Common dev tools and framework dependencies 
- **Package-specific Dependencies**: Each app and library has its own `package.json`

### Dependency Management

#### Adding Dependencies

To add a dependency to a specific package:

```bash
cd path/to/package
pnpm add [package-name]
```

To add a dependency to the root project:

```bash
pnpm add -w [package-name]
```

#### Workspace References

To use one workspace package from another:

1. Add the dependency in the package's `package.json`:

```json
"dependencies": {
  "@dietizme/utils": "workspace:*"
}
```

2. Import the package in your code:

```typescript
import { someFunction } from '@dietizme/utils';
```

### Dependency Updates

This project uses GitHub's Dependabot to keep dependencies up-to-date:

- Dependencies are checked weekly (every Monday)
- Minor and patch updates are auto-merged if tests pass
- Major updates require manual review

## Project Conventions

### Component Structure

Components are organized following this pattern:

```
components/
├── [category]/
│   ├── SimpleComponent.tsx
│   └── ComplexComponent/
│       ├── components/
│       │   ├── InnerPiece1.tsx
│       │   └── InnerPiece2.tsx
│       └── index.tsx
```

### Page Structure

Pages follow this structure:

```
pages/
├── some_page/
│   ├── _deps/            # Dependencies specific to this page
│   │   ├── components/
│   │   ├── data-source/
│   │   │   └── query.graphql
│   │   ├── server.ts
│   │   └── types.ts
│   ├── some_nested_page/
│   └── index.page.tsx
```

## Troubleshooting

If you encounter permission issues:
```bash
./fix-permissions.sh
```

To clean up resources:
```bash
./clean-up.sh
```

### Common Issues

1. **'jsx' is not exported by node_modules**:  
   Solution: Add commonjs import in rollup: `import commonjs from '@rollup/plugin-commonjs';`

2. **'React' refers to a UMD global**:  
   Solution: Use `"jsx": "react-jsx"` or explicitly import React: `import React from 'react'`

3. **Module not found: ESM packages need to be imported**:  
   Solution: Use 'import' to reference the package instead of require.  
   See: https://nextjs.org/docs/messages/import-esm-externals

## Additional Resources

- [NX Documentation](https://nx.dev/getting-started/intro)
- [PNPM Workspace Guide](https://pnpm.io/pnpm-workspace_yaml)
- [TypeScript ESLint Setup](https://typescript-eslint.io/getting-started/)
