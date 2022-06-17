// Require Libraries
const express = require('express');

// App Setup
const app = express();

// Middleware

// Routes
app.get("/", (res, req) => {
    req.send("Hello Moto!");
})

// Start Server
const PORT = 3000;
app.listen(3000, () => {
  console.log(`Giffy App listening on port localhost: ${3000}!`);
});