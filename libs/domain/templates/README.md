# Templates Domain Module

Core domain model and business logic for meal templates in the Otiuming application. This module handles the creation, management, and application of templates for generating nutritionally balanced meal plans.

## Features

- **Template Models**: Core domain entities for meal templates
- **Nutritional Rules**: Validation of nutritional balance
- **Template Selection**: Intelligent template matching based on user needs
- **Customization**: Adapting templates to individual requirements
- **Constraints**: Handling of dietary constraints and preferences
- **Version Control**: Template versioning and history

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/domain-templates": "workspace:*"
  }
}
```

## Core Domain Model

```typescript
// Core domain entities
export interface MealTemplate {
  id: string;
  name: string;
  description?: string;
  author: string;
  type: TemplateType;
  mealSlots: MealSlot[];
  constraints: Constraint[];
  nutritionalTargets: NutritionalTarget[];
  tags: string[];
  version: number;
  isPublished: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export enum TemplateType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  CUSTOM = 'CUSTOM'
}

export interface MealSlot {
  id: string;
  name: string;
  order: number;
  dayOfWeek?: number; // 0 (Sunday) to 6 (Saturday), for weekly templates
  timeOfDay: TimeOfDay;
  dishTypes: DishType[];
  nutritionalTargets?: NutritionalTarget[];
}

export interface TimeOfDay {
  hour: number;
  minute: number;
}

export enum DishType {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER',
  SNACK = 'SNACK',
  DESSERT = 'DESSERT',
  BEVERAGE = 'BEVERAGE'
}

export interface Constraint {
  type: ConstraintType;
  value: string | string[];
}

export enum ConstraintType {
  DIETARY_PREFERENCE = 'DIETARY_PREFERENCE',
  EXCLUDE_INGREDIENT = 'EXCLUDE_INGREDIENT',
  INCLUDE_INGREDIENT = 'INCLUDE_INGREDIENT',
  CUISINE_TYPE = 'CUISINE_TYPE'
}

export interface NutritionalTarget {
  nutrient: Nutrient;
  target: number;
  min?: number;
  max?: number;
  unit: NutrientUnit;
}

export enum Nutrient {
  CALORIES = 'CALORIES',
  PROTEIN = 'PROTEIN',
  CARBS = 'CARBS',
  FAT = 'FAT',
  FIBER = 'FIBER',
  SUGAR = 'SUGAR',
  SODIUM = 'SODIUM'
}

export enum NutrientUnit {
  GRAMS = 'g',
  MILLIGRAMS = 'mg',
  CALORIES = 'kcal',
  PERCENTAGE = '%'
}
```

## Basic Usage

### Creating Templates

```typescript
import { TemplateService } from '@otiuming/domain-templates';

// Initialize the service
const templateService = new TemplateService({
  templateRepository,
  logger
});

// Create a daily meal template
const dailyTemplate = await templateService.createTemplate({
  name: 'Balanced Daily Template',
  description: 'A balanced daily meal plan with three main meals and two snacks',
  author: 'nutritionist-123',
  type: TemplateType.DAILY,
  mealSlots: [
    {
      name: 'Breakfast',
      order: 1,
      timeOfDay: { hour: 8, minute: 0 },
      dishTypes: [DishType.BREAKFAST]
    },
    {
      name: 'Morning Snack',
      order: 2,
      timeOfDay: { hour: 10, minute: 30 },
      dishTypes: [DishType.SNACK]
    },
    {
      name: 'Lunch',
      order: 3,
      timeOfDay: { hour: 13, minute: 0 },
      dishTypes: [DishType.LUNCH]
    },
    {
      name: 'Afternoon Snack',
      order: 4,
      timeOfDay: { hour: 16, minute: 0 },
      dishTypes: [DishType.SNACK]
    },
    {
      name: 'Dinner',
      order: 5,
      timeOfDay: { hour: 19, minute: 0 },
      dishTypes: [DishType.DINNER]
    }
  ],
  nutritionalTargets: [
    {
      nutrient: Nutrient.CALORIES,
      target: 2000,
      min: 1800,
      max: 2200,
      unit: NutrientUnit.CALORIES
    },
    {
      nutrient: Nutrient.PROTEIN,
      target: 100,
      min: 80,
      max: 120,
      unit: NutrientUnit.GRAMS
    },
    {
      nutrient: Nutrient.CARBS,
      target: 250,
      min: 200,
      max: 300,
      unit: NutrientUnit.GRAMS
    },
    {
      nutrient: Nutrient.FAT,
      target: 65,
      min: 50,
      max: 80,
      unit: NutrientUnit.GRAMS
    }
  ],
  constraints: [],
  tags: ['balanced', 'general', 'three-meals']
});

console.log(`Template created with ID: ${dailyTemplate.id}`);
```

### Weekly Template

```typescript
// Create a weekly meal template
const weeklyTemplate = await templateService.createTemplate({
  name: 'Low-Carb Weekly Plan',
  description: 'A low-carb meal plan for a full week',
  author: 'nutritionist-456',
  type: TemplateType.WEEKLY,
  mealSlots: [
    // Monday
    {
      name: 'Monday Breakfast',
      order: 1,
      dayOfWeek: 1,
      timeOfDay: { hour: 8, minute: 0 },
      dishTypes: [DishType.BREAKFAST]
    },
    {
      name: 'Monday Lunch',
      order: 2,
      dayOfWeek: 1,
      timeOfDay: { hour: 13, minute: 0 },
      dishTypes: [DishType.LUNCH]
    },
    {
      name: 'Monday Dinner',
      order: 3,
      dayOfWeek: 1,
      timeOfDay: { hour: 19, minute: 0 },
      dishTypes: [DishType.DINNER]
    },
    
    // Additional meal slots for Tuesday through Sunday...
  ],
  nutritionalTargets: [
    {
      nutrient: Nutrient.CALORIES,
      target: 1800,
      min: 1600,
      max: 2000,
      unit: NutrientUnit.CALORIES
    },
    {
      nutrient: Nutrient.CARBS,
      target: 100,
      max: 150,
      unit: NutrientUnit.GRAMS
    },
    {
      nutrient: Nutrient.PROTEIN,
      target: 120,
      min: 100,
      unit: NutrientUnit.GRAMS
    }
  ],
  constraints: [
    {
      type: ConstraintType.DIETARY_PREFERENCE,
      value: 'low-carb'
    }
  ],
  tags: ['low-carb', 'high-protein', 'weekly']
});
```

### Finding Templates

```typescript
// Find templates by various criteria
const templates = await templateService.findTemplates({
  type: TemplateType.DAILY,
  tags: ['balanced'],
  constraints: [
    {
      type: ConstraintType.DIETARY_PREFERENCE,
      value: 'vegetarian'
    }
  ],
  isPublished: true
});

// Find template by ID
const template = await templateService.getTemplateById('template-123');

// Find templates by author
const authorTemplates = await templateService.findTemplatesByAuthor('nutritionist-123');
```

### Managing Templates

```typescript
// Update an existing template
const updatedTemplate = await templateService.updateTemplate('template-123', {
  name: 'Updated Template Name',
  description: 'Updated description',
  mealSlots: [
    // Updated meal slots
  ]
});

// Publish a template
const publishedTemplate = await templateService.publishTemplate('template-123');

// Unpublish a template
const unpublishedTemplate = await templateService.unpublishTemplate('template-123');

// Delete a template
await templateService.deleteTemplate('template-123');
```

## Advanced Features

### Template Versioning

```typescript
import { TemplateVersioningService } from '@otiuming/domain-templates';

const versioningService = new TemplateVersioningService({
  templateRepository,
  logger
});

// Create a new version of a template
const newVersion = await versioningService.createNewVersion('template-123', {
  name: 'Balanced Daily Template v2',
  mealSlots: [
    // Updated meal slots
  ],
  nutritionalTargets: [
    // Updated nutritional targets
  ]
});

// Get all versions of a template
const allVersions = await versioningService.getAllVersions('template-123');

// Revert to a previous version
const revertedTemplate = await versioningService.revertToVersion('template-123', 2);

// Compare two versions
const diff = await versioningService.compareVersions('template-123', 2, 3);
console.log('Changes between versions:', diff);
```

### Template Matching

```typescript
import { TemplateMatchingService } from '@otiuming/domain-templates';

const matchingService = new TemplateMatchingService({
  templateRepository,
  userProfileRepository,
  logger
});

// Find best template match for a user
const matchedTemplate = await matchingService.findBestTemplateForUser('user-123', {
  type: TemplateType.WEEKLY,
  preferPublished: true
});

// Find templates that meet nutritional requirements
const matchedTemplates = await matchingService.findTemplatesForNutritionalGoals({
  calories: {
    target: 1800,
    tolerance: 200 // +/- 200 calories
  },
  macroRatio: {
    protein: 30, // 30%
    carbs: 40,   // 40%
    fat: 30      // 30%
  },
  constraints: [
    {
      type: ConstraintType.DIETARY_PREFERENCE,
      value: 'vegetarian'
    }
  ]
});
```

### Template Customization

```typescript
import { TemplateCustomizationService } from '@otiuming/domain-templates';

const customizationService = new TemplateCustomizationService({
  templateRepository,
  recipeRepository,
  logger
});

// Customize a template for user preferences
const customizedTemplate = await customizationService.customizeTemplate('template-123', {
  userId: 'user-456',
  adjustCalories: 1800, // Target calories
  dietaryPreferences: ['vegetarian', 'gluten-free'],
  excludeIngredients: ['mushrooms', 'bell peppers'],
  mealTimes: {
    'breakfast': { hour: 7, minute: 0 },
    'lunch': { hour: 12, minute: 0 },
    'dinner': { hour: 18, minute: 30 }
  }
});

// Scale a template for multiple people
const scaledTemplate = await customizationService.scaleTemplate('template-123', {
  adultCount: 2,
  childCount: 1,
  adjustForChildren: true
});
```

### Nutritional Analysis

```typescript
import { NutritionalAnalysisService } from '@otiuming/domain-templates';

const analysisService = new NutritionalAnalysisService({
  recipeRepository,
  logger
});

// Analyze a template's nutritional profile
const nutritionalAnalysis = await analysisService.analyzeTemplate('template-123');

console.log('Daily averages:');
console.log(`Calories: ${nutritionalAnalysis.averages.calories} kcal`);
console.log(`Protein: ${nutritionalAnalysis.averages.protein}g`);
console.log(`Carbs: ${nutritionalAnalysis.averages.carbs}g`);
console.log(`Fat: ${nutritionalAnalysis.averages.fat}g`);

console.log('Meets nutritional targets:', nutritionalAnalysis.meetsTargets);
if (!nutritionalAnalysis.meetsTargets) {
  console.log('Issues:', nutritionalAnalysis.issues);
}

// Balance a template to meet nutritional targets
const balancedTemplate = await analysisService.balanceTemplate('template-123', {
  prioritize: ['protein', 'fiber'],
  targetCalories: 2000
});
```

## Integration with BizBuilder

The templates domain model integrates with the BizBuilder pattern:

```typescript
import { using } from '@otiuming/biz-builder';
import { TemplateValidator } from '@otiuming/domain-templates';

const createCustomTemplate = (deps, request) => using(deps)
  .buildLoadContextVariablesWith((req) => ({
    userId: req.userId,
    baseTemplateId: req.baseTemplateId
  }))
  .loadContextWith(async (deps, vars) => {
    const [user, baseTemplate] = await Promise.all([
      deps.userRepository.findById(vars.userId),
      vars.baseTemplateId ? deps.templateRepository.findById(vars.baseTemplateId) : null
    ]);
    
    if (!user) {
      throw new NotFoundError('User not found');
    }
    
    // If base template was specified but not found
    if (vars.baseTemplateId && !baseTemplate) {
      throw new NotFoundError('Base template not found');
    }
    
    return { user, baseTemplate };
  })
  .validateWith(
    (deps, req) => TemplateValidator.validateMealSlots(req.mealSlots),
    (deps, req) => TemplateValidator.validateNutritionalTargets(req.nutritionalTargets)
  )
  .executeWith(async (deps, req, ctx) => {
    // Start with a new template or clone the base template
    let templateData = ctx.baseTemplate 
      ? { ...ctx.baseTemplate, id: undefined, version: 1 } // Clone without ID
      : {
          type: req.type || TemplateType.DAILY,
          mealSlots: [],
          constraints: [],
          nutritionalTargets: [],
          tags: [],
          version: 1,
          isPublished: false
        };
    
    // Apply customizations from the request
    templateData = {
      ...templateData,
      name: req.name,
      description: req.description,
      author: ctx.user.id,
      mealSlots: req.mealSlots || templateData.mealSlots,
      constraints: req.constraints || templateData.constraints,
      nutritionalTargets: req.nutritionalTargets || templateData.nutritionalTargets,
      tags: req.tags || templateData.tags
    };
    
    // Create the template
    const template = await deps.templateService.createTemplate(templateData);
    
    // Log the template creation
    deps.logger.info('Custom template created', {
      templateId: template.id,
      userId: ctx.user.id,
      baseTemplateId: ctx.baseTemplate?.id
    });
    
    return template;
  })
  .execute(request);
```

## Testing

```bash
# Run unit tests
nx test domain-templates
```

## Dependencies

This domain module depends on:

- `@otiuming/domain-data-types` - For shared data types
- `@otiuming/utils-common` - For utility functions
- Omnidata GraphQL API for template data storage and retrieval
