# AI Analysis - omnidata-types

## Library Overview
The omnidata-types library contains TypeScript type definitions generated from the Omnidata GraphQL schema. It provides strongly-typed interfaces for interacting with Omnidata services.

## Package Details
- **Name**: @otiuming/domain-omnidata-types
- **Type**: TypeScript library
- **Generated**: Yes - types are generated from GraphQL schema

## Key Files
- `schema.graphql` - The full GraphQL schema from Omnidata
- `src/generated/graphql.ts` - Generated TypeScript types from the schema

## Key Functionality
- Provides TypeScript interfaces for all Omnidata GraphQL types
- Includes operation types (queries and mutations)
- Contains input types for API calls
- Defines response types for API responses

## Code Generation
- Uses GraphQL Code Generator to create TypeScript types
- Configuration in `graphql-codegen.yaml`
- Types are generated during the build process

## Integration Points
- Used by application code to interact with Omnidata
- Provides type safety for API calls
- Enables IntelliSense/autocomplete in IDEs
- Used by the GraphQL utils library for strongly-typed operations

## Usage Example
```typescript
import { MyQueryQuery, MyQueryQueryVariables } from '@otiuming/domain-omnidata-types';
import { gqlRequest } from '@otiuming/utils-graphql';

// Strongly-typed request and response
const result = await gqlRequest<MyQueryQuery, MyQueryQueryVariables>(
  MY_QUERY_DOCUMENT,
  { id: 'some-id' }
);
```

## Development Notes
- Do not modify generated files directly
- Update types by updating the schema.graphql file and regenerating
- Run `nx build domain-omnidata-types` to regenerate types
