# Goal #2: PostgreSQL Migration with Prisma ORM

## Overview
Replace MongoDB database with PostgreSQL using Prisma ORM. The schema will be designed based on the existing data.json structure and current MongoDB models. All server models and database connection logic will be updated to use Prisma Client.

---

## Phase 1: Prisma Setup and Schema Design

### 1.1 Install Prisma Dependencies
Update `server/package.json` to add:
- `@prisma/client` - Prisma Client for database queries
- `prisma` (devDependency) - Prisma CLI for migrations and schema management

### 1.2 Initialize Prisma
Create `server/prisma/schema.prisma` with PostgreSQL datasource configuration pointing to `DATABASE_URL` environment variable.

### 1.3 Design Database Schema
Based on `data.json` structure, create two main models:

**Product Model** (maps to products collection):
- `id` (Int, auto-increment primary key)
- `slug` (String, unique identifier)
- `name` (String)
- `category` (String - "headphones", "speakers", "earphones")
- `new` (Boolean - new product flag)
- `price` (Int - price in currency units)
- `description` (String - product description)
- `features` (String - detailed features text)
- `image` (Json - mobile/tablet/desktop URLs)
- `categoryImage` (Json - category page preview URLs)
- `gallery` (Json - first/second/third gallery images)
- `includes` (Json - array of {quantity, item} objects)
- `others` (Json - related products array)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

**Cart Model** (maps to carts collection):
- `id` (Int, auto-increment primary key)
- `cartId` (String, unique - UUID from client)
- `user` (String - "guest" or user identifier)
- `taxRate` (Float - default 0.2)
- `shippingMethod` (String - "standard")
- `cartItems` (Json - array of cart item objects)
- `createdAt` (DateTime)
- `updatedAt` (DateTime)

**Note:** Using Json type for nested objects (image, gallery, includes, etc.) to maintain compatibility with existing frontend expectations.

### ✅ Phase 1 Results Summary

**Completed Successfully:**
- ✅ **Prisma Dependencies Installed**: Added `@prisma/client` (v5.7.1) and `prisma` CLI to `server/package.json`
- ✅ **Testing Dependencies Added**: Included `jest` (v29.7.0) and `supertest` (v6.3.3) for comprehensive testing
- ✅ **Package Scripts Updated**: Added Prisma migration, generation, and testing scripts
- ✅ **MongoDB Dependency Removed**: Cleaned up `mongodb` package from dependencies
- ✅ **Prisma Schema Created**: Built `server/prisma/schema.prisma` with:
  - **Product Model**: 15 fields including id, slug, name, category, price, description, features, image, gallery, includes, others, timestamps
  - **Cart Model**: 7 fields including id, cartId, user, taxRate, shippingMethod, cartItems, timestamps
  - **PostgreSQL Datasource**: Configured to use `DATABASE_URL` environment variable
  - **Json Fields**: Used for complex nested objects to maintain frontend compatibility
- ✅ **Environment Configuration**: User has added `.env` file to server directory

**Architecture Decision Made:**
- Decided to use separate `.env` files per service for better security and service isolation
- Root `.env` for Docker Compose variables only
- Server `.env` for server-specific variables (DATABASE_URL, NODE_ENV, PORT)
- Client `.env` for client-specific variables (REACT_APP_API_URL)

**Ready for Phase 2:** Database Migration with Prisma CLI commands.

---

## Phase 2: Database Migration

### 2.1 Create Environment Configuration
Create `.env` file in project root with:
```
POSTGRES_USER=audiophile_user
POSTGRES_PASSWORD=<secure-password>
POSTGRES_DB=audiophile_db
DATABASE_URL=postgresql://audiophile_user:<password>@db:5432/audiophile_db
REACT_APP_API_URL=http://localhost:8080
```

### 2.2 Run Prisma Migration
Generate and apply initial migration:
- `npx prisma migrate dev --name init`
- This creates migration files and applies them to PostgreSQL

### 2.3 Generate Prisma Client
Run `npx prisma generate` to create type-safe Prisma Client based on schema.

---

## Phase 3: Code Migration

### 3.1 Create Prisma Client Singleton
Create `server/db/prisma-client.js` with singleton pattern for Prisma Client instance (replaces `connect-to-database.js`).

### 3.2 Update Product Model
Rewrite `server/models/productModel.js`:
- Replace MongoDB queries with Prisma Client queries
- `readAllProducts()` → `prisma.product.findMany()`
- `readProductsByCategory(category)` → `prisma.product.findMany({ where: { category } })`

### 3.3 Update Cart Model
Rewrite `server/models/cartModel.js`:
- Replace MongoDB queries with Prisma Client queries
- `readAllCarts()` → `prisma.cart.findMany()`
- `readCart(cartId)` → `prisma.cart.findUnique({ where: { cartId } })`
- `addCart(cartId)` → `prisma.cart.create({ data: {...} })`
- `updateCart(cartId, items)` → `prisma.cart.update({ where: { cartId }, data: { cartItems: items } })`

### 3.4 Update Controllers
Minor adjustments to `server/controllers/cartController.js`:
- `readCart()` now returns single object instead of array
- Remove array indexing `[0]` when accessing cart properties

### 3.5 Remove MongoDB Dependencies
- Remove `mongodb` package from `server/package.json`
- Remove old MongoDB-specific environment variables from documentation

---

## Phase 4: Database Seeding

### 4.1 Create Seed Script
Rewrite `server/db/seed.js`:
- Import data from `../../data.json` (6 products)
- Use Prisma Client to seed products table
- Create initial test cart with empty items array
- Use `prisma.product.createMany()` for bulk product insert
- Use `prisma.cart.create()` for cart creation

### 4.2 Add Seed Command to package.json
Update `server/package.json` scripts:
```json
"prisma:migrate": "prisma migrate dev",
"prisma:generate": "prisma generate",
"seed": "node db/seed.js"
```

### 4.3 Run Seed Script
Execute `npm run seed` to populate database with 6 products from data.json and create test cart.

---

## Phase 5: Testing and Verification

### 5.1 Install Testing Dependencies
Add testing packages to `server/package.json`:
- `jest` - Testing framework
- `supertest` - HTTP assertion library for API testing
- `@types/jest` - TypeScript definitions for better IDE support

### 5.2 Configure Jest
Create `server/jest.config.js`:
- Configure test environment as `node`
- Set test match patterns for `*.test.js` files
- Add test coverage settings

### 5.3 Create Test Database Setup
Create `server/tests/setup.js`:
- Helper functions to reset database between tests
- Seed test data from data.json
- Clean up database after tests complete

### 5.4 Write Product API Tests
Create `server/tests/products.test.js`:
- **GET /products** - Test returns all 6 products with correct structure
- **GET /products/:productSlug** - Test returns single product by slug (test with "yx1-earphones")
- **GET /products/:productSlug** - Test returns 404 for non-existent product
- **GET /category/:categoryName** - Test returns only headphones (3 products)
- **GET /category/:categoryName** - Test returns only speakers (2 products)
- **GET /category/:categoryName** - Test returns only earphones (1 product)
- **GET /category/:categoryName** - Test returns 404 for invalid category
- Verify JSON structure matches expected format (image, gallery, includes, etc.)

### 5.5 Write Cart API Tests
Create `server/tests/cart.test.js`:
- **POST /cart/:cartId** - Test creates new cart with UUID
- **POST /cart/:cartId** - Test returns 403 when cart already exists
- **GET /cart/:cartId** - Test retrieves existing cart
- **GET /cart/:cartId** - Test returns 404 for non-existent cart
- **PUT /cart/:cartId/items** - Test adds new item to cart
- **PUT /cart/:cartId/items** - Test updates quantity when item already exists
- **PUT /cart/:cartId/quantities** - Test updates multiple item quantities
- **PUT /cart/:cartId/quantities** - Test removes items with quantity 0
- **DELETE /cart/:cartId/items** - Test clears all cart items
- Verify cart structure (cartId, user, taxRate, shippingMethod, cartItems)

### 5.6 Add Test Scripts to package.json
Update `server/package.json` scripts:
```json
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage"
```

### 5.7 Run Test Suite
Execute `npm test` to verify all tests pass before deployment.

### 5.8 Manual Docker Integration Test
Confirm server connects to PostgreSQL container:
- Start Docker containers with `docker-compose up`
- Verify `DATABASE_URL=postgresql://...@db:5432/...` (hostname is `db`, not `localhost`)
- Test endpoints via browser/Postman at http://localhost:8080

---

## Key Files Modified

1. `server/package.json` - Add Prisma dependencies
2. `server/prisma/schema.prisma` - New Prisma schema
3. `server/db/prisma-client.js` - New Prisma Client singleton
4. `server/models/productModel.js` - Rewrite with Prisma
5. `server/models/cartModel.js` - Rewrite with Prisma
6. `server/controllers/cartController.js` - Adjust for single object return
7. `server/db/seed.js` - Rewrite to use Prisma and data.json
8. `server/db/connect-to-database.js` - Can be removed
9. `.env` - New environment configuration file
10. `server/jest.config.js` - New test configuration
11. `server/tests/setup.js` - New test setup helpers
12. `server/tests/products.test.js` - New product API tests
13. `server/tests/cart.test.js` - New cart API tests

---

## Success Criteria

- ✅ Prisma schema matches data.json structure
- ✅ All API endpoints return correct data
- ✅ Database contains 6 products from data.json
- ✅ Cart functionality works with PostgreSQL
- ✅ No MongoDB dependencies remain
- ✅ Server starts without errors in Docker environment
- ✅ All automated tests pass
- ✅ Test coverage for all API endpoints

---

## Implementation Checklist

- [x] Install Prisma dependencies (@prisma/client and prisma CLI)
- [x] Create Prisma schema with Product and Cart models
- [x] Create .env file with PostgreSQL connection configuration
- [ ] Run Prisma migration and generate client
- [ ] Create Prisma Client singleton
- [ ] Update Product model to use Prisma
- [ ] Update Cart model to use Prisma
- [ ] Update controllers for Prisma compatibility
- [ ] Create seed script with data.json
- [ ] Run seed to populate database
- [x] Install testing dependencies (Jest, Supertest)
- [ ] Configure Jest
- [ ] Create test setup helpers
- [ ] Write Product API tests
- [ ] Write Cart API tests
- [ ] Run test suite and verify all pass
- [x] Clean up MongoDB dependencies
- [ ] Test in Docker environment

---

**Created:** October 17, 2025  
**Status:** Planning Complete - Ready for Implementation

