# Bookings Domain Module

Core domain model and business logic for managing bookings and appointments in the DietizMe application. This module handles the creation, management, and scheduling of nutrition consultation appointments and related services.

## Features

- **Booking Models**: Core domain entities for appointments and bookings
- **Scheduling Logic**: Rules for time slot management and availability
- **Validation Rules**: Business rules for booking operations
- **Calendar Integration**: Integration with calendar systems
- **Notification Hooks**: Event triggers for booking notifications
- **Conflict Resolution**: Logic for handling booking conflicts

## Installation

This library is part of the DietizMe monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@dietizme/domain-bookings": "workspace:*"
  }
}
```

## Core Domain Model

```typescript
// Core domain entities
export interface Booking {
  id: string;
  userId: string;
  practitionerId: string;
  serviceId: string;
  startTime: Date;
  endTime: Date;
  status: BookingStatus;
  notes?: string;
  questionnaire?: QuestionnaireResponse;
  createdAt: Date;
  updatedAt: Date;
}

export enum BookingStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  CANCELED = 'CANCELED',
  COMPLETED = 'COMPLETED',
  NO_SHOW = 'NO_SHOW'
}

export interface QuestionnaireResponse {
  id: string;
  bookingId: string;
  answers: Answer[];
  submittedAt: Date;
}

export interface Answer {
  questionId: string;
  value: string | string[] | number | boolean;
}

// Time slot model
export interface TimeSlot {
  id: string;
  practitionerId: string;
  startTime: Date;
  endTime: Date;
  available: boolean;
  bookingId?: string;
}
```

## Basic Usage

### Checking Availability

```typescript
import { BookingService } from '@dietizme/domain-bookings';

// Initialize the service
const bookingService = new BookingService({
  bookingRepository,
  practitionerRepository,
  timeSlotRepository,
  notificationService,
  logger
});

// Check practitioner availability
const availableSlots = await bookingService.getAvailableTimeSlots({
  practitionerId: 'practitioner-123',
  startDate: new Date('2025-04-01'),
  endDate: new Date('2025-04-07'),
  duration: 60 // minutes
});

// Display available time slots
console.log(`Found ${availableSlots.length} available slots`);
for (const slot of availableSlots) {
  console.log(`${slot.startTime.toLocaleString()} - ${slot.endTime.toLocaleString()}`);
}
```

### Creating a Booking

```typescript
// Create a new booking
const booking = await bookingService.createBooking({
  userId: 'user-456',
  practitionerId: 'practitioner-123',
  serviceId: 'service-initial-consultation',
  timeSlot: {
    startTime: new Date('2025-04-05T10:00:00'),
    endTime: new Date('2025-04-05T11:00:00')
  },
  notes: 'First consultation to discuss meal planning'
});

console.log(`Booking created with ID: ${booking.id}`);
console.log(`Status: ${booking.status}`);
```

### Managing Bookings

```typescript
// Confirm a booking
const confirmedBooking = await bookingService.updateBookingStatus(
  booking.id,
  BookingStatus.CONFIRMED
);

// Cancel a booking
const canceledBooking = await bookingService.cancelBooking(booking.id, {
  reason: 'Schedule conflict',
  notifyUser: true
});

// Reschedule a booking
const rescheduledBooking = await bookingService.rescheduleBooking(booking.id, {
  newStartTime: new Date('2025-04-06T14:00:00'),
  newEndTime: new Date('2025-04-06T15:00:00'),
  notifyUser: true
});

// Complete a booking
const completedBooking = await bookingService.completeBooking(booking.id, {
  notes: 'Successful consultation, follow-up recommended',
  followUpRecommended: true
});
```

### Questionnaire Responses

```typescript
// Submit questionnaire responses
const questionnaireResponse = await bookingService.submitQuestionnaireResponse(booking.id, {
  answers: [
    { questionId: 'q1', value: 'Yes' },
    { questionId: 'q2', value: ['Vegetarian', 'Gluten-free'] },
    { questionId: 'q3', value: 7 }, // Scale 1-10
    { questionId: 'q4', value: true }
  ]
});

// Retrieve questionnaire responses
const responses = await bookingService.getQuestionnaireResponses(booking.id);
```

## Advanced Features

### Recurrent Bookings

```typescript
import { RecurrencePattern, RecurrenceFrequency } from '@dietizme/domain-bookings';

// Create a recurring booking pattern
const recurringBookings = await bookingService.createRecurringBookings({
  userId: 'user-456',
  practitionerId: 'practitioner-123',
  serviceId: 'service-followup-consultation',
  initialDate: new Date('2025-04-05T10:00:00'),
  duration: 60, // minutes
  recurrencePattern: {
    frequency: RecurrenceFrequency.WEEKLY,
    interval: 1, // every week
    count: 8, // 8 sessions
    weekdays: [5] // Friday (0-6, where 0 is Sunday)
  }
});

console.log(`Created ${recurringBookings.length} recurring bookings`);
```

### Practitioner Availability Management

```typescript
import { AvailabilityService } from '@dietizme/domain-bookings';

const availabilityService = new AvailabilityService({
  timeSlotRepository,
  practitionerRepository,
  bookingRepository,
  logger
});

// Set regular practitioner availability
await availabilityService.setRegularAvailability('practitioner-123', [
  {
    weekday: 1, // Monday
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 17, minute: 0 }
  },
  {
    weekday: 3, // Wednesday
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 17, minute: 0 }
  },
  {
    weekday: 5, // Friday
    startTime: { hour: 9, minute: 0 },
    endTime: { hour: 15, minute: 0 }
  }
]);

// Mark specific dates as unavailable
await availabilityService.markDatesUnavailable('practitioner-123', [
  new Date('2025-04-15'), // Holiday
  new Date('2025-04-16') // Conference
]);

// Generate time slots based on availability
await availabilityService.generateTimeSlotsForPeriod(
  'practitioner-123',
  new Date('2025-04-01'),
  new Date('2025-04-30'),
  60 // minutes per slot
);
```

### Booking Analytics

```typescript
import { BookingAnalyticsService } from '@dietizme/domain-bookings';

const analyticsService = new BookingAnalyticsService({
  bookingRepository,
  practitionerRepository
});

// Get booking statistics for a practitioner
const stats = await analyticsService.getPractitionerStatistics(
  'practitioner-123',
  new Date('2025-01-01'),
  new Date('2025-03-31')
);

console.log(`Total bookings: ${stats.totalBookings}`);
console.log(`Completion rate: ${stats.completionRate}%`);
console.log(`No-show rate: ${stats.noShowRate}%`);
console.log(`Average booking duration: ${stats.averageDuration} minutes`);
```

## Integration with BizBuilder

The bookings domain model integrates with the BizBuilder pattern:

```typescript
import { using } from '@dietizme/biz-builder';
import { BookingValidator } from '@dietizme/domain-bookings';

const createBookingOperation = (deps, request) => using(deps)
  .buildLoadContextVariablesWith((req) => ({
    practitionerId: req.practitionerId,
    startTime: req.startTime,
    endTime: req.endTime
  }))
  .loadContextWith(async (deps, vars) => {
    const [practitioner, timeSlots] = await Promise.all([
      deps.practitionerRepository.findById(vars.practitionerId),
      deps.timeSlotRepository.findOverlappingSlots(
        vars.practitionerId,
        vars.startTime,
        vars.endTime
      )
    ]);
    
    if (!practitioner) {
      throw new NotFoundError('Practitioner not found');
    }
    
    return { practitioner, timeSlots };
  })
  .validateWith(
    (deps, req, ctx) => BookingValidator.validateTimeSlotAvailability(ctx.timeSlots),
    (deps, req, ctx) => BookingValidator.validatePractitionerAvailability(
      ctx.practitioner, 
      req.startTime, 
      req.endTime
    ),
    (deps, req) => BookingValidator.validateBookingDuration(
      req.startTime, 
      req.endTime
    )
  )
  .executeWith(async (deps, req, ctx) => {
    const booking = await deps.bookingRepository.create({
      userId: req.userId,
      practitionerId: ctx.practitioner.id,
      serviceId: req.serviceId,
      startTime: req.startTime,
      endTime: req.endTime,
      status: BookingStatus.PENDING,
      notes: req.notes
    });
    
    // Mark time slots as unavailable
    await deps.timeSlotRepository.updateSlotsAvailability(
      ctx.timeSlots.map(slot => slot.id),
      false,
      booking.id
    );
    
    // Send notification
    await deps.notificationService.sendBookingConfirmation(booking);
    
    return booking;
  })
  .execute(request);
```

## Testing

```bash
# Run unit tests
nx test domain-bookings
```

## Dependencies

This domain module depends on:

- `@dietizme/domain-data-types` - For shared data types
- `@dietizme/domain-booking-questions` - For questionnaire functionality
- `@dietizme/utils-common` - For utility functions
