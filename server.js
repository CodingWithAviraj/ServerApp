// server.js
const express = require('express');
const App = require('./app');
const cors = require('cors');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(cors({
    origin: 'http://localhost:3000'
  }));
server.use(App);

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
    