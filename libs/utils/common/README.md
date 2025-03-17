# Common Utilities

A collection of general-purpose utility functions and helpers used throughout the Otiuming application. This library provides commonly needed functionality that extends beyond what is available in standard libraries like lodash.

## Features

- **String utilities**: Formatting, validation, and transformation
- **Date/time utilities**: Parsing, formatting, and manipulation
- **Number utilities**: Formatting, rounding, and unit conversion
- **Collection utilities**: Advanced operations on arrays and objects
- **Validation utilities**: Input validation and sanitization
- **Type utilities**: Type guards and type conversion helpers
- **Environment utilities**: Configuration and environment management

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/utils-common": "workspace:*"
  }
}
```

## Core Utilities

### String Utilities

```typescript
import { 
  formatString, 
  sanitizeHtml, 
  truncate,
  slugify,
  capitalize
} from '@otiuming/utils-common';

// Format strings with named placeholders
formatString('Hello, {name}!', { name: 'World' }); // "Hello, World!"

// Sanitize HTML to prevent XSS
sanitizeHtml('<script>alert("xss")</script>'); // ""

// Truncate text with ellipsis
truncate('This is a very long text', 10); // "This is a..."

// Create URL-friendly slugs
slugify('This is a Title!'); // "this-is-a-title"

// Capitalize text
capitalize('hello world'); // "Hello World"
```

### Date Utilities

```typescript
import {
  formatDate,
  parseDate,
  dateRange,
  isDateBetween,
  addBusinessDays
} from '@otiuming/utils-common';

// Format dates
formatDate(new Date(), 'yyyy-MM-dd'); // "2025-03-17"

// Parse dates from various formats
parseDate('2025-03-17', 'yyyy-MM-dd'); // Date object

// Generate ranges of dates
dateRange('2025-03-01', '2025-03-05'); // Array of 5 date objects

// Check if a date is within a range
isDateBetween(new Date(), startDate, endDate); // boolean

// Add business days (skipping weekends)
addBusinessDays(new Date(), 5); // Date object 5 business days later
```

### Number Utilities

```typescript
import {
  formatCurrency,
  roundToDecimalPlaces,
  clamp,
  convertUnits
} from '@otiuming/utils-common';

// Format as currency
formatCurrency(19.99, 'USD'); // "$19.99"

// Round to specific decimal places
roundToDecimalPlaces(3.14159, 2); // 3.14

// Clamp a number between limits
clamp(value, 0, 100); // Keeps value between 0 and 100

// Convert between units
convertUnits(1000, 'g', 'kg'); // 1
```

### Validation Utilities

```typescript
import {
  isEmail,
  isValidPhoneNumber,
  isPostalCode,
  isStrongPassword
} from '@otiuming/utils-common';

// Email validation
isEmail('user@example.com'); // true

// Phone number validation (supports international formats)
isValidPhoneNumber('+1 (555) 123-4567'); // true

// Postal code validation (supports multiple countries)
isPostalCode('94043', 'US'); // true

// Password strength validation
isStrongPassword('p@ssw0rd'); // false
```

## Advanced Usage

### Asynchronous Utilities

```typescript
import {
  retry,
  debounceAsync,
  throttleAsync
} from '@otiuming/utils-common';

// Retry a function with exponential backoff
await retry(fetchData, { retries: 3, initialDelay: 500 });

// Debounce an async function
const debouncedSearch = debounceAsync(searchAPI, 300);
await debouncedSearch('query');

// Throttle an async function
const throttledSave = throttleAsync(saveData, 1000);
await throttledSave(data);
```

### Environment Utilities

```typescript
import {
  getConfig,
  isProduction,
  isDevelopment,
  getRequiredEnv
} from '@otiuming/utils-common';

// Get configuration value with fallback
getConfig('API_TIMEOUT', 30000);

// Environment checks
if (isProduction()) {
  // Production-specific code
}

// Get required environment variables (throws if missing)
const apiKey = getRequiredEnv('API_KEY');
```

## Development

### Testing

```bash
# Run unit tests
nx test utils-common
```

### Adding New Utilities

When adding new utilities:

1. Ensure they are pure functions when possible
2. Add comprehensive unit tests
3. Document with JSDoc comments
4. Update this README with examples if appropriate
5. Group related utilities in feature-specific files
