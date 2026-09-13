# Medicine Ordering App

A polished medicine-ordering mobile application built with **React Native, Expo, TypeScript, and Zustand** as an internship MVP.

The application simulates a modern online pharmacy experience where users can browse healthcare products, search for products, add items to a cart, complete a mock checkout, place an order, and view previous orders.

> **Note:** This is a frontend/MVP project using mock product data. It does not process real payments, prescriptions, pharmacy orders, or medical data.

## Features

- 🏠 Home screen with search, categories, banner, and popular products
- 🔎 Product search
- 🗂️ Category-based product browsing
- 💊 Product listing with pricing and discounts
- 📦 Product details screen
- 🛒 Add products to cart
- ➕ Increase/decrease product quantity
- 🗑️ Remove products from cart
- 💰 Cart price, MRP, discount, and total calculation
- 🏠 Mock delivery address
- 💳 Mock payment method selection
- ✅ Mock order placement
- 🎉 Order confirmation screen
- 📋 Previous orders screen
- 📱 Empty and error states
- 🔄 Loading/basic UI states
- 🧪 Manual testing across the complete application flow

## Main User Flow

```text
Home
  ↓
Search / Browse Products
  ↓
Product Details
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Place Order
  ↓
Order Confirmation
  ↓
Orders
```

## Tech Stack

- **React Native**
- **Expo**
- **Expo Router**
- **TypeScript**
- **Zustand**
- **React Native StyleSheet**
- **@expo/vector-icons**

## Project Structure

```text
src/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── products.tsx
│   ├── cart.tsx
│   ├── checkout.tsx
│   ├── order-confirmation.tsx
│   ├── orders.tsx
│   └── product/
│       └── [id].tsx
│
├── components/
│   ├── ProductCard.tsx
│   ├── SearchBar.tsx
│   ├── CategoryCard.tsx
│   ├── PrimaryButton.tsx
│   ├── EmptyState.tsx
│   └── ...
│
├── data/
│   ├── products.ts
│   └── categories.ts
│
├── store/
│   ├── cartStore.ts
│   └── orderStore.ts
│
├── types/
│   └── product.ts
│
├── theme/
│   ├── colors.ts
│   ├── dimensions.ts
│   ├── spacing.ts
│   └── typography.ts
│
└── utils/
```

Each reusable component follows a separated structure where the `.tsx` file contains the component logic/UI and the corresponding `.styles.ts` file contains its styles.

## State Management

The application uses **Zustand** for local state management.

### Cart Store

The cart store handles:

- Adding products
- Removing products
- Increasing quantity
- Decreasing quantity
- Clearing the cart
- Calculating subtotal
- Calculating MRP
- Calculating discount
- Calculating total
- Calculating item count

### Order Store

The order store handles:

- Creating orders
- Storing order items
- Order status
- Payment method
- Delivery address
- Order creation time

## Product Data

The MVP uses mock/local product data containing healthcare and personal-care products such as:

- Pain relief products
- Vitamins
- Cold and cough products
- Digestive care
- Personal care
- Healthcare devices
- Skin care
- Baby care
- Nutrition
- Wellness products

No external pharmacy or medical-data API is required.

## Testing

The application was manually tested across the major user flows.

### Testing Coverage

- Application launch
- Navigation
- Home screen
- Search
- Product listing
- Product details
- Add to cart
- Cart quantity management
- Cart removal
- Checkout
- Payment method selection
- Order placement
- Order confirmation
- Orders history
- Empty states
- Invalid product state
- Android back navigation
- UI/usability checks
- Complete end-to-end flow

**Final end-to-end test: PASS ✅**

## Running the Project

### Prerequisites

Make sure you have:

- Node.js
- npm
- Expo
- Android Studio with an Android emulator, or a compatible mobile device

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

Start the Expo development server:

```bash
npx expo start
```

For Android:

```bash
npx expo start --android
```

## TypeScript Check

Run:

```bash
npx tsc --noEmit
```

The project should complete the TypeScript check without errors.

## Limitations

This project is intentionally an internship MVP.

It does **not** include:

- Real payment processing
- Real pharmacy integration
- Prescription upload/verification
- Real user authentication
- Real backend/database
- Real delivery tracking
- Real medical records
- Real healthcare provider integration

All products, addresses, payments, and orders are mock/local data.

## AI Assistance

AI tools were used during development for guidance, debugging, code suggestions, architecture discussions, and documentation assistance.

The implementation was reviewed and tested manually, and the developer understands the application structure and functionality.

## Future Improvements

Possible future improvements include:

- Backend/API integration
- User authentication
- Persistent database storage
- Real product images
- Prescription upload
- Real payment gateway integration
- Address management
- Order tracking
- Push notifications
- Product reviews
- Wishlist functionality
- Advanced filtering and sorting
- Automated unit and integration tests

## Project Status

**Status: Completed Internship MVP ✅**

The complete core shopping flow has been implemented and manually tested:

```text
Browse → Search → Product → Cart → Checkout
→ Place Order → Confirmation → Orders
```
