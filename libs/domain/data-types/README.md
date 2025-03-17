# Data Types Domain Module

Common data type definitions and type utilities used across the DietizMe application. This module provides a shared foundation of type definitions that ensure consistency across different parts of the system.

## Features

- **Core Data Types**: Fundamental types used throughout the application
- **Type Guards**: Functions to validate types at runtime
- **Type Utilities**: Helper types and type transformation utilities
- **Constants**: Shared constants and enumerations
- **Serialization**: Utilities for serializing and deserializing types

## Installation

This library is part of the DietizMe monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@dietizme/domain-data-types": "workspace:*"
  }
}
```

## Core Types

### Identity Types

```typescript
// Unique identifier types
export type ID = string;
export type UUID = string;
export type Slug = string;

// Reference types
export interface Reference {
  id: ID;
  type: string;
}

// Ensures IDs are properly typed
export interface Identifiable {
  id: ID;
}
```

### Value Types

```typescript
// Money representation
export interface Money {
  amount: number;  // Amount in smallest currency unit (e.g., cents)
  currency: string; // ISO currency code
}

// Date range representation
export interface DateRange {
  start: Date;
  end: Date;
}

// Time representation
export interface TimeOfDay {
  hour: number;
  minute: number;
}

// Address representation
export interface Address {
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  type?: AddressType;
}

export enum AddressType {
  BILLING = 'BILLING',
  SHIPPING = 'SHIPPING',
  BOTH = 'BOTH'
}
```

### Result Types

```typescript
// Generic result types for operations
export interface Result<T, E = Error> {
  success: boolean;
  data?: T;
  error?: E;
}

// Paginated result for collections
export interface PaginatedResult<T> {
  items: T[];
  totalItems: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Validation result
export interface ValidationResult {
  valid: boolean;
  errors?: ValidationError[];
}

export interface ValidationError {
  field: string;
  message: string;
  code: string;
}
```

### Nutrition Types

```typescript
// Nutrition information
export interface NutritionInfo {
  calories: number;
  protein: number;    // grams
  carbs: number;      // grams
  fat: number;        // grams
  fiber: number;      // grams
  sugar: number;      // grams
  sodium: number;     // milligrams
  cholesterol: number; // milligrams
}

// Dietary preferences
export enum DietaryPreference {
  VEGAN = 'VEGAN',
  VEGETARIAN = 'VEGETARIAN',
  PESCATARIAN = 'PESCATARIAN',
  PALEO = 'PALEO',
  KETO = 'KETO',
  GLUTEN_FREE = 'GLUTEN_FREE',
  DAIRY_FREE = 'DAIRY_FREE',
  NUT_FREE = 'NUT_FREE',
  LOW_CARB = 'LOW_CARB',
  LOW_FAT = 'LOW_FAT',
  LOW_SODIUM = 'LOW_SODIUM',
  HALAL = 'HALAL',
  KOSHER = 'KOSHER'
}

// Food units
export enum FoodUnit {
  GRAM = 'g',
  KILOGRAM = 'kg',
  OUNCE = 'oz',
  POUND = 'lb',
  MILLILITER = 'ml',
  LITER = 'l',
  FLUID_OUNCE = 'fl oz',
  CUP = 'cup',
  TABLESPOON = 'tbsp',
  TEASPOON = 'tsp',
  EACH = 'each',
  SERVING = 'serving'
}

// Food quantity
export interface FoodQuantity {
  amount: number;
  unit: FoodUnit;
}
```

## Type Guards

Use type guards to validate types at runtime:

```typescript
import { 
  isValidMoney, 
  isValidDateRange,
  isValidNutritionInfo,
  isValidAddress
} from '@dietizme/domain-data-types';

// Check if a value is a valid money object
if (isValidMoney(value)) {
  // TypeScript knows value is Money here
  console.log(`Amount: ${value.amount}, Currency: ${value.currency}`);
}

// Validate a date range
if (!isValidDateRange(dateRange)) {
  throw new Error('Invalid date range');
}

// Validate nutrition information
if (isValidNutritionInfo(nutrition)) {
  // Use the nutrition info
}

// Validate address
if (isValidAddress(address)) {
  // Use the address
}
```

## Type Utilities

### Type Transformations

```typescript
import { 
  Partial,
  Readonly,
  Required,
  Pick,
  Omit,
  DeepPartial
} from '@dietizme/domain-data-types';

// Make all properties optional
type PartialAddress = Partial<Address>;

// Make all properties readonly
type ReadonlyAddress = Readonly<Address>;

// Make all optional properties required
type RequiredAddress = Required<Address>;

// Pick specific properties
type AddressLocation = Pick<Address, 'city' | 'state' | 'country'>;

// Omit specific properties
type AddressWithoutType = Omit<Address, 'type'>;

// Make all properties recursively partial
type DeepPartialAddress = DeepPartial<Address>;
```

### Custom Type Utilities

```typescript
import {
  WithTimestamps,
  WithAuditing,
  Nullable,
  NonNullable,
  RecordOf
} from '@dietizme/domain-data-types';

// Add timestamp fields to a type
type TimestampedAddress = WithTimestamps<Address>;
// Result: Address & { createdAt: Date; updatedAt: Date }

// Add auditing fields
type AuditedAddress = WithAuditing<Address>;
// Result: Address & { createdAt: Date; updatedAt: Date; createdBy: ID; updatedBy: ID }

// Make all properties nullable
type NullableAddress = Nullable<Address>;

// Make all properties non-nullable
type NonNullableAddress = NonNullable<Address>;

// Create a record type with enum keys
type DietaryPreferenceConfig = RecordOf<DietaryPreference, boolean>;
// Result: Record<DietaryPreference, boolean>
```

## Serialization Utilities

Convert between different formats:

```typescript
import {
  toJSON,
  fromJSON,
  serialize,
  deserialize
} from '@dietizme/domain-data-types';

// Convert to JSON-safe representation (handles dates, etc.)
const json = toJSON(myObject);

// Parse from JSON with proper type handling
const object = fromJSON(json);

// Serialization with validation
const serialized = serialize(address, AddressSchema);

// Deserialization with validation
const deserialized = deserialize(serializedData, AddressSchema);
```

## Constants and Enumerations

```typescript
import {
  CURRENCY_CODES,
  COUNTRY_CODES,
  US_STATES,
  SUPPORTED_LANGUAGES,
  TIME_ZONES
} from '@dietizme/domain-data-types';

// Use standard currency codes
const usd = CURRENCY_CODES.USD;

// Get a list of all countries
const countries = Object.values(COUNTRY_CODES);

// Use standard US state codes
const california = US_STATES.CA;

// Get supported languages
const languages = SUPPORTED_LANGUAGES;

// Time zones
const timeZones = TIME_ZONES;
```

## Runtime Validation

```typescript
import { validate, createSchema } from '@dietizme/domain-data-types';

// Define a schema
const AddressSchema = createSchema({
  line1: { type: 'string', required: true },
  line2: { type: 'string', required: false },
  city: { type: 'string', required: true },
  state: { type: 'string', required: true },
  postalCode: { type: 'string', required: true, pattern: /^\d{5}(-\d{4})?$/ },
  country: { type: 'string', required: true },
  type: { type: 'enum', values: Object.values(AddressType), required: false }
});

// Validate data against the schema
const result = validate(data, AddressSchema);

if (!result.valid) {
  console.error('Validation errors:', result.errors);
}
```

## Testing

```bash
# Run unit tests
nx test domain-data-types
```

## Dependencies

This module has minimal dependencies to prevent circular dependencies:

- No domain model dependencies
- Minimal utility dependencies
- Works well with `zod` for runtime validation
