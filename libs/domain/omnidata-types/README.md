# Omnidata Types

A TypeScript library providing strongly-typed interfaces for Omnidata GraphQL API integration.

## Overview

This library contains automatically generated TypeScript types derived from the Omnidata GraphQL schema. It enables type-safe interaction with the Omnidata API throughout the DietizMe application.

## Usage

Import the generated types for use in your GraphQL operations:

```typescript
import { 
  MyQueryQuery, 
  MyQueryQueryVariables, 
  SomeEntityFragment 
} from '@dietizme/domain-omnidata-types';

// Use with GraphQL client
const result = await client.query<MyQueryQuery, MyQueryQueryVariables>({
  query: MY_QUERY,
  variables: { id: 'some-id' }
});

// Access type-safe results
const entity = result.data.someEntity;
```

## Structure

- `/src/generated/` - Contains the auto-generated TypeScript types
- `schema.graphql` - The complete Omnidata GraphQL schema

## Generation Process

Types are generated using [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) based on the schema.graphql file. The generation is configured in `graphql-codegen.yaml`.

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Building

```bash
# Generate types from schema
nx build domain-omnidata-types
```

### Notes

- Do not manually edit files in the `/src/generated/` directory
- When the Omnidata schema changes, update `schema.graphql` and rebuild

## Testing

```bash
nx test domain-omnidata-types
```
