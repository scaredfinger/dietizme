# GraphQL Utilities

A comprehensive set of utilities for working with GraphQL in the Otiuming application. This library provides a type-safe, efficient, and flexible approach to GraphQL communication, particularly with the Omnidata backend.

## Features

- **Type-safe GraphQL client**: Fully typed requests and responses
- **Request handling**: Batching, caching, and error management
- **Authentication**: Token management and request authorization
- **Normalization**: Standardized response handling
- **Testing utilities**: Mock GraphQL responses for testing
- **Omnidata integration**: Specialized utilities for the Omnidata GraphQL API

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/utils-graphql": "workspace:*"
  }
}
```

## Core Components

### GraphQL Client

```typescript
import { createClient, gql } from '@otiuming/utils-graphql';
import type { MyQueryQuery, MyQueryQueryVariables } from '@otiuming/domain-omnidata-types';

// Create a client
const client = createClient({
  url: 'https://api.omnidata.example/graphql',
  headers: {
    Authorization: `Bearer ${token}`
  }
});

// Define a query (or import from a .graphql file)
const MY_QUERY = gql`
  query MyQuery($id: ID!) {
    item(id: $id) {
      id
      name
      description
    }
  }
`;

// Execute a fully typed query
const { data, error, loading } = await client.query<MyQueryQuery, MyQueryQueryVariables>(
  MY_QUERY,
  { id: 'item-123' }
);
```

### Hooks and Utilities

```typescript
import { useMutation, useQuery } from '@otiuming/utils-graphql';

// React hook for queries
function MyComponent() {
  const { data, error, loading, refetch } = useQuery(MY_QUERY, { 
    variables: { id: 'item-123' },
    skip: !isReady,
    pollInterval: 5000
  });
  
  // Use the data
  return loading ? <Loader /> : <ItemDisplay item={data?.item} />;
}

// React hook for mutations
function EditForm() {
  const [updateItem, { loading }] = useMutation(UPDATE_ITEM_MUTATION);
  
  const handleSubmit = async (formData) => {
    try {
      const result = await updateItem({
        variables: { id: 'item-123', input: formData }
      });
      
      // Success handling
    } catch (error) {
      // Error handling
    }
  };
  
  return <Form onSubmit={handleSubmit} disabled={loading} />;
}
```

### Advanced Features

#### Normalized Caching

```typescript
import { createNormalizedClient } from '@otiuming/utils-graphql';

const client = createNormalizedClient({
  url: 'https://api.omnidata.example/graphql',
  cacheConfig: {
    // Entity identification
    typePolicies: {
      Recipe: {
        keyFields: ['id']
      }
    }
  }
});

// Cache is automatically updated and normalized
const { data } = await client.query(GET_RECIPE, { id: 'recipe-123' });

// Updates local cache optimistically
await client.mutate(UPDATE_RECIPE, {
  variables: { id: 'recipe-123', name: 'New Name' },
  optimisticResponse: {
    updateRecipe: {
      id: 'recipe-123',
      name: 'New Name',
      __typename: 'Recipe'
    }
  }
});
```

#### Batching and Deduplication

```typescript
import { createBatchedClient } from '@otiuming/utils-graphql';

const client = createBatchedClient({
  url: 'https://api.omnidata.example/graphql',
  batchInterval: 10, // ms
  maxBatchSize: 10
});

// These will be batched into a single request if made within the batch interval
const promise1 = client.query(QUERY_A, { id: 'a' });
const promise2 = client.query(QUERY_B, { id: 'b' });
const promise3 = client.query(QUERY_A, { id: 'a' }); // Will be deduplicated

const [resultA, resultB] = await Promise.all([promise1, promise2]);
```

#### Error Handling

```typescript
import { 
  handleGraphQLErrors, 
  isNetworkError,
  getErrorMessage
} from '@otiuming/utils-graphql';

try {
  const result = await client.query(MY_QUERY, { id: 'item-123' });
  
  if (result.error) {
    handleGraphQLErrors(result.error, {
      onValidationError: (errors) => {
        // Handle validation errors
      },
      onAuthError: () => {
        // Handle authentication errors
      },
      onNetworkError: () => {
        // Handle network errors
      }
    });
  }
} catch (error) {
  if (isNetworkError(error)) {
    // Handle network errors
  } else {
    console.error(getErrorMessage(error));
  }
}
```

#### Omnidata Integration

```typescript
import { createOmnidataClient } from '@otiuming/utils-graphql';

// Client specifically configured for Omnidata
const client = createOmnidataClient({
  token: userToken,
  environment: 'production'
});

// Use generated operations from omnidata-types
import { GetRecipeDocument } from '@otiuming/domain-omnidata-types';

const { data } = await client.query(GetRecipeDocument, { id: 'recipe-123' });
```

## Testing

### Mock Client

```typescript
import { createMockClient } from '@otiuming/utils-graphql/testing';

// Create a client with predefined responses
const mockClient = createMockClient({
  [MY_QUERY]: {
    data: {
      item: { id: 'mocked-id', name: 'Mocked Item' }
    }
  }
});

// Use in tests
test('component displays item data', async () => {
  render(<MyComponent client={mockClient} />);
  
  await screen.findByText('Mocked Item');
  // Assertions...
});
```

## Development

### Testing

```bash
# Run unit tests
nx test utils-graphql
```

### Adding Operations

When adding new GraphQL operations:

1. Define the operation in a .graphql file or using the `gql` tag
2. Generate TypeScript types using GraphQL Code Generator
3. Ensure proper error handling
4. Add unit tests with mock responses
