# Domain Libraries

This directory contains the core domain models and business logic for the DietizMe application. These libraries provide the foundation for the entire application, encapsulating the essential business rules and data structures.

## Architecture

The domain libraries follow Domain-Driven Design principles, focusing on:

- Clear separation of concerns
- Rich domain models that encapsulate business logic
- Immutability and validation
- Type safety throughout the codebase

## Directory Structure

```
domain/
├── booking-questions/    # Booking questions domain logic
├── bookings/             # Bookings domain logic
├── data-types/           # Common data type definitions
├── omnidata-types/       # Types generated from Omnidata GraphQL schema
├── rates/                # Rates and pricing domain logic
├── search/               # Search functionality domain logic
├── shopping-cart/        # Shopping cart domain logic
└── templates/            # Templates domain logic
```

## Key Concepts

### Food Categorization

DietizMe uses a hierarchical categorization system for foods and recipes, implemented using PostgreSQL's ltree extension. Categories are expressed in a path-like structure:

```
CUISINE.MEDITERRANEAN.SPANISH
DIET_TYPE.VEGETARIAN
MEAL_TYPE.BREAKFAST
```

This allows for efficient queries across the hierarchy, such as finding all Mediterranean recipes regardless of specific sub-region.

### Meal Templates

Meal templates define the structure of a meal plan, including:
- Number of meals per day
- Types of meals (breakfast, lunch, snack, dinner)
- Required nutritional balance
- Dietary restrictions and preferences

### Data Persistence

The domain libraries define the data structures but are agnostic about the storage mechanism. The actual persistence is handled by the Omnidata integration.

## Domain Modules

### [omnidata-types](./omnidata-types/README.md)

Generated TypeScript interfaces from the Omnidata GraphQL schema, providing type-safe access to the data layer.

### [booking-questions](./booking-questions/README.md)

Models and logic for managing the questions asked during the booking process, including validation and form generation.

### [bookings](./bookings/README.md)

Core booking domain logic including appointment scheduling, availability, and confirmation.

### [data-types](./data-types/README.md)

Shared data types and interfaces used across multiple domain modules.

### [rates](./rates/README.md)

Pricing models, calculation engines, and discount logic.

### [search](./search/README.md)

Search functionality across various domain entities including recipes, meal plans, and templates.

### [shopping-cart](./shopping-cart/README.md)

Shopping cart operations, validation rules, and transformation logic.

### [templates](./templates/README.md)

Meal template models, validation, and operations.

## Usage

Domain libraries are typically used by:

1. Business logic utilities (e.g., `libs/biz-builder`)
2. API layers for data validation
3. Application UI for type-safe data presentation
4. Tests to validate business rules

Example:

```typescript
import { ShoppingCart } from '@dietizme/domain/shopping-cart';
import { using } from '@dietizme/biz-builder';

// Use the domain model with the biz-builder
const result = await using(dependencies)
  .validateWith(ShoppingCart.validateContents)
  .persistWith(ShoppingCart.saveToDatabase)
  .execute(cartData);
```

## Development Guidelines

When working with domain libraries:

1. Keep business logic in the domain models, not in UI or API layers
2. Maintain immutability of domain objects
3. Implement thorough validation
4. Write comprehensive unit tests for business rules
5. Avoid circular dependencies between domain modules
6. Document any complex business rules or algorithms

## Testing

Each domain module has its own test suite:

```bash
# Test a specific domain module
nx test domain-shopping-cart

# Test all domain modules
nx run-many --target=test --projects=domain-*
```
