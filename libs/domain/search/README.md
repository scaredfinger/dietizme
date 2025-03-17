# Search Domain Module

Core domain model and business logic for search functionality across the DietizMe application. This module provides a robust and flexible search system for recipes, meal plans, nutritional data, and other related content.

## Features

- **Search Models**: Core domain entities for search queries and results
- **Filters**: Advanced filtering capabilities
- **Faceted Search**: Support for aggregations and facets
- **Ranked Results**: Intelligent result ranking
- **Full-text Search**: Natural language text search
- **Suggestions**: Auto-complete and suggestion support
- **Multi-entity Search**: Cross-entity search capabilities

## Installation

This library is part of the DietizMe monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@dietizme/domain-search": "workspace:*"
  }
}
```

## Core Domain Model

```typescript
// Core domain entities
export interface SearchQuery {
  text?: string;
  filters?: Filter[];
  facets?: string[];
  sort?: SortOption[];
  pagination: Pagination;
}

export interface Filter {
  field: string;
  operator: FilterOperator;
  value: string | number | boolean | string[] | number[];
}

export enum FilterOperator {
  EQUALS = 'equals',
  NOT_EQUALS = 'not_equals',
  GREATER_THAN = 'greater_than',
  LESS_THAN = 'less_than',
  CONTAINS = 'contains',
  IN = 'in',
  BETWEEN = 'between'
}

export interface SortOption {
  field: string;
  direction: SortDirection;
}

export enum SortDirection {
  ASC = 'asc',
  DESC = 'desc'
}

export interface Pagination {
  page: number;
  pageSize: number;
}

export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  facets?: FacetResult[];
  queryTime?: number;
}

export interface FacetResult {
  field: string;
  values: FacetValue[];
}

export interface FacetValue {
  value: string;
  count: number;
}
```

## Basic Usage

### Simple Search

```typescript
import { SearchService } from '@dietizme/domain-search';

// Initialize the search service
const searchService = new SearchService({
  searchRepository,
  recipeRepository,
  mealPlanRepository,
  logger
});

// Perform a simple search
const results = await searchService.search({
  text: 'vegetarian pasta',
  pagination: {
    page: 1,
    pageSize: 10
  }
});

console.log(`Found ${results.total} results`);
for (const item of results.items) {
  console.log(`- ${item.title} (${item.entityType})`);
}
```

### Advanced Search with Filters

```typescript
// Search with filters
const filteredResults = await searchService.search({
  text: 'chicken',
  filters: [
    {
      field: 'dietaryPreferences',
      operator: FilterOperator.CONTAINS,
      value: 'gluten-free'
    },
    {
      field: 'prepTime',
      operator: FilterOperator.LESS_THAN,
      value: 30 // Minutes
    },
    {
      field: 'calories',
      operator: FilterOperator.BETWEEN,
      value: [300, 600]
    }
  ],
  sort: [
    { field: 'rating', direction: SortDirection.DESC }
  ],
  pagination: {
    page: 1,
    pageSize: 20
  }
});
```

### Faceted Search

```typescript
// Search with facets
const facetedResults = await searchService.search({
  text: 'breakfast',
  facets: ['dietaryPreferences', 'cuisine', 'mealType'],
  pagination: {
    page: 1,
    pageSize: 0 // Only get facets, no results
  }
});

// Display facet values
for (const facet of facetedResults.facets) {
  console.log(`${facet.field}:`);
  for (const value of facet.values) {
    console.log(`  ${value.value} (${value.count})`);
  }
}
```

### Entity-Specific Search

```typescript
// Search only recipes
const recipeResults = await searchService.searchRecipes({
  text: 'smoothie',
  filters: [
    {
      field: 'ingredients',
      operator: FilterOperator.CONTAINS,
      value: 'banana'
    }
  ],
  pagination: {
    page: 1,
    pageSize: 10
  }
});

// Search only meal plans
const mealPlanResults = await searchService.searchMealPlans({
  filters: [
    {
      field: 'dietaryPreferences',
      operator: FilterOperator.EQUALS,
      value: 'vegan'
    }
  ],
  pagination: {
    page: 1,
    pageSize: 10
  }
});
```

## Advanced Features

### Auto-complete and Suggestions

```typescript
import { SuggestionService } from '@dietizme/domain-search';

const suggestionService = new SuggestionService({
  searchRepository,
  logger
});

// Get auto-complete suggestions
const suggestions = await suggestionService.getSuggestions('chi', {
  limit: 5,
  types: ['recipe', 'ingredient']
});

// Display suggestions
for (const suggestion of suggestions) {
  console.log(`${suggestion.text} (${suggestion.type})`);
}

// Get popular searches
const popularSearches = await suggestionService.getPopularSearches({
  limit: 10,
  timeframe: 'week'
});
```

### Natural Language Query Processing

```typescript
import { NaturalLanguageQueryProcessor } from '@dietizme/domain-search';

const nlpProcessor = new NaturalLanguageQueryProcessor({
  logger
});

// Convert natural language query to structured search
const query = "Show me vegetarian pasta recipes that take less than 30 minutes and don't contain mushrooms";

const structuredQuery = await nlpProcessor.processQuery(query);

// The result contains a structured query
console.log('Extracted intent:', structuredQuery.intent);
console.log('Extracted entities:', structuredQuery.entities);
console.log('Generated filters:', structuredQuery.filters);

// Use the structured query for search
const results = await searchService.search(structuredQuery);
```

### Search Analytics

```typescript
import { SearchAnalyticsService } from '@dietizme/domain-search';

const analyticsService = new SearchAnalyticsService({
  searchRepository,
  logger
});

// Log a search query
await analyticsService.logSearch({
  queryText: 'vegetarian pasta',
  userId: 'user-123',
  filters: [{ field: 'prepTime', operator: 'less_than', value: 30 }],
  resultsCount: 15,
  selectedResultId: 'recipe-456',
  sessionId: 'session-789'
});

// Get most popular search terms
const popularTerms = await analyticsService.getPopularSearchTerms({
  timeframe: 'month',
  limit: 10
});

// Get search conversion rate
const conversionRate = await analyticsService.getSearchConversionRate({
  timeframe: 'week'
});

console.log(`Search conversion rate: ${conversionRate}%`);
```

### Personalized Search

```typescript
import { PersonalizedSearchService } from '@dietizme/domain-search';

const personalizedSearch = new PersonalizedSearchService({
  searchRepository,
  userPreferenceRepository,
  logger
});

// Search with user context
const personalResults = await personalizedSearch.searchWithUserContext({
  text: 'dinner ideas',
  userId: 'user-123',
  pagination: {
    page: 1,
    pageSize: 10
  }
});

// The results are adjusted based on:
// - User dietary preferences
// - Previous interactions
// - Favorite recipes
// - Meal history
```

## Integration with BizBuilder

The search domain model integrates with the BizBuilder pattern:

```typescript
import { using } from '@dietizme/biz-builder';
import { SearchQueryBuilder } from '@dietizme/domain-search';

const performAdvancedSearch = (deps, request) => using(deps)
  .buildLoadContextVariablesWith((req) => ({
    userId: req.userId,
    searchText: req.text
  }))
  .loadContextWith(async (deps, vars) => {
    // Load user preferences if user is authenticated
    let userPreferences = null;
    if (vars.userId) {
      userPreferences = await deps.userPreferenceRepository.findByUserId(vars.userId);
    }
    
    return { userPreferences };
  })
  .executeWith(async (deps, req, ctx) => {
    // Build a search query based on request and user preferences
    const queryBuilder = new SearchQueryBuilder()
      .withText(req.text)
      .withPagination(req.page || 1, req.pageSize || 20);
      
    // Add filters from request
    if (req.filters) {
      for (const filter of req.filters) {
        queryBuilder.addFilter(filter.field, filter.operator, filter.value);
      }
    }
    
    // Add personalization if user preferences available
    if (ctx.userPreferences) {
      // Add dietary preference filters
      for (const preference of ctx.userPreferences.dietaryPreferences) {
        queryBuilder.addFilter('dietaryPreferences', FilterOperator.CONTAINS, preference);
      }
      
      // Exclude allergies
      for (const allergen of ctx.userPreferences.allergies) {
        queryBuilder.addFilter('allergens', FilterOperator.NOT_CONTAINS, allergen);
      }
    }
    
    // Add sorting
    if (req.sort) {
      queryBuilder.addSort(req.sort.field, req.sort.direction);
    }
    
    // Request facets if needed
    if (req.facets) {
      for (const facet of req.facets) {
        queryBuilder.addFacet(facet);
      }
    }
    
    // Execute search
    const searchQuery = queryBuilder.build();
    const results = await deps.searchService.search(searchQuery);
    
    // Log search for analytics
    deps.searchAnalyticsService.logSearch({
      queryText: req.text,
      userId: req.userId,
      resultsCount: results.total
    }).catch(error => {
      // Log but don't fail request if analytics logging fails
      deps.logger.warn('Failed to log search analytics', { error });
    });
    
    return results;
  })
  .execute(request);
```

## Testing

```bash
# Run unit tests
nx test domain-search
```

## Dependencies

This domain module depends on:

- `@dietizme/domain-data-types` - For shared data types
- `@dietizme/utils-common` - For utility functions
- Omnidata GraphQL API for search functionality
