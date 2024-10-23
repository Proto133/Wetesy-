# Google+ Clone Backend

A Node.js backend implementation of a Google+ clone with features like user authentication, circles, communities, posts, and notifications.

## Features

- User Authentication (JWT-based)
- Circles (private groups)
- Communities
- Posts and Feeds
- Comments and Likes
- Notifications
- RESTful API

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Project Structure

```
src/
├── controllers/    # Request handlers
├── models/        # Database schemas
├── routes/        # API routes
├── middleware/    # Custom middleware
├── utils/         # Utility functions
└── server.js      # Application entry point
```

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a .env file with:
   ```
   JWT_SECRET=your_jwt_secret_key_here
   MONGODB_URI=mongodb://localhost:27017/googleplus
   PORT=3000
   ```

3. Start the server:
   ```bash
   npm run dev     # Development
   npm start       # Production
   ```

## API Endpoints

### Authentication
- POST /api/auth/register
- POST /api/auth/login

### Users
- GET /api/users
- GET /api/users/:id
- PUT /api/users/:id

### Posts
- GET /api/posts
- POST /api/posts
- GET /api/posts/:id
- PUT /api/posts/:id
- DELETE /api/posts/:id

### Circles
- GET /api/circles
- POST /api/circles
- GET /api/circles/:id
- PUT /api/circles/:id
- DELETE /api/circles/:id

### Communities
- GET /api/communities
- POST /api/communities
- GET /api/communities/:id
- PUT /api/communities/:id
- DELETE /api/communities/:id

### Notifications
- GET /api/notifications
- PUT /api/notifications/:id/read