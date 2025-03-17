# Logging Utilities

A structured logging system for the Otiuming application that provides consistent, context-aware logging across all parts of the application. This library makes debugging, monitoring, and auditing easier with a unified logging approach.

## Features

- **Structured logging**: JSON-formatted logs with consistent structure
- **Log levels**: Configurable verbosity (error, warn, info, debug, trace)
- **Context awareness**: Contextual information automatically included
- **Performance tracking**: Measure and log operation durations
- **Request tracing**: Track requests across application boundaries
- **Transport flexibility**: Console, file, network outputs
- **Integration capabilities**: Works with monitoring services
- **Environment-aware**: Adapts output based on environment (dev/prod)

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/utils-logging": "workspace:*"
  }
}
```

## Basic Usage

### Creating a Logger

```typescript
import { createLogger } from '@otiuming/utils-logging';

// Create a logger with module name
const logger = createLogger({
  module: 'shopping-cart',
  level: 'info' // Default level
});

// Basic logging
logger.info('Cart updated', { cartId: '123', itemCount: 5 });
logger.error('Payment failed', { orderId: '456', error: 'Invalid card' });
logger.debug('Processing item', { itemId: '789' });
```

### Setting Context

```typescript
import { createLogger, setLogContext } from '@otiuming/utils-logging';

const logger = createLogger({ module: 'auth' });

// Set global context (affects all loggers)
setLogContext({
  requestId: 'req-123',
  userId: 'user-456',
  sessionId: 'session-789'
});

// This log will include the global context
logger.info('User authenticated');

// Create a new context for a specific operation
function processRequest(req) {
  // Creates a new context based on the current one
  return setLogContext({
    operationId: 'op-123',
    path: req.path
  }, () => {
    // All logs within this function will include both contexts
    logger.info('Request started');
    
    // Process request...
    
    logger.info('Request completed');
  });
}
```

### Performance Tracking

```typescript
import { createLogger, withTiming } from '@otiuming/utils-logging';

const logger = createLogger({ module: 'database' });

// Track the execution time of a function
const result = await withTiming(
  () => fetchDataFromDatabase(query),
  (duration) => logger.info('Database query executed', { 
    query, 
    duration, 
    recordCount: result.length 
  })
);

// Or use the timing decorator for class methods
class DataService {
  @timing('DataService.fetchRecords')
  async fetchRecords(filter) {
    // Method implementation
    return records;
  }
}
```

## Advanced Features

### Custom Transports

```typescript
import { createLogger, createConsoleTransport, createFileTransport } from '@otiuming/utils-logging';

const logger = createLogger({
  module: 'api',
  transports: [
    // Console output with custom formatting
    createConsoleTransport({ 
      format: 'colored',
      includeTimestamp: true
    }),
    
    // File transport for persistent logs
    createFileTransport({
      filename: 'logs/api.log',
      maxSize: '10m',
      maxFiles: 5
    }),
    
    // Custom transport (e.g., to a monitoring service)
    {
      log: (level, message, meta) => {
        monitoringService.send({
          level,
          message,
          ...meta
        });
      }
    }
  ]
});
```

### Request Tracing

```typescript
import { createLogger, createTracer } from '@otiuming/utils-logging';

// Create a tracer
const tracer = createTracer();

// Middleware for HTTP requests
function tracingMiddleware(req, res, next) {
  // Generate trace ID or use one from request headers
  const traceId = req.headers['x-trace-id'] || tracer.generateId();
  
  // Create a span for this request
  const span = tracer.startSpan('http_request', { traceId });
  
  // Add to request for use in handlers
  req.traceId = traceId;
  req.span = span;
  
  // Add to response headers for downstream services
  res.setHeader('x-trace-id', traceId);
  
  // End span when request completes
  res.on('finish', () => {
    span.end({
      statusCode: res.statusCode,
      path: req.path,
      method: req.method
    });
  });
  
  next();
}

// Use in request handlers
function handleRequest(req, res) {
  const logger = createLogger({ 
    module: 'api',
    traceId: req.traceId 
  });
  
  // Create a child span for a specific operation
  const childSpan = req.span.createChildSpan('database_query');
  
  // Log with trace context
  logger.info('Processing request', { path: req.path });
  
  // End child span when operation completes
  childSpan.end({ result: 'success' });
}
```

### Environment Adaptation

```typescript
import { createLogger, getEnvironment } from '@otiuming/utils-logging';

const env = getEnvironment();
const isProd = env === 'production';

const logger = createLogger({
  module: 'app',
  // More verbose in development
  level: isProd ? 'info' : 'debug',
  // Pretty printing in development, JSON in production
  format: isProd ? 'json' : 'pretty',
  // Include source location in development
  includeSource: !isProd
});
```

## Testing

To facilitate testing, the library includes a mock logger:

```typescript
import { createMockLogger } from '@otiuming/utils-logging/testing';

describe('ShoppingCart', () => {
  it('logs cart updates', () => {
    // Create a mock logger that captures logs
    const mockLogger = createMockLogger();
    
    // Inject the mock logger
    const cart = new ShoppingCart({ logger: mockLogger });
    cart.addItem({ id: 'item-1', quantity: 2 });
    
    // Assert on the logs
    expect(mockLogger.logs).toContainEqual(
      expect.objectContaining({
        level: 'info',
        message: 'Item added to cart',
        meta: expect.objectContaining({
          itemId: 'item-1'
        })
      })
    );
  });
});
```

## Development

### Testing

```bash
# Run unit tests
nx test utils-logging
```

### Extending the Logger

To create custom logging functionality:

1. Extend the base logger class
2. Create custom transport
3. Add specialized logging methods for specific use cases

Example of a custom logger extension:

```typescript
import { BaseLogger, createLogger } from '@otiuming/utils-logging';

class ApiLogger extends BaseLogger {
  // Add specialized methods
  requestStarted(req) {
    this.info('API request started', {
      method: req.method,
      path: req.path,
      query: req.query,
      ip: req.ip
    });
  }
  
  requestCompleted(req, res, duration) {
    this.info('API request completed', {
      method: req.method,
      path: req.path,
      statusCode: res.statusCode,
      duration
    });
  }
}

// Factory function to create API loggers
export function createApiLogger(options) {
  const baseLogger = createLogger({
    module: 'api',
    ...options
  });
  
  return new ApiLogger(baseLogger.config);
}
```
