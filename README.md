# DietizMe

A TypeScript-based monorepo application for diet and nutrition management.

## Project Overview

DietizMe is built using a modular architecture with a focus on maintainability and scalability. The project uses Nx for workspace management and follows domain-driven design principles with a clear separation of concerns.

## Directory Structure

```
dietizme/
├── apps/                # Application modules
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
└── rigs/                # Configuration templates
```

## Technology Stack

- **Build System**: [Nx](https://nx.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Language**: TypeScript
- **Backend**: [Nhost](https://nhost.io/) (Hasura/GraphQL/PostgreSQL)
- **Data Source**: Omnidata (via GraphQL)
- **Testing**: Vitest
- **Containerization**: Docker

## Library Documentation

### Business Logic
- [Biz Builder](/libs/biz-builder/README.md) - Fluent API for structuring business operations

### Domain Modules
- [Domain Overview](/libs/domain/README.md) - Core domain models and types
- [Omnidata Types](/libs/domain/omnidata-types/README.md) - Generated GraphQL types for Omnidata

### Utilities
- [Common Utils](/libs/utils/common/README.md) - Shared utility functions
- [GraphQL Utils](/libs/utils/graphql/README.md) - GraphQL client and helpers
- [Logging Utils](/libs/utils/logging/README.md) - Logging utilities

## Getting Started

### Prerequisites

1. Install pnpm: `npm install -g pnpm`
2. Install Docker and Docker Compose
3. VSCode with Dev Containers extension (recommended)

### Development Setup

```bash
# Clone the repository
git clone https://github.com/scaredfinger/dietizme.git
cd dietizme

# Install dependencies
pnpm install

# Build all projects
pnpm nx run-many --target build --all

# Start the omnidata backend
pnpm nx dev omnidata
```

See individual project READMEs for detailed documentation.
