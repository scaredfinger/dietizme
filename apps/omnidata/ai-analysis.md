# AI Analysis - Omnidata Backend

## Service Overview
Omnidata is the core backend service for the Otiuming application, providing the business logic layer, data access, and API endpoints through a containerized environment using Nhost, Hasura, and PostgreSQL.

## Architecture
- **Type**: Containerized microservice
- **Framework**: Nhost (Hasura/PostgreSQL/Auth/Storage/Functions)
- **Language**: TypeScript for business logic
- **API**: GraphQL + Serverless Functions
- **Database**: PostgreSQL with ltree extension

## Key Components

### Docker Containers
- **PostgreSQL**: Data storage
- **Hasura**: GraphQL engine
- **Hasura Auth**: Authentication service
- **Minio**: Storage service
- **Functions**: Serverless function runtime
- **Traefik**: Routing and proxying

### Business Logic Structure
- **BizBuilder Pattern**: Fluent API for business operations
- **Action-based Routing**: Single endpoint with action dispatching
- **Error Handling**: Standardized error format with Sentry integration
- **Logging**: Structured JSON logging with context tracking

## Key Files
- `docker-compose.yaml`: Main service definition
- `functions/execute.ts`: Entry point for all serverless functions
- `functions/_utils/biz/implementation/`: Business logic implementations
- `functions/_utils/action-execution.ts`: Action router

## Main Dependencies
- **@nhost/nhost-js**: Nhost client library
- **@otiuming/biz-builder**: Business operation pattern library
- **@otiuming/domain-***: Domain model libraries
- **graphql-request**: GraphQL client
- **lodash-es**: Utility functions
- **pino**: Logging library
- **Sentry**: Error tracking

## Development Workflow
1. Local container startup with `pnpm nx dev omnidata`
2. Function development in TypeScript
3. Function bundling with Rollup
4. Schema export and type generation

## Integration Points
- **GraphQL API**: For data querying and mutations
- **Serverless Functions**: For complex business operations
- **Auth API**: For user authentication and sessions
- **Storage API**: For file management

## Environment Configuration
Required environment variables:
- `NHOST_ADMIN_SECRET`
- `NHOST_JWT_SECRET`
- `NHOST_POSTGRES_PASSWORD`
- `NHOST_PROJECT_NAME`
- `ENVIRONMENT`

## Database Design
- PostgreSQL database with hierarchical data modeling (ltree)
- Metadata-driven schema from Hasura
- Row-level security for data isolation

## Build Process
1. Link Nhost configuration
2. Generate environment files
3. Clean previous builds
4. Bundle TypeScript functions
5. Generate package.json for functions
6. Copy Nhost configuration

## Performance Considerations
- GraphQL caching headers
- Database connection pooling
- Function bundling for faster cold starts
- Docker volume persistence for database

## Security
- JWT-based authentication
- Row-level security policies
- Admin secret for privileged operations
- Input validation in all business functions

## Notes for AI Assistants
- The backend follows an action-based approach rather than RESTful endpoints
- All business logic executes through the `execute.ts` function
- Domain models are shared with frontend via generated types
- The Hasura Console is available for metadata exploration
