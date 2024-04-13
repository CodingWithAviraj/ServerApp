// server.js

const express = require('express');
const bodyParser = require('body-parser');
// const connectDB = require('./Database/db');
const signupRoute = require('./Router/signup');
const loginRoute = require('./Router/login');

const app = express();

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
// connectDB();

// Routes
app.get('/', (req, res)=>{
    console.log("Welcome to home Page!!");
    res.status(200).json("Welcome to home Page!!");
})
app.use('/signup', signupRoute);
app.use('/login', loginRoute);

module.exports = app;
