# Booking Questions Domain Module

Core domain model and business logic for managing questionnaires and forms used in the booking process of the Otiuming application. This module handles the creation, validation, and processing of questions that collect important nutrition and health information during the consultation booking process.

## Features

- **Question Models**: Core domain entities for forms and questions
- **Question Types**: Support for various question formats (text, multiple choice, etc.)
- **Form Builder**: Tools for constructing questionnaires
- **Validation Rules**: Business rules for question responses
- **Conditional Logic**: Show/hide questions based on previous answers
- **Response Analysis**: Tools for analyzing and processing responses

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/domain-booking-questions": "workspace:*"
  }
}
```

## Core Domain Model

```typescript
// Core domain entities
export interface Questionnaire {
  id: string;
  title: string;
  description?: string;
  sections: Section[];
  version: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Section {
  id: string;
  title: string;
  order: number;
  questions: Question[];
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  required: boolean;
  order: number;
  options?: QuestionOption[];
  conditionalDisplay?: ConditionalDisplay;
  validationRules?: ValidationRule[];
}

export enum QuestionType {
  SHORT_TEXT = 'SHORT_TEXT',
  LONG_TEXT = 'LONG_TEXT',
  SINGLE_CHOICE = 'SINGLE_CHOICE',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  SCALE = 'SCALE',
  DATE = 'DATE',
  YES_NO = 'YES_NO',
  NUMBER = 'NUMBER'
}

export interface QuestionOption {
  id: string;
  text: string;
  value: string;
  order: number;
}

export interface ConditionalDisplay {
  dependsOnQuestionId: string;
  operator: ConditionalOperator;
  value: string | string[] | number | boolean;
}

export enum ConditionalOperator {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  CONTAINS = 'CONTAINS',
  GREATER_THAN = 'GREATER_THAN',
  LESS_THAN = 'LESS_THAN'
}

export interface ValidationRule {
  type: ValidationType;
  params?: any;
  errorMessage: string;
}

export enum ValidationType {
  MIN_LENGTH = 'MIN_LENGTH',
  MAX_LENGTH = 'MAX_LENGTH',
  PATTERN = 'PATTERN',
  MIN_VALUE = 'MIN_VALUE',
  MAX_VALUE = 'MAX_VALUE',
  REQUIRED_OPTIONS = 'REQUIRED_OPTIONS'
}
```

## Basic Usage

### Creating a Questionnaire

```typescript
import { QuestionnaireService } from '@otiuming/domain-booking-questions';

// Initialize the service
const questionnaireService = new QuestionnaireService({
  questionnaireRepository,
  logger
});

// Create a new questionnaire
const questionnaire = await questionnaireService.createQuestionnaire({
  title: 'Nutrition Consultation Intake Form',
  description: 'Please complete this form before your consultation',
  sections: [
    {
      title: 'Basic Information',
      order: 1,
      questions: [
        {
          text: 'What is your age?',
          type: QuestionType.NUMBER,
          required: true,
          order: 1,
          validationRules: [
            {
              type: ValidationType.MIN_VALUE,
              params: { value: 18 },
              errorMessage: 'You must be at least 18 years old'
            }
          ]
        },
        {
          text: 'What is your gender?',
          type: QuestionType.SINGLE_CHOICE,
          required: true,
          order: 2,
          options: [
            { text: 'Male', value: 'male', order: 1 },
            { text: 'Female', value: 'female', order: 2 },
            { text: 'Non-binary', value: 'non-binary', order: 3 },
            { text: 'Prefer not to say', value: 'no-answer', order: 4 }
          ]
        }
      ]
    },
    {
      title: 'Dietary Preferences',
      order: 2,
      questions: [
        {
          text: 'Do you have any dietary restrictions?',
          type: QuestionType.YES_NO,
          required: true,
          order: 1
        },
        {
          text: 'Please select all dietary restrictions that apply:',
          type: QuestionType.MULTIPLE_CHOICE,
          required: true,
          order: 2,
          options: [
            { text: 'Vegetarian', value: 'vegetarian', order: 1 },
            { text: 'Vegan', value: 'vegan', order: 2 },
            { text: 'Gluten-free', value: 'gluten-free', order: 3 },
            { text: 'Dairy-free', value: 'dairy-free', order: 4 },
            { text: 'Nut allergies', value: 'nut-allergies', order: 5 },
            { text: 'Other (please specify)', value: 'other', order: 6 }
          ],
          conditionalDisplay: {
            dependsOnQuestionId: 'dietary-restrictions-yn',
            operator: ConditionalOperator.EQUALS,
            value: true
          }
        }
      ]
    }
  ]
});

console.log(`Questionnaire created with ID: ${questionnaire.id}`);
```

### Retrieving Questionnaires

```typescript
// Get a questionnaire by ID
const questionnaire = await questionnaireService.getQuestionnaireById('questionnaire-123');

// Get all questionnaires
const allQuestionnaires = await questionnaireService.getAllQuestionnaires();
```

### Updating Questionnaires

```typescript
// Update an existing questionnaire
const updatedQuestionnaire = await questionnaireService.updateQuestionnaire('questionnaire-123', {
  title: 'Updated Nutrition Consultation Intake Form',
  sections: [
    // Updated sections and questions
  ]
});

// Add a new section to a questionnaire
const newSection = await questionnaireService.addSectionToQuestionnaire('questionnaire-123', {
  title: 'Medical History',
  order: 3,
  questions: [
    // Questions for the new section
  ]
});

// Add a question to a section
const newQuestion = await questionnaireService.addQuestionToSection('section-456', {
  text: 'Do you have any allergies?',
  type: QuestionType.YES_NO,
  required: true,
  order: 1
});
```

### Questionnaire Versioning

```typescript
// Create a new version of a questionnaire
const newVersion = await questionnaireService.createQuestionnaireVersion('questionnaire-123', {
  title: 'Nutrition Consultation Intake Form v2',
  sections: [
    // Modified sections and questions
  ]
});

// Get all versions of a questionnaire
const versions = await questionnaireService.getQuestionnaireVersions('questionnaire-123');

// Get a specific version
const specificVersion = await questionnaireService.getQuestionnaireVersion('questionnaire-123', 2);
```

## Advanced Features

### Dynamic Form Rendering

```typescript
import { FormRenderer } from '@otiuming/domain-booking-questions';

const formRenderer = new FormRenderer({
  questionnaire,
  initialValues: {},
  onValueChange: (questionId, value) => {
    // Handle value changes
    console.log(`Question ${questionId} changed to ${value}`);
  }
});

// Generate a form configuration
const formConfig = formRenderer.generateFormConfig();

// Get currently visible questions based on conditional logic
const visibleQuestions = formRenderer.getVisibleQuestions(currentValues);

// Validate the entire form
const validationResults = formRenderer.validateForm(formValues);
if (!validationResults.valid) {
  console.error('Validation errors:', validationResults.errors);
}
```

### Response Analysis

```typescript
import { ResponseAnalyzer } from '@otiuming/domain-booking-questions';

const responseAnalyzer = new ResponseAnalyzer({
  questionnaire,
  responses
});

// Get a summary of responses
const summary = responseAnalyzer.generateSummary();

// Identify nutrition risk factors
const riskFactors = responseAnalyzer.identifyRiskFactors();

// Generate dietary recommendations based on responses
const recommendations = responseAnalyzer.generateRecommendations();

// Export responses to a structured format
const exportedData = responseAnalyzer.exportResponses('json');
```

### Questionnaire Templates

```typescript
import { QuestionnaireTemplateService } from '@otiuming/domain-booking-questions';

const templateService = new QuestionnaireTemplateService({
  questionnaireRepository,
  templateRepository,
  logger
});

// Get all available templates
const templates = await templateService.getAllTemplates();

// Create a questionnaire from a template
const newQuestionnaire = await templateService.createFromTemplate('template-initial-consult');

// Save current questionnaire as a template
const template = await templateService.saveAsTemplate('questionnaire-123', {
  name: 'Standard Nutrition Assessment',
  description: 'Basic nutrition assessment questionnaire for new clients',
  category: 'NUTRITION'
});
```

## Integration with BizBuilder

The booking-questions domain model integrates with the BizBuilder pattern:

```typescript
import { using } from '@otiuming/biz-builder';
import { QuestionnaireValidator } from '@otiuming/domain-booking-questions';

const submitQuestionnaireResponse = (deps, request) => using(deps)
  .buildLoadContextVariablesWith((req) => ({
    questionnaireId: req.questionnaireId,
    bookingId: req.bookingId
  }))
  .loadContextWith(async (deps, vars) => {
    const [questionnaire, booking] = await Promise.all([
      deps.questionnaireRepository.findById(vars.questionnaireId),
      deps.bookingRepository.findById(vars.bookingId)
    ]);
    
    if (!questionnaire) {
      throw new NotFoundError('Questionnaire not found');
    }
    if (!booking) {
      throw new NotFoundError('Booking not found');
    }
    
    return { questionnaire, booking };
  })
  .validateWith(
    (deps, req, ctx) => QuestionnaireValidator.validateResponses(ctx.questionnaire, req.responses),
    (deps, req, ctx) => QuestionnaireValidator.validateRequiredQuestions(ctx.questionnaire, req.responses)
  )
  .executeWith(async (deps, req, ctx) => {
    const questionnaireResponse = await deps.responseRepository.create({
      bookingId: ctx.booking.id,
      questionnaireId: ctx.questionnaire.id,
      responses: req.responses,
      submittedAt: new Date()
    });
    
    // Update booking with questionnaire completion status
    await deps.bookingRepository.update(ctx.booking.id, {
      questionnaireCompleted: true
    });
    
    // Notify practitioner
    await deps.notificationService.notifyQuestionnaireSubmitted(
      ctx.booking.practitionerId,
      ctx.booking.id,
      questionnaireResponse.id
    );
    
    return questionnaireResponse;
  })
  .execute(request);
```

## Testing

```bash
# Run unit tests
nx test domain-booking-questions
```

## Dependencies

This domain module depends on:

- `@otiuming/domain-data-types` - For shared data types
- `@otiuming/domain-bookings` - For booking-related functionality
- `@otiuming/utils-common` - For utility functions
