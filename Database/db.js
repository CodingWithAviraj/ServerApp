const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    console.log("mondo db started");
    try {

        const connectionPromise = mongoose.connect(process.env.MONGODB_URI)
        .catch((err) =>{
            console.log("mongod connection errror:  :" + err)
        });

        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Connection timeout'));
            }, 3000);
        });

        // Wait for either the connection to succeed or the timeout to occur
        await Promise.race([connectionPromise, timeoutPromise]);

        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); // Exit process with failure
    }
};

mongoose.Promise= global.Promise;

module.exports = connectDB;
