const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    console.log("mondo db started");
    try {
       await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

mongoose.Promise= global.Promise;

module.exports = connectDB;
