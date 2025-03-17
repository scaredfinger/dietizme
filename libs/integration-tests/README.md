# Integration Tests Library

A collection of testing utilities and infrastructure for performing integration tests across the DietizMe application. This library provides tools for testing end-to-end workflows, API integration, and interactions between different application components.

## Features

- **Test Fixtures**: Reusable test data and state
- **Test Helpers**: Utilities to simplify test setup and assertions
- **Mock Services**: Pre-configured mock services for external dependencies
- **Database Utilities**: Tools for database setup and teardown
- **API Client**: Type-safe client for API testing
- **Authentication Helpers**: Tools for authenticated testing
- **Test Environment Management**: Utilities for managing test environments

## Installation

This library is part of the DietizMe monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@dietizme/integration-tests": "workspace:*"
  }
}
```

## Basic Usage

### Test Setup

```typescript
import { 
  initializeTestEnvironment,
  cleanupTestEnvironment,
  createTestUser
} from '@dietizme/integration-tests';

describe('Cart API Integration', () => {
  // Setup test environment before all tests
  beforeAll(async () => {
    await initializeTestEnvironment();
  });

  // Clean up after all tests
  afterAll(async () => {
    await cleanupTestEnvironment();
  });

  // Create a test user for each test
  let testUser;
  
  beforeEach(async () => {
    testUser = await createTestUser({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User'
    });
  });

  // Tests go here
  it('should create a cart for a user', async () => {
    // Test implementation
  });
});
```

### API Testing

```typescript
import { 
  createApiClient,
  expectSuccessResponse,
  expectErrorResponse
} from '@dietizme/integration-tests';

describe('Recipe API', () => {
  // Create an authenticated API client
  let api;
  
  beforeEach(async () => {
    api = await createApiClient({
      baseUrl: 'http://localhost:4000',
      auth: {
        email: 'test@example.com',
        password: 'password123'
      }
    });
  });

  it('should create a new recipe', async () => {
    // Make API request
    const response = await api.post('/recipes', {
      name: 'Test Recipe',
      ingredients: ['Ingredient 1', 'Ingredient 2'],
      instructions: 'Test instructions'
    });

    // Assert on response
    expectSuccessResponse(response);
    expect(response.data.recipe.name).toBe('Test Recipe');
  });

  it('should return error for invalid recipe', async () => {
    // Make API request with invalid data
    const response = await api.post('/recipes', {
      // Missing required fields
    }).catch(error => error.response);

    // Assert on error response
    expectErrorResponse(response, 400);
    expect(response.data.errors).toContainEqual(
      expect.objectContaining({ field: 'name' })
    );
  });
});
```

### Database Testing

```typescript
import { 
  getTestDatabase,
  seedTestData,
  clearTestData 
} from '@dietizme/integration-tests';

describe('User Repository', () => {
  let db;
  
  beforeAll(async () => {
    // Get a connection to the test database
    db = await getTestDatabase();
  });

  beforeEach(async () => {
    // Seed with test data
    await seedTestData(db, {
      users: [
        { id: 'user-1', name: 'User 1', email: 'user1@example.com' },
        { id: 'user-2', name: 'User 2', email: 'user2@example.com' }
      ]
    });
  });

  afterEach(async () => {
    // Clear test data after each test
    await clearTestData(db);
  });

  it('should find a user by email', async () => {
    // Test implementation using the database
    const userRepository = new UserRepository(db);
    const user = await userRepository.findByEmail('user1@example.com');
    expect(user).toBeDefined();
    expect(user.id).toBe('user-1');
  });
});
```

## Advanced Features

### Test Fixtures

```typescript
import { fixtures } from '@dietizme/integration-tests';

// Use pre-defined fixtures
const { users, recipes, mealPlans } = fixtures;

// Create a specific fixture
const testRecipe = fixtures.createRecipe({
  name: 'Custom Recipe',
  // Override other properties as needed
});

// Create a complete test scenario
const scenarioData = fixtures.createScenario('user-with-meal-plan', {
  user: { name: 'Custom User' },
  mealPlan: { name: 'Custom Meal Plan' }
});
```

### Mock External Services

```typescript
import { 
  mockPaymentProvider,
  mockEmailService,
  mockStorageService
} from '@dietizme/integration-tests';

describe('Checkout Process', () => {
  let paymentMock, emailMock, storageMock;
  
  beforeEach(() => {
    // Setup mocks for external services
    paymentMock = mockPaymentProvider();
    emailMock = mockEmailService();
    storageMock = mockStorageService();
    
    // Configure mock responses
    paymentMock.mockSuccessfulPayment();
    emailMock.mockSuccessfulDelivery();
  });

  it('should process a successful checkout', async () => {
    // Test implementation using mocked services
    const result = await checkoutService.processCheckout(cart);
    
    // Verify interactions with mocks
    expect(paymentMock.charge).toHaveBeenCalledWith(
      expect.objectContaining({ amount: cart.total })
    );
    
    expect(emailMock.sendOrderConfirmation).toHaveBeenCalledWith(
      expect.objectContaining({ orderId: result.orderId })
    );
  });
});
```

### GraphQL API Testing

```typescript
import { 
  createGraphQLClient,
  gql
} from '@dietizme/integration-tests';

describe('GraphQL API', () => {
  let graphql;
  
  beforeEach(async () => {
    graphql = await createGraphQLClient({
      endpoint: 'http://localhost:4000/graphql',
      headers: {
        Authorization: `Bearer ${testToken}`
      }
    });
  });

  it('should fetch user profile', async () => {
    const query = gql`
      query GetUserProfile($id: ID!) {
        user(id: $id) {
          id
          name
          email
        }
      }
    `;
    
    const result = await graphql.query(query, {
      variables: { id: testUser.id }
    });
    
    expect(result.data.user).toBeDefined();
    expect(result.data.user.id).toBe(testUser.id);
  });
});
```

### Testing Webhooks

```typescript
import { 
  createWebhookServer,
  waitForWebhook
} from '@dietizme/integration-tests';

describe('Payment Webhook', () => {
  let webhookServer;
  
  beforeAll(async () => {
    // Create a webhook server to capture webhook requests
    webhookServer = await createWebhookServer({
      port: 3001,
      path: '/webhooks/payment'
    });
  });
  
  afterAll(async () => {
    await webhookServer.close();
  });

  it('should handle payment webhook', async () => {
    // Trigger a payment event
    await paymentService.processPayment({
      // Payment details
      webhookUrl: 'http://localhost:3001/webhooks/payment'
    });
    
    // Wait for the webhook to be received
    const webhookData = await waitForWebhook(webhookServer, {
      timeout: 5000,
      predicate: data => data.type === 'payment.succeeded'
    });
    
    // Assert on webhook data
    expect(webhookData.payment.status).toBe('succeeded');
  });
});
```

## Environment Configuration

```typescript
import { 
  getTestConfig,
  setTestEnv,
  resetTestEnv
} from '@dietizme/integration-tests';

// Get configuration for current test environment
const config = getTestConfig();

// Set specific test environment variables
beforeEach(() => {
  setTestEnv({
    PAYMENT_API_KEY: 'test_key',
    DISABLE_EMAILS: 'true'
  });
});

// Reset environment after tests
afterEach(() => {
  resetTestEnv();
});
```

## Test Data Generation

```typescript
import { 
  generateTestData,
  getFakeUser,
  getFakeRecipe
} from '@dietizme/integration-tests';

// Generate a batch of test data
const testData = generateTestData({
  users: 10,   // Generate 10 users
  recipes: 20,  // Generate 20 recipes
  mealPlans: 5  // Generate 5 meal plans
});

// Generate a single fake entity
const user = getFakeUser({ role: 'admin' });
const recipe = getFakeRecipe({ 
  dietary: ['vegetarian', 'gluten-free']
});
```

## Test Reporting

```typescript
import { 
  captureTestMetrics,
  TestReport
} from '@dietizme/integration-tests';

// Capture test metrics
afterAll(async () => {
  const metrics = captureTestMetrics();
  
  // Generate a test report
  const report = new TestReport(metrics);
  
  // Output or store the report
  console.log(report.getSummary());
  await report.saveToFile('./test-report.json');
});
```

## Development

### Adding New Test Utilities

When adding new utilities to this library:

1. Focus on reusability across different tests
2. Provide thorough documentation and examples
3. Keep dependencies minimal
4. Ensure proper cleanup in teardown functions
5. Handle errors gracefully

### Testing

```bash
# Run unit tests for the test utilities themselves
nx test integration-tests
```
