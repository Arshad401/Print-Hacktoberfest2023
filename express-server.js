const express = require('express');
const app = express();
const port = 3000; // You can change this to your desired port number

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express.js!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
