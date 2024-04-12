// signup.js

const express = require('express');
const bcrypt = require('bcrypt');
const AWS = require('aws-sdk');
const User = require('../models/User');

const router = express.Router();

// Set up AWS credentials and S3 object
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if any required field is missing
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Name, email, and password are required' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with hashed password
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        // Upload user data to S3
        const params = {
            Bucket: 'cyclic-dull-red-dhole-slip-ap-southeast-1',
            Key: `user_${newUser._id}.json`, // Use unique key for each user
            Body: JSON.stringify(newUser) // Upload user data as JSON
        };
        await s3.upload(params).promise();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
