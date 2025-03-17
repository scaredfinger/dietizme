# Utility Libraries

This directory contains utility libraries that provide common functionality used across the DietizMe application. These utilities are designed to be reusable, well-tested, and focused on specific concerns.

## Directory Structure

```
utils/
├── common/     # Common utility functions and helpers
├── graphql/    # GraphQL client and utilities
└── logging/    # Logging infrastructure
```

## Utility Modules

### [common](./common/README.md)

General-purpose utilities that don't fit into more specific categories:

- String manipulation and formatting
- Date/time operations
- Collection helpers (beyond what lodash provides)
- Type conversion and validation
- Environment configuration

### [graphql](./graphql/README.md)

Utilities for working with GraphQL:

- Type-safe GraphQL client
- Query execution and caching
- Error handling
- Response normalization
- Integration with the Omnidata backend

### [logging](./logging/README.md)

Logging infrastructure:

- Structured logging
- Log levels and filtering
- Context-aware logging
- Performance tracking
- Integration with monitoring systems

## Design Principles

The utility libraries follow these principles:

1. **Single Responsibility**: Each utility focuses on doing one thing well
2. **Immutability**: Functions don't modify their inputs
3. **Type Safety**: Comprehensive TypeScript typing
4. **Testing**: High test coverage for reliability
5. **Documentation**: Clear documentation with examples
6. **Performance**: Attention to performance implications
7. **No Side Effects**: Pure functions where possible

## Usage Guidelines

- Prefer composing existing utilities over creating new ones
- Keep dependencies minimal
- Document any complex algorithms or patterns
- Include examples in documentation
- Write thorough tests
- Avoid circular dependencies between utility modules

## Dependencies

The utility libraries have minimal external dependencies to keep the application lightweight and maintainable. Common dependencies include:

- lodash for common collection operations
- date-fns for date manipulation
- zod for schema validation
- urql for GraphQL operations

## Testing

Each utility module has its own test suite:

```bash
# Test a specific utility module
nx test utils-common

# Test all utility modules
nx run-many --target=test --projects=utils-*
```

## Examples

### Using GraphQL utilities

```typescript
import { createClient } from '@dietizme/utils/graphql';
import { MyQuery } from '@dietizme/domain-omnidata-types';

const client = createClient({
  url: 'https://api.omnidata.example',
  headers: { Authorization: `Bearer ${token}` }
});

const { data, error } = await client.query(MyQuery, { id: 'some-id' });
```

### Using logging utilities

```typescript
import { createLogger } from '@dietizme/utils/logging';

const logger = createLogger({
  module: 'shopping-cart',
  level: 'info'
});

logger.info('Cart updated', { cartId: 'cart-123', itemCount: 5 });
```

### Using common utilities

```typescript
import { formatCurrency, parseDate } from '@dietizme/utils/common';

const price = formatCurrency(19.99, 'USD');  // "$19.99"
const date = parseDate('2025-03-15', 'yyyy-MM-dd');
```
