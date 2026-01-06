# SFCW Backend

The backend API for the Simple Functional College Website, built with Node.js, Express, and MongoDB.

## Features

- **RESTful API**: Clean REST endpoints for authentication
- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: bcryptjs for secure password storage
- **Error Handling**: Centralized error handling middleware
- **CORS Support**: Cross-origin resource sharing enabled
- **Environment Configuration**: dotenv for environment variables

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express.js**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **JWT**: JSON Web Tokens for authentication
- **bcryptjs**: Password hashing
- **CORS**: Cross-origin resource sharing

## Project Structure

```
backend/
├── controllers/     # Route controllers (business logic)
├── models/         # MongoDB schemas/models
├── routes/         # API route definitions
├── middleware/     # Custom middleware functions
├── config/         # Database and configuration files
├── utils/          # Utility functions and helpers
├── tests/          # Test files
├── server.js       # Main application entry point
├── package.json    # Dependencies and scripts
└── README.md       # This file
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

### Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your configuration:
   ```env
   PORT=5002
   MONGO_URI=mongodb://localhost:27017/simple-college
   JWT_SECRET=your_super_secret_jwt_key_here
   ```

4. **Start MongoDB**

   Ensure MongoDB is running on your system or update `MONGO_URI` for MongoDB Atlas.

5. **Start the server**

   **Development mode** (with auto-restart):
   ```bash
   npm run dev
   ```

   **Production mode**:
   ```bash
   npm start
   ```

   The server will start on `http://localhost:5002` (or your configured PORT).

## API Endpoints

### Authentication Routes
All routes are prefixed with `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register a new user | No |
| POST | `/login` | Authenticate user and return JWT | No |

### Request/Response Examples

#### User Registration
```http
POST /api/auth/signup
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "message": "User created successfully"
}
```

#### User Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d5ecb74b24c72b8c8b4567",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

## Error Handling

The API uses consistent error response formats:

```json
{
  "message": "Error description"
}
```

Common HTTP status codes:
- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `500` - Internal Server Error

## Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm test` - Run tests (when implemented)

### Adding New Features

1. **Models**: Create new schemas in `models/`
2. **Controllers**: Add business logic in `controllers/`
3. **Routes**: Define endpoints in `routes/`
4. **Middleware**: Add custom middleware in `middleware/`

### Testing

Test files should be placed in the `tests/` directory. Use a testing framework like Jest or Mocha.

## Security Considerations

- Passwords are hashed using bcryptjs
- JWT tokens expire after 1 hour
- Input validation should be added for production use
- Rate limiting should be implemented for API endpoints
- HTTPS should be used in production

## Contributing

1. Follow the existing code structure
2. Add proper error handling
3. Update documentation for new endpoints
4. Test your changes thoroughly

## License

MIT License