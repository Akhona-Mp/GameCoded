const express = require('express');
const authRouter = require('./auth'); // Import the auth.js router

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the auth router for authentication-related routes
app.use('/auth', authRouter);

// Start the server
const PORT = 5000; // You can change the port if needed
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
