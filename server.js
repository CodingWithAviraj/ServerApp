// server.js
const express = require('express');
const App = require('./app');
const cors = require('cors');
const connectDB = require('./Database/db');

const server = express();
const PORT = process.env.PORT || 3000;

console.log("in server.js file");

server.use((req, res, next) => {
  try {
    server.use(cors({
      origin: 'https://codingwithaviraj.github.io'
    }));  
      next();
  } catch (err) {
      console.error('CORS setup error:', err);
      next(err);
  }
 });


  try{
    server.use(App);
  }
  catch(err){
    console.log("app issue : " + err);
  }
  console.log("before db connected");
connectDB().then(() =>{
    console.log("db connected");
    server.listen(PORT, () => {
        console.log(`Server is running on http://127.0.0.1:${PORT}`);
    });
}).catch(err = ()=>{
    console.log(" mongo not working");
    console.error(err);
})

