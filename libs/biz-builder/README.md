# BizBuilder

A fluent API for structuring business operations in the Otiuming application. BizBuilder provides a clean, consistent way to implement complex business logic with validation, context loading, and persistence in a pipeline-like structure.

## Key Features

- **Fluent API**: Chain operations for readability and maintainability
- **Separation of Concerns**: Clearly separate different aspects of business operations
- **Validation**: Built-in validation with error handling
- **Context Loading**: Standardized data loading pattern
- **Persistence**: Clean approach to saving changes
- **Testability**: Easy to mock dependencies for testing
- **Type Safety**: Full TypeScript type support
- **Error Handling**: Consistent error management

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/biz-builder": "workspace:*"
  }
}
```

## Basic Usage

```typescript
import { using } from '@otiuming/biz-builder';
import { Logger } from '@otiuming/utils-logging';

// Define dependencies
interface Dependencies {
  logger: Logger;
  dataService: DataService;
}

// Define request type
interface CreateUserRequest {
  email: string;
  name: string;
  password: string;
}

// Create a business operation
async function createUser(
  deps: Dependencies, 
  request: CreateUserRequest
) {
  return using(deps)
    // Validate input
    .validateWith(
      validateEmailFormat,
      validatePasswordStrength,
      checkEmailNotTaken
    )
    // Perform the operation
    .executeWith(async (deps, req) => {
      const user = await deps.dataService.createUser({
        email: req.email,
        name: req.name,
        hashedPassword: await hashPassword(req.password)
      });
      
      deps.logger.info('User created', { userId: user.id });
      
      return { userId: user.id };
    })
    // Execute the operation
    .execute(request);
}

// Use the operation
const result = await createUser(
  { logger, dataService }, 
  { email: 'user@example.com', name: 'John Doe', password: 'secure123' }
);
```

## Advanced Features

### Context Loading

Load necessary context before executing operations:

```typescript
const updateRecipe = (deps, request) => using(deps)
  // Define variables needed for context loading
  .buildLoadContextVariablesWith((req) => ({
    recipeId: req.id
  }))
  // Load context using variables
  .loadContextWith(async (deps, vars) => {
    const recipe = await deps.recipeRepo.findById(vars.recipeId);
    if (!recipe) {
      throw new NotFoundError(`Recipe ${vars.recipeId} not found`);
    }
    return { recipe };
  })
  // Validate with loaded context
  .validateWith(
    (deps, req, ctx) => validateUserCanEditRecipe(deps, req.userId, ctx.recipe),
    (deps, req, ctx) => validateRecipeInput(deps, req, ctx.recipe)
  )
  // Build variables for persistence
  .buildPersistVariablesWith((req, ctx) => ({
    recipe: {
      ...ctx.recipe,
      name: req.name,
      ingredients: req.ingredients,
      instructions: req.instructions
    }
  }))
  // Persist the updated entity
  .persistWith(async (deps, vars) => {
    await deps.recipeRepo.update(vars.recipe);
    return { recipeId: vars.recipe.id };
  })
  // Execute with the request
  .execute(request);
```

### Composable Operations

Create reusable operation components:

```typescript
// Create a reusable validation step
const validateRecipeRequest = (builder) => builder
  .validateWith(
    validateRecipeName,
    validateIngredients,
    validateInstructions
  );

// Create a reusable persistence step
const persistRecipe = (builder) => builder
  .buildPersistVariablesWith((req, ctx) => ({
    recipe: buildRecipeEntity(req, ctx)
  }))
  .persistWith(async (deps, vars) => {
    const id = await deps.recipeRepo.save(vars.recipe);
    return { recipeId: id };
  });

// Combine them in different operations
const createRecipe = (deps, request) => using(deps)
  .pipe(validateRecipeRequest)
  .pipe(persistRecipe)
  .execute(request);

const updateRecipe = (deps, request) => using(deps)
  .loadContextWith(loadRecipeContext)
  .pipe(validateRecipeRequest)
  .validateWith(validateUserCanEdit)
  .pipe(persistRecipe)
  .execute(request);
```

### Error Handling

Handle errors in a consistent way:

```typescript
const processMealPlan = (deps, request) => using(deps)
  .validateWith(
    validateMealPlanRequest,
    validateNutritionRequirements
  )
  .executeWith(generateMealPlan)
  .handleErrorWith((error, deps, request) => {
    if (error instanceof ValidationError) {
      deps.logger.warn('Validation failed', { 
        request, 
        errors: error.details 
      });
      return { 
        success: false, 
        errors: error.details 
      };
    }
    
    deps.logger.error('Failed to generate meal plan', {
      request,
      error: error.message
    });
    
    throw error;
  })
  .execute(request);
```

### Cleanup Actions

Perform cleanup after operations:

```typescript
const processPayment = (deps, request) => using(deps)
  .validateWith(validatePaymentRequest)
  .executeWith(async (deps, req) => {
    const paymentSession = await deps.paymentService.createSession(req);
    return { sessionId: paymentSession.id };
  })
  .whenDone(async (result, deps) => {
    // Record payment attempt regardless of outcome
    await deps.analyticsService.recordPaymentAttempt({
      sessionId: result.sessionId,
      amount: request.amount,
      successful: true
    });
  })
  .whenError(async (error, deps) => {
    // Handle cleanup after errors
    await deps.analyticsService.recordPaymentAttempt({
      amount: request.amount,
      successful: false,
      errorMessage: error.message
    });
  })
  .execute(request);
```

## Validation Functions

Validation functions follow a standardized pattern:

```typescript
type Validator<D, R, C = undefined> = 
  (deps: D, request: R, context?: C) => Promise<void> | void;

// Simple validator
function validateRecipeName(deps, request) {
  if (!request.name || request.name.length < 3) {
    throw new ValidationError('Recipe name must be at least 3 characters');
  }
}

// Validator with dependencies
function validateUserCanEdit(deps, request, context) {
  const { user, recipe } = context;
  
  if (recipe.ownerId !== user.id && !user.isAdmin) {
    throw new AuthorizationError('User cannot edit this recipe');
  }
}

// Async validator
async function checkEmailNotTaken(deps, request) {
  const existing = await deps.userRepo.findByEmail(request.email);
  
  if (existing) {
    throw new ValidationError('Email is already taken');
  }
}
```

## Testing

BizBuilder makes testing business operations straightforward:

```typescript
describe('createUser', () => {
  it('creates a user successfully', async () => {
    // Mock dependencies
    const deps = {
      logger: createMockLogger(),
      dataService: {
        createUser: jest.fn().mockResolvedValue({ id: 'user-123' })
      }
    };
    
    // Test the operation
    const result = await createUser(deps, {
      email: 'test@example.com',
      name: 'Test User',
      password: 'secure123'
    });
    
    // Assertions
    expect(result).toEqual({ userId: 'user-123' });
    expect(deps.dataService.createUser).toHaveBeenCalledWith(
      expect.objectContaining({
        email: 'test@example.com',
        name: 'Test User'
      })
    );
  });
  
  it('validates email format', async () => {
    const deps = {/* mock dependencies */};
    
    // Test validation failure
    await expect(
      createUser(deps, {
        email: 'invalid-email',
        name: 'Test User',
        password: 'secure123'
      })
    ).rejects.toThrow('Invalid email format');
  });
});
```

## Best Practices

1. **Keep Validators Simple**: Each validator should check one specific aspect
2. **Error Messages**: Include descriptive error messages for validation failures
3. **Context Loading**: Use context loading for retrieving existing entities
4. **Persistence**: Isolate database operations in persist steps
5. **Error Handling**: Add specific error handling for expected failure cases
6. **Logging**: Log key events at appropriate levels
7. **Reuse**: Create shared validators and operation components
8. **Testing**: Test happy paths and validation failures

## Type Definitions

```typescript
// Core types in the BizBuilder library
interface BizBuilder<D, R, C = undefined, V = undefined, O = void> {
  validateWith(...validators: Validator<D, R, C>[]): BizBuilder<D, R, C, V, O>;
  loadContextWith<NC>(loader: ContextLoader<D, R, NC>): BizBuilder<D, R, NC, V, O>;
  buildLoadContextVariablesWith<NV>(builder: VariableBuilder<R, NV>): BizBuilder<D, R, C, NV, O>;
  buildPersistVariablesWith<NV>(builder: VariableBuilder<R, C, NV>): BizBuilder<D, R, C, V, NV>;
  persistWith<NO>(persister: Persister<D, V, NO>): BizBuilder<D, R, C, V, NO>;
  executeWith<NO>(executor: Executor<D, R, C, NO>): BizBuilder<D, R, C, V, NO>;
  whenDone(handler: DoneHandler<O, D>): BizBuilder<D, R, C, V, O>;
  whenError(handler: ErrorHandler<D, R>): BizBuilder<D, R, C, V, O>;
  handleErrorWith<NO>(handler: ErrorTransformer<D, R, NO>): BizBuilder<D, R, C, V, NO>;
  pipe<NO>(transformer: (builder: BizBuilder<D, R, C, V, O>) => BizBuilder<D, R, C, V, NO>): BizBuilder<D, R, C, V, NO>;
  execute(request: R): Promise<O>;
}

type Validator<D, R, C = undefined> = (deps: D, request: R, context?: C) => Promise<void> | void;
type ContextLoader<D, R, C> = (deps: D, request: R) => Promise<C> | C;
type VariableBuilder<R, C = undefined, V = undefined> = (request: R, context?: C) => V;
type Persister<D, V, O> = (deps: D, variables: V) => Promise<O> | O;
type Executor<D, R, C, O> = (deps: D, request: R, context?: C) => Promise<O> | O;
type DoneHandler<O, D> = (result: O, deps: D) => Promise<void> | void;
type ErrorHandler<D, R> = (error: Error, deps: D, request: R) => Promise<void> | void;
type ErrorTransformer<D, R, O> = (error: Error, deps: D, request: R) => Promise<O> | O;
```
