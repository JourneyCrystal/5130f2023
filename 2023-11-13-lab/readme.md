
---

## Overview
This project is a Node.js web application utilizing NeDB as a lightweight database. It includes a simple authentication system with sign-up and login functionalities, along with a dashboard that displays the user's IP address and additional information based on their location.

## Installation

To run this project, you'll need Node.js installed on your system.

1. Clone or download the repository.
2. Navigate to the project directory and run `npm install` to install dependencies.
3. Start the server with `node server.js`.
4. The application will be running on `http://localhost:3000`.

## Routes

### `GET /`
The root route serves the signup page (`index.html`). Users can sign up by providing their email and password. The details are validated and then stored in the NeDB database.

### `POST /signup`
This route handles the user registration process. It accepts `email` and `password` from the request body, performs validation, and stores the credentials in the database.

### `GET /login`
Serves the login page (`login.html`). Users can log in using their email and password.

### `POST /login`
Handles the login process. It checks the provided email and password against the database. If the credentials are valid, the user is redirected to the dashboard.

### `GET /dashboard`
Displays the dashboard page (`dashboard.html`). It shows the user's current IP address and fetches additional information like local weather and language based on the IP.


## Dependencies
- `express`: Web framework for Node.js.
- `nedb`: Lightweight JavaScript database.
- `body-parser`: Middleware for parsing incoming request bodies.


