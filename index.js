const express = require('express');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 4000;  // Read from .env if not available then defaults to 4000

app.get('/', (req, res) => {
    res.send('Hello from ' +  process.env.WHAT_ENV)
  })

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
