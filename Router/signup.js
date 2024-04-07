const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.post('/', (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password } = req.body;
        // Create new user
        const user = new User({ name, email, password });
        //console.log(user.name + " , " + user.email, " , " + user.password);
        user.save();

        res.status(201).json({ message: 'User registered successfully', mess: req.body });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: 'Internal server error' + error.message });
    }
});

module.exports = router;
