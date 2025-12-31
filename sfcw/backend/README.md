# SFCW Backend

This is the backend for the Simple Functional College Website, using Node.js, Express, and MongoDB.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Set up MongoDB:
   - Install MongoDB locally or use MongoDB Atlas.
   - Update the `MONGO_URI` in `.env` file.

3. Set a JWT secret in `.env`.

4. Run the server:
   ```
   npm start
   ```
   or for development:
   ```
   npm run dev
   ```

The server will run on http://localhost:5000.

## API Endpoints

- POST /api/auth/signup - Register a new user
- POST /api/auth/login - Login user