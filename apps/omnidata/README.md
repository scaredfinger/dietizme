# Omnidata Backend Service

The core backend service for the DietizMe application, providing all business logic, data access, and API endpoints through a containerized Nhost environment.

## Overview

Omnidata serves as the central data and business logic layer for DietizMe, leveraging:

- **GraphQL API**: Hasura-powered GraphQL interface for flexible data queries and mutations
- **PostgreSQL Database**: Robust data storage with hierarchical structure support
- **Serverless Functions**: Business logic implementation using TypeScript
- **Authentication**: User authentication and authorization
- **Storage**: File storage capabilities
- **BizBuilder Integration**: Structured business operations using the fluent API pattern

## Architecture

Omnidata follows a clean architecture approach with:

1. **Domain Models**: Type definitions shared with frontend applications
2. **Business Logic**: Implemented using BizBuilder pattern in serverless functions
3. **Data Access**: GraphQL and REST APIs for flexible data manipulation
4. **Integration Points**: Webhooks, events, and API endpoints for external integration

## Directory Structure

```
omnidata/
├── functions/                # Serverless functions
│   ├── _utils/               # Shared utilities
│   │   ├── biz/              # Business logic implementation
│   │   │   ├── implementation/ # Core business operations
│   │   │   └── validation/     # Validation rules
│   │   ├── action-execution.ts # Action dispatcher
│   │   ├── config.ts         # Configuration settings
│   │   ├── generated.ts      # Auto-generated GraphQL types
│   │   ├── logger.ts         # Logging utilities
│   │   └── sdk.ts            # SDK for external services
│   └── execute.ts            # Main function entry point
├── nhost/                    # Nhost configuration (symlinked to dist)
├── nhost-config-template/    # Templates for Nhost setup
│   ├── data/                 # Data configuration templates
│   └── traefik/              # Traefik routing configuration
├── docker-compose.yaml       # Main Docker Compose configuration
├── package.json              # Dependencies and scripts
└── tsconfig.json             # TypeScript configuration
```

## Key Features

### GraphQL API

The GraphQL API provides a flexible interface for querying and manipulating data:

- **Strongly Typed**: All operations are fully typed using generated TypeScript definitions
- **Relation-Aware**: Supports complex data relationships and nested queries
- **Permission System**: Role-based access control built into the API
- **Performance Optimized**: Efficient query resolution with pagination support

### Business Logic Execution

Business operations are implemented using a structured approach:

1. **Request Validation**: Input validation with detailed error messages
2. **Context Loading**: Loading necessary data from the database
3. **Business Rules**: Application of business rules and validations
4. **Persistence**: Database operations with transaction support
5. **Response Formatting**: Consistent response structure

### PostgreSQL Database

The PostgreSQL database uses several advanced features:

- **ltree Extension**: For hierarchical data (like food categories)
- **JSON Storage**: For flexible schema evolution
- **Row-Level Security**: For data isolation and multi-tenancy
- **Full-Text Search**: For efficient text search capabilities

## Development Workflow

### Prerequisites

- Docker and Docker Compose
- Node.js 18+ and pnpm
- Nhost CLI (optional)

### Building and Running

```bash
# Build the Omnidata service
pnpm nx build omnidata

# Start the development environment
pnpm nx dev omnidata

# Stop the services
pnpm nx stop omnidata

# Clean all data and containers
pnpm nx clean omnidata
```

### Development Environment

Once running, access the services at:

- **GraphQL API**: http://local.graphql.nhost.run/v1/graphql
- **Hasura Console**: http://local.hasura.nhost.run
- **Auth Service**: http://local.auth.nhost.run
- **Functions**: http://local.functions.nhost.run
- **Storage**: http://local.storage.nhost.run

### Creating New Business Functions

1. Add a new business operation implementation in `functions/_utils/biz/implementation/`
2. Create validation rules in `functions/_utils/biz/validation/`
3. Expose the operation through the action router
4. Test your implementation via the API

Example business operation:

```typescript
// Create a new business operation
export const createMealPlan = async (
  deps: AppDependencies,
  request: CreateMealPlanRequest
): Promise<Result<CreateMealPlanResponse, Error>> => {
  return using(deps)
    .validateWith(
      validateMealPlanRequest,
      validateUserPermissions
    )
    .loadContextWith(async (deps, req) => {
      // Load necessary context (user, templates, etc.)
    })
    .executeWith(async (deps, req, ctx) => {
      // Create meal plan
      return { mealPlanId: 'new-id' };
    })
    .execute(request);
};
```

## Data Flow

1. **Client Request**: Frontend or external client makes a request
2. **Function Routing**: Request is routed to the appropriate business function
3. **Business Logic**: The function validates, processes, and executes the operation
4. **Database Operation**: Data is persisted to the PostgreSQL database
5. **Response**: A structured response is returned to the client

## Database Schema

The main database entities include:

- **Users**: User accounts and profiles
- **Categories**: Hierarchical food categories
- **Recipes**: Recipe definitions with ingredients and instructions
- **Meal Templates**: Templates for meal planning
- **Meal Plans**: Generated meal plans for users
- **Bookings**: Appointment bookings for nutritionist consultations
- **Shopping Carts**: User shopping carts

## GraphQL Schema Management

```bash
# Export the current GraphQL schema
pnpm update-schema

# Generate TypeScript types from the GraphQL schema
pnpm generate-functions-graphql
```

## Integration Points

### Frontend Integration

The Omnidata service exposes several integration points for frontend applications:

- **GraphQL API**: For data queries and mutations
- **Auth API**: For user authentication
- **Serverless Functions**: For complex business operations
- **Storage API**: For file uploads and downloads

### External Systems Integration

Omnidata can integrate with external systems through:

- **Webhooks**: Receiving events from external systems
- **API Calls**: Making requests to external services
- **Event System**: Publishing and subscribing to events

## Deployment

The service is designed to be deployed to any Docker-compatible environment:

- **Development**: Local Docker Compose setup
- **Staging**: Containerized deployment with staging data
- **Production**: Fully containerized production deployment

### Environment Variables

Required environment variables:

- `NHOST_ADMIN_SECRET`: Admin secret for Hasura
- `NHOST_JWT_SECRET`: JWT secret for authentication
- `NHOST_POSTGRES_PASSWORD`: PostgreSQL password
- `NHOST_PROJECT_NAME`: Project name for Docker Compose
- `ENVIRONMENT`: Environment name (development, staging, production)

## Monitoring and Debugging

- **Logging**: Structured JSON logs using Pino logger
- **Error Tracking**: Sentry integration for error reporting
- **Metrics**: Container-level metrics in production
- **Request Tracing**: Request ID-based tracing for debugging

## Advanced Usage

### Custom SQL Migrations

Add SQL migrations to `nhost/migrations/` and they will be applied on startup.

### Hasura Metadata

Hasura metadata is stored in `nhost/metadata/` and defines:

- GraphQL schema permissions
- API relationships
- Event triggers
- Remote schemas

### Function Development

For complex functions, split logic into modules:

```typescript
// utils/biz/implementation/meal-planning/generate-meal-plan.ts
export function generateMealPlan(deps, request) {
  // Logic for generating meal plans
}

// utils/biz/implementation/index.ts
export { generateMealPlan } from './meal-planning/generate-meal-plan';
```

## Troubleshooting

### Common Issues

1. **Docker Container Conflicts**: 
   ```bash
   # Fix port conflicts
   sudo lsof -i :<port-number>
   kill <process-id>
   ```

2. **Database Connection Failures**:
   Check for correct environment variables and postgres service health.

3. **GraphQL Schema Errors**:
   Verify Hasura metadata consistency using the Hasura Console.

4. **Function Deployment Issues**:
   ```bash
   # View function logs
   docker compose logs -f functions
   ```

## References

- [Nhost Documentation](https://docs.nhost.io/)
- [Hasura Documentation](https://hasura.io/docs/)
- [BizBuilder Pattern](/libs/biz-builder/README.md)
- [Domain Models](/libs/domain/README.md)
