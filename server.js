// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');

// Create an instance of Express application
const app = express();

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello, this is your Node.js server!');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
