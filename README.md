# Furniro Backend API

RESTful API backend for the Furniro furniture e-commerce platform, built with Node.js, Express, and PostgreSQL.

## Overview

This is the backend service for Furniro, providing authentication, product management, cart operations, and order processing. The API follows REST principles and includes JWT-based authentication for secure user operations.

## Features

- **User Authentication** - Registration, login, and JWT token management
- **Product Management** - CRUD operations for furniture products
- **Shopping Cart** - Cart management with user-specific data
- **Order Processing** - Complete order workflow
- **Database Management** - PostgreSQL with structured schemas
- **Security** - Password hashing with bcrypt, JWT authentication
- **CORS Support** - Configured for frontend integration

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL
- **Authentication**: JSON Web Tokens (JWT)
- **Password Security**: bcrypt
- **Environment Management**: dotenv
- **CORS**: cors middleware

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin)
- `PUT /api/products/:id` - Update product (admin)
- `DELETE /api/products/:id` - Delete product (admin)

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:id` - Update cart item
- `DELETE /api/cart/:id` - Remove cart item

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders` - Get user orders
- `GET /api/orders/:id` - Get single order

## Database Schema

The application uses PostgreSQL with the following main tables:
- **users** - User accounts and credentials
- **products** - Furniture product catalog
- **cart** - Shopping cart items
- **orders** - Order records
- **order_items** - Individual items in orders

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Steps

1. Clone the repository
```bash
git clone https://github.com/Manny1294/furniro-backend.git
cd furniro-backend
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
PORT=5000
DATABASE_URL=postgresql://username:password@localhost:5432/furniro
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
```

4. Set up the database
```bash
# Create database
createdb furniro

# Run migrations (if using migration files)
npm run migrate

# Or manually create tables using schema.sql
psql furniro < schema.sql
```

5. Start the development server
```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## Project Structure

```
├── controllers/     # Route controllers
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware (auth, validation)
├── config/          # Configuration files
├── utils/           # Utility functions
└── server.js        # Entry point
```

## Security Features

- Password hashing with bcrypt (10 salt rounds)
- JWT token-based authentication
- Protected routes with authentication middleware
- Input validation and sanitization
- CORS configuration for trusted origins

## Environment Variables

Required environment variables:
- `PORT` - Server port (default: 5000)
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_SECRET` - Secret key for JWT signing
- `NODE_ENV` - Environment (development/production)

## Frontend Repository

The frontend for this API is built with Vue 3 and available here: https://github.com/Manny1294/furniro-frontend

## Development Notes

This API was initially deployed on Render with a PostgreSQL database. The frontend currently uses a fake API for demonstration purposes but is built to seamlessly integrate with this backend.

## Future Improvements

- Add API documentation with Swagger/OpenAPI
- Implement rate limiting
- Add comprehensive error logging
- Create database seeders for test data
- Add unit and integration tests
- Implement admin dashboard endpoints
- Add product image upload functionality

## License

MIT
