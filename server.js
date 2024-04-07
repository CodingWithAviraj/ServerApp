// server.js

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/db');
const signupRoute = require('./Router/signup');
const loginRoute = require('./Router/login');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
