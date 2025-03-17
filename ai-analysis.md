# AI Analysis - Otiuming Project

## Project Overview
Otiuming is a comprehensive meal planning and nutrition management system using TypeScript, Nx monorepo architecture, and a modern tech stack. The application helps users create nutritionally balanced meal plans based on dietary preferences, restrictions, and nutritional goals.

## Repository Architecture
- **Type**: Nx monorepo with pnpm workspaces
- **Main Language**: TypeScript
- **Code Organization**: Domain-driven design with clean architecture principles
- **Pattern**: BizBuilder fluent API for business operations

## Major Components

### Backend (Omnidata)
- **Framework**: Nhost (Hasura/PostgreSQL/GraphQL)
- **Business Logic**: TypeScript serverless functions
- **Data Storage**: PostgreSQL with ltree extension for hierarchies
- **API Layer**: GraphQL + REST endpoints
- **Authentication**: JWT-based auth through Nhost

### Domain Libraries
- **Domain Models**: Strong type definitions shared across the application
- **Business Logic**: Encapsulated in domain-specific modules
- **Validation Rules**: Business rule enforcement
- **Type Safety**: End-to-end type checking

### Utility Libraries
- **Common Utils**: General-purpose functions
- **GraphQL Utils**: GraphQL client and helpers
- **Logging**: Structured logging system
- **Test Utilities**: Integration test infrastructure

## Key Directories
- `/apps/omnidata`: Backend service implementation
- `/libs/biz-builder`: Business operation pattern library
- `/libs/domain`: Domain models and business logic
- `/libs/utils`: Shared utility functions
- `/libs/integration-tests`: Test infrastructure

## Technology Stack
- **Build System**: Nx + pnpm
- **Backend**: Nhost (Hasura/PostgreSQL)
- **API**: GraphQL + REST endpoints
- **Testing**: Vitest
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Error Tracking**: Sentry
- **Logging**: Pino with structured JSON output

## Main Domain Concepts
- **Food Categories**: Hierarchical food classification system
- **Recipes**: Food preparations with ingredients and instructions
- **Meal Templates**: Reusable patterns for meal plans
- **Nutritional Profiles**: User dietary needs and restrictions
- **Meal Plans**: Generated plans tailored to user needs
- **Bookings**: Consultation appointments
- **Rates**: Pricing and discount rules

## Data Flow
1. **User Input**: Dietary preferences and nutritional goals
2. **Template Selection**: Based on user requirements
3. **Meal Plan Generation**: Using templates and recipe database
4. **Customization**: User adjustments to proposed plans
5. **Shopping List**: Generation of required ingredients
6. **Nutritionist Review**: Optional professional consultation

## Development Workflow
- Uses Conventional Commits (feat, fix, chore, etc.)
- Feature branching workflow
- Pull request reviews
- Automated testing on CI
- Dependabot for dependency updates

## Documentation Strategy
- README files for each module
- JSDoc comments in code
- AI-analysis files for AI tools
- Comprehensive API documentation
- Usage examples

## Code Quality Measures
- ESLint for static analysis
- TypeScript for type safety
- Vitest for unit and integration testing
- Strict typing across boundaries
- Immutable patterns where appropriate

## Integration Points
- **GraphQL API**: Main data interface
- **Auth Service**: Authentication and authorization
- **Function Endpoints**: Business operations
- **Storage API**: File management

## Deployment Architecture
- Containerized services
- Environment-based configuration
- Secrets management
- Horizontal scaling capability

## Performance Considerations
- GraphQL query optimization
- React component optimization
- Database query optimization
- Caching strategies

## Security Practices
- Input validation
- Authentication with JWT
- Row-level security in database
- CSRF protection
- API rate limiting

## Notes for AI Assistants
- Project uses a monorepo structure, with clear separation of concerns
- Business logic is primarily in domain modules, executed by Omnidata
- When generating code, follow the BizBuilder pattern for business operations
- Reference the appropriate type definitions from domain-omnidata-types
- Follow the established naming conventions and code style
