# Simple Functional College Website (SFCW)

A modern, responsive college website built with React and Vite for the frontend, and Node.js/Express with MongoDB for the backend.

## Features

- **Responsive Design**: Mobile-first approach with modern CSS
- **User Authentication**: Sign up and login functionality
- **Dynamic Routing**: Client-side routing with React Router
- **State Management**: Context API for authentication state
- **RESTful API**: Backend API with JWT authentication
- **Database Integration**: MongoDB with Mongoose ODM

## Tech Stack

### Frontend
- React 19
- Vite
- React Router DOM
- Context API
- Custom Hooks
- Modern CSS

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

## Project Structure

```
sfcw/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── context/       # React Context for state management
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API service functions
│   └── assets/        # Static assets
├── backend/
│   ├── controllers/   # Route controllers
│   ├── models/        # MongoDB models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   ├── config/        # Configuration files
│   └── utils/         # Utility functions
└── public/            # Public assets
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sfcw
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Setup**

   Copy the example environment files:
   ```bash
   cp .env.example .env
   cp backend/.env.example backend/.env
   ```

   Update the environment variables in both `.env` files with your configuration.

5. **Start MongoDB**

   Make sure MongoDB is running on your system.

6. **Start the development servers**

   **Terminal 1: Backend**
   ```bash
   cd backend
   npm run dev
   ```

   **Terminal 2: Frontend**
   ```bash
   npm run dev
   ```

7. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in terminal)

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon

## API Endpoints

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/login` - User login

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
