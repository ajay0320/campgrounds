# Campgrounds

Campgrounds is a full-stack web application where users can create, view, and review campgrounds. 
This project helped me practice working with RESTful routes, authentication, databases, and full-stack architecture using Node.js, Express, and MongoDB.

## Features

- User authentication (register/login/logout)
- CRUD operations for campgrounds
- Commenting system for campground reviews
- Flash messages and basic error handling
- Responsive front-end using Bootstrap
- Authorization middleware (only creators can edit/delete their campgrounds)

## Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- EJS templating engine
- Passport.js for authentication
- Bootstrap 5 for styling

## Installation

1. Clone the repository:
   ```bash
   https://github.com/ajay0320/campgrounds.git
   cd campgrounds
2. Install all Dependencies:
   ```bash
    npm install
3. Set up your environment variables in a .env file:
   ```bash
   DATABASE_URL=mongodb://localhost:27017/campgrounds
   SECRET=yourSecretKey
4. run :
   ```bash
   npx nodemon app.js
5. Visit the app at http://localhost:3000
