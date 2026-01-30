## Bug Tracker – MERN Stack

A full-stack Bug Tracking / Issue Management System built using the MERN stack (MongoDB, Express, React, Node.js).

This application allows teams to manage projects, create tickets, assign users, and track progress using a Kanban-style board.

## Features
Core

User Authentication (Register/Login with JWT)

Project Management

Create & Manage Tickets

Kanban Board (TODO → IN_PROGRESS → DONE)

Assign tickets to users

Comments on tickets

Filter & search tickets

Edit / Delete tickets

Role-based users (admin, developer, viewer)

Upload screenshot / attachments

## Tech Stack
Frontend

React

React Router

Axios

Plain CSS (no UI library)

Backend

Node.js

Express

MongoDB (Mongoose)

JWT Authentication

Multer (file uploads)

bcrypt (password hashing)
## Project Structure
bug-tracker/
│
├── client/        # React frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── api.js
│   │   └── styles.css
│
├── server/        # Express backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   └── index.js
│
└── README.md

## Setup Instructions
1. Clone Repo
git clone <repo-url>
cd bug-tracker

2. Backend Setup
cd server
npm install


Create .env inside server/

MONGO_URI=mongodb://127.0.0.1:27017/bug-tracker
JWT_SECRET=supersecretkey


Run server:

node index.js


Server runs at:

http://localhost:5000

3. Frontend Setup
cd client
npm install
npm start


Frontend runs at:

http://localhost:3000

## Authentication Flow
Action	API
Register	POST /api/auth/register
Login	POST /api/auth/login

JWT token is stored in localStorage and automatically attached to every request.

##  Main Routes
Feature	Route
Login	/login
Register	/register
Dashboard	/dashboard
Board	/board/:projectId
##  How It Works

User registers & logs in

Creates a project

Clicks project → opens board

Adds tickets

Drags tickets between columns

Assigns users & comments

Tracks progress visually

##  Sample API Endpoints
Tickets
POST   /api/tickets
GET    /api/tickets/:projectId
PATCH  /api/tickets/:id
DELETE /api/tickets/:id

Projects
POST /api/projects
GET  /api/projects

## File Upload

Supports screenshot uploads using Multer.
Files stored in:

server/uploads/


Accessible via:

http://localhost:5000/uploads/<filename>

## Common Issues
Issue	Fix
401 errors	Check token in localStorage
/tickets/undefined	Ensure projectId passed
refresh not a function	Pass function prop correctly
Cannot find module	Run npm install
🏁 Future Improvements

Drag & drop UI (react-beautiful-dnd)

Email notifications

Activity logs

Team invitations

Dark mode

Deployment (Render/Vercel)

## This Project Demonstrates

Real-world MERN architecture

JWT authentication

REST API design

State management in React

Full CRUD operations

Production-level folder structure