// server.js
const express = require('express');
const App = require('./app');
const cors = require('cors');
const connectDB = require('./Database/db');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(cors({
    origin: process.env.Origin
  }));
server.use(App);

connectDB().then(() =>{
    server.listen(PORT, () => {
        console.log(`Server is running on http://127.0.0.1:5000`);
    });
}).catch(err = ()=>{
    console.log(" mongo not working");
    console.error(err);
})

