React + Node.js + Express + MongoDB CRUD App
A full-stack CRUD (Create, Read, Update, Delete) web application built using:

React.js (Frontend)
Node.js + Express.js (Backend)
MongoDB (Database)
✨ Features
Add new users with multiple details (name, email, gender, etc.)
Edit user data inline via form
Delete users
Display users in a styled, responsive table
Modular component structure using GetUser and CreateUser
⚠️ Caution
This project stores real user data into a MongoDB database. Make sure your database is configured properly and not exposed publicly. Do not deploy with production data without securing the backend.

📁 Project Structure
CRUD/ 
├── server/ 
| |-- config
| |  | -- db.js # MongoDB connection setup
| |-- controller
| |  | -- userController.js
| |-- model
| |  | -- user.js
| |-- routes
| |  | -- userRoutes.js
│ ├── server.js # Express server with MongoDB integration 
|
├── client/ 
│ ├── src/ 
| | |-- App.jsx
│ │ ├── main.jsx 
│ │ ├── components/ 
│ │ │ ├── GetUser.jsx 
│ │ │ |── CreateUser.jsx 
| |
| |-- styles/
| | | |__ GetUser.css 
| | |_|__ CreateUser.css
| |
│ └── public/ 
│ └── index.html 
  └── README.md

🚀 Getting Started
Prerequisites
Node.js & npm
MongoDB installed and running
🔧 Backend Setup
Navigate to the backend folder:
cd server
Install dependencies: npm install
Configure database connection in db.js.
Start the backend: node server.js
💻 Frontend Setup

Navigate to the frontend folder: cd client
Install dependencies: npm install
Start the frontend: npm run dev
🌐 App Usage

The app runs on http://localhost:3000
Make sure the backend is also running on the default http://localhost:3000/users
You can: Add a user via the form View all users in a table Edit or delete users from the list
📌 Important Notes

Ensure CORS is properly enabled on the backend.
The frontend makes API requests to /users endpoint.
Form validation and user feedback can be enhanced.
🛡 License This project is open-source and free to use for learning purposes.

🙋‍♂️ Author Built by Sanjay
