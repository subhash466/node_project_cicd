// index.js

// Express module ko import karo
const express = require('express');

// Express app create karo
const app = express();
const port = 4000;  // Server kis port pe chalega

// Simple GET route create karo
app.get('/', (req, res) => {
  res.send('Hello, Node.js! This is your first Node.js app.');
});

// Server ko start karo
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
