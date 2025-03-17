# AI Analysis - domain

## Library Overview
The domain library contains the core domain models and types for the meal planning system. It defines the foundation upon which other libraries and applications are built.

## Package Details
- **Name**: @dietizme/domain
- **Type**: Library package
- **Status**: Active development

## Key Concepts
- Food category definitions
- Recipe models
- Meal template structures
- Meal plan domain entities
- Booking and rate management
- Shopping cart functionality
- Integration with Omnidata

## Structure
- `/booking-questions` - Booking question domain models and logic
- `/bookings` - Booking domain models and management
- `/data-types` - Common data type definitions
- `/omnidata-types` - Generated TypeScript types from Omnidata GraphQL schema
- `/rates` - Rate and pricing domain models
- `/search` - Search functionality domain models
- `/shopping-cart` - Shopping cart domain models and operations
- `/templates` - Meal template structures and operations

## Database Mapping
This library contains the TypeScript representations of the PostgreSQL database schema:

- Categories with hierarchical paths (e.g., "CUISINE.MEDITERRANEAN.SPAIN")
- Recipes with their associated categories
- Meal templates with component requirements
- Meal plans with assigned recipes
- Booking and scheduling data structures
- Shopping cart and order models

## Omnidata Integration
The `/omnidata-types` subdirectory is a critical component that:
- Contains auto-generated TypeScript types from the Omnidata GraphQL schema
- Provides type-safe interfaces for API interactions
- Enables IDE autocompletion and type checking for Omnidata operations
- Serves as the contract between the application and the Omnidata backend

## Usage
This library serves as the foundation for the entire application by providing:
- Type definitions
- Domain constants
- Core entity interfaces
- Domain logic building blocks

## Integration Points
- Used by biz-builder for business logic implementation
- Used by applications for type safety
- Used by API layers for data validation
- Provides the interface for Omnidata service integration
