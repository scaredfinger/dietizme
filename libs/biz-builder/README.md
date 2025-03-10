# BizBuilder

A fluent API for structuring business operations with validation, context loading, and persistence.

## Overview

BizBuilder helps organize business logic into a clean, testable pipeline with clear separation of concerns. It manages the flow of:

1. Loading context data
2. Validating business rules
3. Persisting changes
4. Executing post-operation actions

## Installation

```bash
npm install biz-builder
```

## Usage

BizBuilder uses a fluent API pattern to organize your business operations:

```typescript
const result = await using<RequestType, SdkType>(sdk, logger)
  .buildLoadContextVariablesWith(buildLoadContextVariables)
  .loadContextWith(sdk => sdk.loadContext)
  .validateWith(validateRule1, validateRule2)
  .buildPersistVariablesWith(buildPersistVariables)
  .persistWith(sdk => sdk.persistOperation)
  .whenDone(afterPersistAction)
  .execute(request);

// Handle the result
result.match({
  Ok: (result) => handleSuccess(result),
  Error: (error) => handleError(error)
});
```

## API Reference

### Core Flow

1. **`using<RequestBody, Sdk>(sdk, logger)`**
   - Starting point for the builder pattern
   - Requires your SDK and a logger implementation

2. **`.buildLoadContextVariablesWith(buildFn)`**
   - Define how to extract variables needed to load context from the request

3. **`.loadContextWith(loadContextFn)`**
   - Define how to load operation context using your SDK

4. **`.validateWith(...validators)`**
   - Add one or more validation functions to enforce business rules
   - Each validator should return `{ ok: true }` or `{ ok: false, errorMessage: string }`

5. **`.buildPersistVariablesWith(buildFn)`**
   - Define how to create variables needed for persistence based on request and context

6. **`.persistWith(persistFn)`**
   - Define the persistence operation from your SDK

7. **`.whenDone(...actions)`**
   - Optional post-operation actions that run after successful persistence
   - Won't affect the operation result if they fail

8. **`.execute(request)`**
   - Execute the operation with the provided request
   - Returns a `Result` type (from @swan-io/boxed)

### Error Handling

BizBuilder provides comprehensive error handling at each step of the operation:
- Technical errors (context loading, persistence failures)
- Business validation errors
- Post-operation error logging

The final result is returned as a boxed `Result` type with either:
- `Ok` containing the operation result
- `Error` containing error details with type, code, and message

## Complete Example

```typescript
interface CreateUserRequest {
  name: string;
  email: string;
}

// Define your contextual data loaders
function buildLoadContextVariables(request: OperationRequest<CreateUserRequest>) {
  return {
    email: request.body.email,
    organizationId: request.organization
  };
}

// Define validation rules
function validateUniqueEmail(context, request) {
  return context.isEmailUnique 
    ? { ok: true } 
    : { ok: false, errorMessage: "Email already in use" };
}

// Define persistence variables builder
function buildPersistVariables(request, context) {
  return {
    user: {
      name: request.body.name,
      email: request.body.email,
      organizationId: context.organizationId
    }
  };
}

// Execute the operation
const result = await using<CreateUserRequest, UserSdk>(userSdk, logger)
  .buildLoadContextVariablesWith(buildLoadContextVariables)
  .loadContextWith(sdk => sdk.checkEmailAvailability)
  .validateWith(validateUniqueEmail)
  .buildPersistVariablesWith(buildPersistVariables)
  .persistWith(sdk => sdk.createUser)
  .whenDone(sendWelcomeEmail)
  .execute(request);
```

## Benefits

- **Clean separation of concerns** - Each aspect of the operation is isolated
- **Easy testability** - Each component can be unit tested independently
- **Comprehensive error handling** - All errors are properly caught and categorized
- **Standardized logging** - Consistent logging of each operation stage
- **Type safety** - Full TypeScript support with generics

## Development

This library was generated with [Nx](https://nx.dev).

### Building

Run `nx build biz-builder` to build the library.

### Running unit tests

Run `nx test biz-builder` to execute the unit tests.
