# Rates Domain Module

Core domain model and business logic for pricing, rates, and discount management in the Otiuming application. This module handles the definition, calculation, and application of pricing rules for services and products.

## Features

- **Rate Models**: Core domain entities for prices and rate plans
- **Pricing Engine**: Dynamic pricing calculation
- **Discount Rules**: Application of discounts and promotions
- **Tax Calculation**: Handling of tax rates and calculations
- **Currency Support**: Multi-currency pricing capabilities
- **Time-based Pricing**: Support for seasonal and time-based rates
- **Custom Pricing Rules**: Extensible pricing rule system

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/domain-rates": "workspace:*"
  }
}
```

## Core Domain Model

```typescript
// Core domain entities
export interface Rate {
  id: string;
  serviceId: string;
  name: string;
  description?: string;
  basePrice: Money;
  discountRules?: DiscountRule[];
  taxRate?: number;
  currency: string;
  validFrom?: Date;
  validTo?: Date;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Money {
  amount: number;  // Amount in smallest currency unit (e.g., cents)
  currency: string; // ISO currency code
}

export interface DiscountRule {
  id: string;
  type: DiscountType;
  value: number;
  constraint?: DiscountConstraint;
  priority: number;
  combinable: boolean;
}

export enum DiscountType {
  PERCENTAGE = 'PERCENTAGE',
  FIXED_AMOUNT = 'FIXED_AMOUNT'
}

export interface DiscountConstraint {
  type: ConstraintType;
  value: string | number | Date;
}

export enum ConstraintType {
  MIN_QUANTITY = 'MIN_QUANTITY',
  SUBSCRIPTION = 'SUBSCRIPTION',
  DATE_RANGE = 'DATE_RANGE',
  USER_TYPE = 'USER_TYPE',
  COUPON_CODE = 'COUPON_CODE'
}

export interface PriceCalculation {
  basePrice: Money;
  discounts: AppliedDiscount[];
  subtotal: Money;
  tax: Money;
  total: Money;
}

export interface AppliedDiscount {
  discountId: string;
  name: string;
  value: Money;
}
```

## Basic Usage

### Managing Rates

```typescript
import { RateService } from '@otiuming/domain-rates';

// Initialize the service
const rateService = new RateService({
  rateRepository,
  serviceRepository,
  logger
});

// Create a new rate
const rate = await rateService.createRate({
  serviceId: 'service-nutrition-consultation',
  name: 'Standard Consultation Rate',
  description: 'Standard hourly rate for nutrition consultations',
  basePrice: {
    amount: 9900, // $99.00
    currency: 'USD'
  },
  taxRate: 0.08, // 8% tax
  isActive: true
});

console.log(`Rate created with ID: ${rate.id}`);

// Add a discount rule to a rate
const updatedRate = await rateService.addDiscountRule(rate.id, {
  type: DiscountType.PERCENTAGE,
  value: 10, // 10% discount
  constraint: {
    type: ConstraintType.MIN_QUANTITY,
    value: 3 // Applies to 3 or more sessions
  },
  priority: 1,
  combinable: true
});

// Get all active rates for a service
const rates = await rateService.getActiveRatesForService('service-nutrition-consultation');
```

### Price Calculation

```typescript
import { PricingEngine } from '@otiuming/domain-rates';

// Initialize the pricing engine
const pricingEngine = new PricingEngine({
  rateRepository,
  couponRepository,
  logger
});

// Calculate price for a service
const priceCalculation = await pricingEngine.calculatePrice({
  serviceId: 'service-nutrition-consultation',
  quantity: 1,
  date: new Date(),
  userType: 'REGULAR'
});

console.log(`Base price: $${priceCalculation.basePrice.amount / 100}`);
console.log(`Subtotal: $${priceCalculation.subtotal.amount / 100}`);
console.log(`Tax: $${priceCalculation.tax.amount / 100}`);
console.log(`Total: $${priceCalculation.total.amount / 100}`);

// Calculate price with a coupon code
const discountedPrice = await pricingEngine.calculatePriceWithCoupon({
  serviceId: 'service-nutrition-consultation',
  quantity: 1,
  couponCode: 'SAVE20'
});

// Applied discounts
for (const discount of discountedPrice.discounts) {
  console.log(`Discount: ${discount.name}, Amount: $${discount.value.amount / 100}`);
}
```

### Bulk Price Calculation

```typescript
// Calculate prices for multiple items
const cartItems = [
  { serviceId: 'service-nutrition-consultation', quantity: 1 },
  { serviceId: 'service-meal-plan', quantity: 1 }
];

const cartPricing = await pricingEngine.calculateCartPrice({
  items: cartItems,
  couponCode: 'BUNDLE15'
});

console.log(`Cart subtotal: $${cartPricing.subtotal.amount / 100}`);
console.log(`Cart total: $${cartPricing.total.amount / 100}`);
```

## Advanced Features

### Time-based Pricing

```typescript
// Create a seasonal rate
const seasonalRate = await rateService.createRate({
  serviceId: 'service-nutrition-consultation',
  name: 'Summer Special Rate',
  basePrice: {
    amount: 7900, // $79.00
    currency: 'USD'
  },
  validFrom: new Date('2025-06-01'),
  validTo: new Date('2025-08-31'),
  isActive: true
});

// Get applicable rates for a specific date
const applicableRates = await rateService.getApplicableRates(
  'service-nutrition-consultation',
  new Date('2025-07-15')
);
```

### Subscription Pricing

```typescript
import { SubscriptionPricingService } from '@otiuming/domain-rates';

const subscriptionService = new SubscriptionPricingService({
  rateRepository,
  subscriptionRepository,
  logger
});

// Create a subscription plan
const subscriptionPlan = await subscriptionService.createSubscriptionPlan({
  name: 'Monthly Nutrition Coaching',
  description: 'Unlimited consultations with monthly payment',
  intervalType: 'MONTH',
  intervalCount: 1,
  price: {
    amount: 19900, // $199.00
    currency: 'USD'
  },
  includedServices: [
    { serviceId: 'service-nutrition-consultation', limit: 4 },
    { serviceId: 'service-meal-plan', limit: 1 }
  ]
});

// Calculate subscription price with add-ons
const subscriptionPrice = await subscriptionService.calculateSubscriptionPrice({
  planId: subscriptionPlan.id,
  addOns: [
    { serviceId: 'service-personalized-cookbook', quantity: 1 }
  ]
});
```

### Coupon Management

```typescript
import { CouponService } from '@otiuming/domain-rates';

const couponService = new CouponService({
  couponRepository,
  logger
});

// Create a new coupon
const coupon = await couponService.createCoupon({
  code: 'WELCOME25',
  name: 'Welcome Discount',
  discountType: DiscountType.PERCENTAGE,
  discountValue: 25,
  validFrom: new Date(),
  validTo: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
  maxUsesTotal: 1000,
  maxUsesPerUser: 1,
  minOrderAmount: 5000, // $50.00
  applicableServiceIds: ['service-nutrition-consultation', 'service-meal-plan']
});

// Validate a coupon code
const validationResult = await couponService.validateCoupon('WELCOME25', {
  userId: 'user-123',
  orderAmount: 9900,
  serviceId: 'service-nutrition-consultation'
});

if (validationResult.valid) {
  console.log('Coupon is valid and can be applied');
} else {
  console.error('Coupon validation failed:', validationResult.reason);
}

// Track coupon usage
await couponService.trackCouponUsage('WELCOME25', 'user-123', 'order-456');
```

### Dynamic Pricing Rules

```typescript
import { PricingRuleEngine } from '@otiuming/domain-rates';

// Initialize the rule engine
const ruleEngine = new PricingRuleEngine({
  logger
});

// Register custom pricing rules
ruleEngine.registerRule('LOYALTY_DISCOUNT', (context) => {
  const { user, basePrice } = context;
  
  if (user.loyaltyTier === 'GOLD') {
    return {
      type: 'PERCENTAGE',
      value: 15,
      description: 'Gold Loyalty Discount'
    };
  }
  
  if (user.loyaltyTier === 'SILVER') {
    return {
      type: 'PERCENTAGE',
      value: 10,
      description: 'Silver Loyalty Discount'
    };
  }
  
  return null; // No discount
});

// Apply dynamic pricing rules
const dynamicPrice = await ruleEngine.applyRules({
  user: { id: 'user-123', loyaltyTier: 'GOLD' },
  service: { id: 'service-nutrition-consultation' },
  basePrice: { amount: 9900, currency: 'USD' },
  date: new Date()
});
```

## Integration with BizBuilder

The rates domain model integrates with the BizBuilder pattern:

```typescript
import { using } from '@otiuming/biz-builder';
import { RateValidator } from '@otiuming/domain-rates';

const calculateServicePrice = (deps, request) => using(deps)
  .buildLoadContextVariablesWith((req) => ({
    serviceId: req.serviceId,
    date: req.date || new Date()
  }))
  .loadContextWith(async (deps, vars) => {
    const [service, applicableRates] = await Promise.all([
      deps.serviceRepository.findById(vars.serviceId),
      deps.rateRepository.findApplicableRates(vars.serviceId, vars.date)
    ]);
    
    if (!service) {
      throw new NotFoundError('Service not found');
    }
    
    return { service, applicableRates };
  })
  .validateWith(
    (deps, req, ctx) => RateValidator.validateServiceHasRates(ctx.applicableRates),
    (deps, req) => req.couponCode ? RateValidator.validateCouponCode(deps, req.couponCode) : Promise.resolve()
  )
  .executeWith(async (deps, req, ctx) => {
    const pricingEngine = new PricingEngine({
      rateRepository: deps.rateRepository,
      couponRepository: deps.couponRepository,
      logger: deps.logger
    });
    
    const priceCalculation = await pricingEngine.calculatePrice({
      serviceId: req.serviceId,
      quantity: req.quantity || 1,
      date: req.date,
      userType: req.userType,
      couponCode: req.couponCode
    });
    
    // Log the price calculation
    deps.logger.info('Price calculated', {
      serviceId: req.serviceId,
      basePrice: priceCalculation.basePrice,
      total: priceCalculation.total,
      discounts: priceCalculation.discounts.length
    });
    
    return priceCalculation;
  })
  .execute(request);
```

## Testing

```bash
# Run unit tests
nx test domain-rates
```

## Dependencies

This domain module depends on:

- `@otiuming/domain-data-types` - For shared data types
- `@otiuming/utils-common` - For utility functions
