# Shopping Cart Domain Module

Core domain model and business logic for the shopping cart functionality in the Otiuming application. This module handles the creation, management, and validation of shopping carts and their items.

## Features

- **Shopping Cart Model**: Core domain entity for carts and items
- **Validation Rules**: Business rules for cart operations
- **Transformations**: Conversions between different representations
- **Cart Operations**: Add, update, remove items and apply discounts
- **Totals Calculation**: Price, tax, and discount calculations
- **Inventory Integration**: Stock verification and reservation

## Installation

This library is part of the Otiuming monorepo and should be referenced as:

```json
{
  "dependencies": {
    "@otiuming/domain-shopping-cart": "workspace:*"
  }
}
```

## Core Domain Model

```typescript
// Core domain entities
export interface ShoppingCart {
  id: string;
  userId?: string;
  items: CartItem[];
  couponCode?: string;
  createdAt: Date;
  updatedAt: Date;
  expiresAt: Date;
}

export interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  unitPrice: Money;
  customizations?: Customization[];
}

export interface Customization {
  type: CustomizationType;
  value: string;
  priceAdjustment: Money;
}

export enum CustomizationType {
  DIETARY_PREFERENCE = 'DIETARY_PREFERENCE',
  INGREDIENT_EXCLUSION = 'INGREDIENT_EXCLUSION',
  INGREDIENT_SUBSTITUTION = 'INGREDIENT_SUBSTITUTION',
  PORTION_SIZE = 'PORTION_SIZE'
}

export interface Money {
  amount: number;
  currency: string;
}

// Value objects
export interface CartSummary {
  subtotal: Money;
  tax: Money;
  discount: Money;
  total: Money;
  itemCount: number;
}
```

## Basic Usage

### Creating a Cart

```typescript
import { ShoppingCartService } from '@otiuming/domain-shopping-cart';

// Inject dependencies
const cartService = new ShoppingCartService({
  cartRepository,
  productService,
  pricingEngine,
  logger
});

// Create a new cart
const cart = await cartService.createCart({
  userId: 'user-123', // Optional for guest carts
});
```

### Adding Items

```typescript
// Add an item to cart
const updatedCart = await cartService.addItem(cart.id, {
  productId: 'meal-plan-weekly',
  quantity: 1,
  customizations: [
    {
      type: CustomizationType.DIETARY_PREFERENCE,
      value: 'vegetarian',
      priceAdjustment: { amount: 0, currency: 'USD' }
    },
    {
      type: CustomizationType.PORTION_SIZE,
      value: 'large',
      priceAdjustment: { amount: 500, currency: 'USD' } // $5.00
    }
  ]
});
```

### Updating Items

```typescript
// Update an item's quantity
const updatedCart = await cartService.updateItem(cart.id, itemId, {
  quantity: 2
});

// Update customizations
const updatedCart = await cartService.updateItem(cart.id, itemId, {
  customizations: [
    // Updated customizations array
  ]
});
```

### Removing Items

```typescript
// Remove an item from the cart
const updatedCart = await cartService.removeItem(cart.id, itemId);
```

### Applying Coupon Codes

```typescript
// Apply a coupon code
const cartWithDiscount = await cartService.applyCoupon(cart.id, 'WELCOME10');

// Remove a coupon code
const cartWithoutDiscount = await cartService.removeCoupon(cart.id);
```

### Getting Cart Totals

```typescript
// Get cart summary with totals
const summary = await cartService.getCartSummary(cart.id);

console.log(`Subtotal: $${summary.subtotal.amount / 100}`);
console.log(`Tax: $${summary.tax.amount / 100}`);
console.log(`Discount: $${summary.discount.amount / 100}`);
console.log(`Total: $${summary.total.amount / 100}`);
console.log(`Items: ${summary.itemCount}`);
```

## Advanced Features

### Cart Transformations

```typescript
import { CartTransformer } from '@otiuming/domain-shopping-cart';

// Transform cart to order creation request
const orderRequest = CartTransformer.toOrderRequest(cart, {
  shippingAddress,
  billingAddress,
  paymentMethodId
});

// Transform cart to checkout form initial values
const checkoutFormValues = CartTransformer.toCheckoutFormValues(cart);
```

### Cart Validation

```typescript
import { CartValidator } from '@otiuming/domain-shopping-cart';

// Validate the entire cart
try {
  await CartValidator.validateCart(cart);
} catch (error) {
  console.error('Cart validation failed:', error.message);
}

// Validate specific cart aspects
await CartValidator.validateItemAvailability(cart);
await CartValidator.validateDeliveryOptions(cart, deliveryZipCode);
await CartValidator.validateCouponEligibility(cart, couponCode);
```

### Cart Persistence

```typescript
import { CartPersistenceService } from '@otiuming/domain-shopping-cart';

// Save cart changes
await CartPersistenceService.saveCart(cart);

// Merge carts (e.g., when user logs in)
const mergedCart = await CartPersistenceService.mergeCarts(guestCart, userCart);
```

### Cart Expiration and Cleanup

```typescript
import { CartExpirationService } from '@otiuming/domain-shopping-cart';

// Check if cart is expired
const isExpired = CartExpirationService.isCartExpired(cart);

// Extend cart expiration
const extendedCart = await CartExpirationService.extendExpiration(cart.id, 24); // hours

// Clean up expired carts (typically run as a scheduled task)
await CartExpirationService.cleanupExpiredCarts();
```

## Integration with BizBuilder

The shopping cart domain model integrates well with the BizBuilder pattern:

```typescript
import { using } from '@otiuming/biz-builder';
import { CartValidator, CartPersistenceService } from '@otiuming/domain-shopping-cart';

// Add item to cart operation
const addToCart = (deps, request) => using(deps)
  .buildLoadContextVariablesWith((req) => ({
    cartId: req.cartId,
    productId: req.productId
  }))
  .loadContextWith(async (deps, vars) => {
    const [cart, product] = await Promise.all([
      deps.cartRepository.findById(vars.cartId),
      deps.productService.getProduct(vars.productId)
    ]);
    
    if (!cart) throw new NotFoundError('Cart not found');
    if (!product) throw new NotFoundError('Product not found');
    
    return { cart, product };
  })
  .validateWith(
    (deps, req, ctx) => CartValidator.validateProductAvailability(ctx.product),
    (deps, req, ctx) => CartValidator.validateQuantity(req.quantity),
    (deps, req, ctx) => CartValidator.validateCompatibility(ctx.cart, ctx.product)
  )
  .buildPersistVariablesWith((req, ctx) => ({
    updatedCart: {
      ...ctx.cart,
      items: [
        ...ctx.cart.items,
        {
          id: generateId(),
          productId: ctx.product.id,
          quantity: req.quantity,
          unitPrice: ctx.product.price,
          customizations: req.customizations
        }
      ],
      updatedAt: new Date()
    }
  }))
  .persistWith(async (deps, vars) => {
    await CartPersistenceService.saveCart(vars.updatedCart);
    return vars.updatedCart;
  })
  .execute(request);
```

## Testing

```bash
# Run unit tests
nx test domain-shopping-cart
```

## Dependencies

This domain module depends on:

- `@otiuming/domain-data-types` - For shared data types
- `@otiuming/utils-common` - For utility functions
