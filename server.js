const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./Database/db');
const signupRoute = require('./Router/signup');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Middleware for home page logging
// app.use('/', (req, res, next) => {
//     console.log("Server received a request on the home page");
//     res.status(200).send(" server app is working");
//     next(); // Call next to pass control to the next middleware in the stack
// });

// Routes
app.use('/signup', signupRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
