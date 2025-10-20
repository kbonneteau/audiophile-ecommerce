# Audiophile E-commerce - Agent Execution Guide

## Project Overview

This is a **full-stack audiophile e-commerce platform** built in 2021/2022 for selling high-end audio equipment (headphones, speakers, earphones). The project is currently in a **migration phase** from MongoDB to PostgreSQL with Prisma ORM.

### Architecture
- **Frontend**: React 17.0.2 with Redux, React Router, SCSS
- **Backend**: Node.js/Express with Prisma ORM
- **Database**: PostgreSQL 15 (migrating from MongoDB)
- **Containerization**: Docker & Docker Compose
- **State Management**: Redux + Context API (mixed approach)

## Current Status & Critical Issues

### 🚨 **CRITICAL - App Currently Non-Functional**
- **Database has NO product data** - returns "No products found"
- **Migration incomplete** - still using MongoDB connection instead of PostgreSQL
- **Missing environment setup** - .env file has placeholder values

### ✅ **Completed**
- Docker setup with 3-service architecture
- PostgreSQL database running on port 5432
- Prisma schema defined
- Hot reload configured for both client and server

## Environment Setup

### Prerequisites
- Docker Desktop running
- Node.js 18+ (for local development)
- Git

### Quick Start
```bash
# 1. Clone and navigate to project
cd /Users/kbonneteau/personal-workspace/audiophile-ecommerce

# 2. Set up environment (creates .env from .env.example)
./setup-env.sh

# 3. Start all services
docker-compose up --build -d

# 4. Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:8080
# Database: localhost:5432
```

### Services & Ports
- **Client (React)**: http://localhost:3000
- **Server (Express)**: http://localhost:8080
- **Database (PostgreSQL)**: localhost:5432
- **Network**: `audiophile_network` (Docker internal)

## Project Structure

```
audiophile-ecommerce/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Route components
│   │   ├── contexts/         # React Context providers
│   │   ├── store/            # Redux store & actions
│   │   ├── utils/            # Utility functions
│   │   └── assets/           # Images, icons, fonts
│   ├── Dockerfile
│   └── package.json
├── server/                    # Node.js backend
│   ├── controllers/          # Route handlers
│   ├── models/               # Data models (MongoDB → Prisma)
│   ├── routes/               # API endpoints
│   ├── db/                   # Database connection & seeding
│   ├── prisma/               # Prisma schema & migrations
│   ├── public/images/        # Product images
│   ├── Dockerfile
│   └── package.json
├── data.json                 # Product data source
├── docker-compose.yml        # Multi-service setup
├── setup-env.sh             # Environment setup script
└── plans/                    # Project documentation
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:productSlug` - Get single product
- `GET /api/category/:categoryName` - Get products by category

### Cart
- `GET /api/cart/:cartId` - Get cart
- `POST /api/cart/:cartId` - Create new cart
- `PUT /api/cart/:cartId` - Update cart items
- `DELETE /api/cart/:cartId` - Delete cart items
- `PUT /api/cart/:cartId/quantity` - Update item quantities

## Database Schema (Prisma)

### Product Model
```prisma
model Product {
  id            Int      @id @default(autoincrement())
  slug          String   @unique
  name          String
  category      String   // "headphones", "speakers", "earphones"
  new           Boolean  @default(false)
  price         Int      // Price in currency units
  description   String
  features      String
  image         Json     // {mobile, tablet, desktop} URLs
  categoryImage Json     // Category page preview
  gallery       Json     // {first, second, third} gallery images
  includes      Json     // Array of {quantity, item} objects
  others        Json     // Related products array
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

### Cart Model
```prisma
model Cart {
  id             Int      @id @default(autoincrement())
  cartId         String   @unique  // UUID from client
  user           String   @default("guest")
  taxRate        Float    @default(0.2)
  shippingMethod String   @default("standard")
  cartItems      Json     @default("[]")  // Array of cart items
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
}
```

## Key Components & Pages

### Frontend Pages
- **HomePage**: Hero, product categories, featured products
- **ProductCategoryPage**: Category-specific product listings
- **ProductDetailsPage**: Individual product details, features, gallery
- **CheckoutPage**: Cart summary, form, payment

### Key Components
- **Header**: Navigation, cart icon, mobile menu
- **ProductCard**: Product display with image, name, price
- **CartModal**: Shopping cart overlay
- **CheckoutForm**: Order form with validation
- **FeaturedProducts**: Homepage featured section

## State Management

### Redux Store
- **Cart**: Cart items, quantities, totals
- **User**: User session, authentication state

### Context API
- **ProductsContext**: Product data and fetching
- **CategoryContext**: Category navigation state

## Current Migration Status

### ✅ Completed
- Docker containerization
- PostgreSQL database setup
- Prisma schema definition
- Basic Prisma client setup

### 🚧 In Progress
- Database migration from MongoDB to PostgreSQL
- Model updates to use Prisma instead of MongoDB
- Product data seeding

### ❌ Not Started
- Environment variable configuration
- End-to-end testing
- Dependency updates

## Common Tasks for Agents

### 1. Database Operations
```bash
# Run Prisma migrations
docker-compose exec server npm run prisma:migrate

# Generate Prisma client
docker-compose exec server npm run prisma:generate

# Seed database
docker-compose exec server npm run seed

# Access database directly
docker-compose exec db psql -U audiophile -d audiophile_db
```

### 2. Development Commands
```bash
# View logs
docker-compose logs -f [service_name]

# Restart specific service
docker-compose restart [service_name]

# Rebuild and restart
docker-compose up --build -d

# Stop all services
docker-compose down

# Access container shell
docker-compose exec [service_name] sh
```

### 3. Code Changes
- **Client changes**: Auto-reload on file save
- **Server changes**: Nodemon auto-restart
- **Database changes**: Requires migration + restart

## Critical Issues to Address

### Priority 1 (App Non-Functional)
1. **Complete database migration** - Replace MongoDB with Prisma
2. **Seed product data** - Add realistic audio equipment products
3. **Fix environment variables** - Update .env with real values
4. **Test API endpoints** - Ensure all routes work

### Priority 2 (User Experience)
1. **Remove console.log statements** - Clean production code
2. **Improve error handling** - Add proper error boundaries
3. **Fix loading states** - Better user feedback
4. **Test cart functionality** - Ensure persistence works

### Priority 3 (Code Quality)
1. **Update dependencies** - Fix security vulnerabilities
2. **Add TypeScript** - Improve type safety
3. **Consolidate state management** - Choose Redux OR Context
4. **Add server-side validation** - Security improvements

## Data Sources

### Product Data
- **Source**: `data.json` (contains 9 audio products)
- **Categories**: headphones, speakers, earphones
- **Images**: Located in `server/public/images/products/`
- **Structure**: Matches Prisma schema design

### Sample Product Structure
```json
{
  "id": 1,
  "slug": "yx1-earphones",
  "name": "YX1 Wireless Earphones",
  "category": "earphones",
  "new": true,
  "price": 599,
  "description": "Tailor your listening experience...",
  "features": "Experience unrivalled stereo sound...",
  "image": {
    "mobile": "./assets/product-yx1-earphones/mobile/image-product.jpg",
    "tablet": "./assets/product-yx1-earphones/tablet/image-product.jpg",
    "desktop": "./assets/product-yx1-earphones/desktop/image-product.jpg"
  },
  "includes": [
    {"quantity": 2, "item": "Earphone unit"},
    {"quantity": 6, "item": "Multi-size earplugs"}
  ]
}
```

## Troubleshooting

### Common Issues
1. **"No products found"** - Database not seeded, migration incomplete
2. **Connection refused** - Docker services not running
3. **Build failures** - Missing dependencies, check package.json
4. **Hot reload not working** - Volume mounts not configured properly

### Debug Commands
```bash
# Check service status
docker-compose ps

# View detailed logs
docker-compose logs --tail=100 [service_name]

# Check database connection
docker-compose exec server npm run prisma:generate

# Test API endpoints
curl http://localhost:8080/api/products
```

## Development Workflow

### Making Changes
1. **Edit code** in your IDE
2. **Changes auto-reload** (client) or restart (server)
3. **Test functionality** in browser
4. **Check logs** if issues arise
5. **Commit changes** when working

### Database Changes
1. **Update Prisma schema** (`server/prisma/schema.prisma`)
2. **Create migration** (`npm run prisma:migrate`)
3. **Update models** (`server/models/*.js`)
4. **Test endpoints** to ensure functionality

## Security Notes

### Current Vulnerabilities
- **177 vulnerabilities** in client dependencies
- **22 vulnerabilities** in server dependencies
- **Outdated packages** (React 17, Express 4.17, etc.)

### Environment Security
- **Never commit** `.env` files
- **Use strong passwords** for PostgreSQL
- **Rotate JWT secrets** regularly
- **Validate all inputs** server-side

## Performance Considerations

### Current Issues
- **No image optimization** - Large product images
- **No code splitting** - Large bundle sizes
- **No caching** - Repeated API calls
- **No lazy loading** - All images load immediately

### Optimization Opportunities
- **Image compression** and lazy loading
- **Code splitting** by route
- **API response caching**
- **Bundle analysis** and optimization

---

## Quick Reference

| Task | Command | Notes |
|------|---------|-------|
| Start all services | `docker-compose up -d` | Background mode |
| View logs | `docker-compose logs -f` | Follow mode |
| Restart service | `docker-compose restart [service]` | |
| Access DB | `docker-compose exec db psql -U audiophile -d audiophile_db` | |
| Run migration | `docker-compose exec server npm run prisma:migrate` | |
| Seed data | `docker-compose exec server npm run seed` | |
| Stop all | `docker-compose down` | |

**Remember**: The app is currently non-functional due to missing product data and incomplete database migration. Focus on completing the MongoDB → PostgreSQL migration first.
