
const express = require('express');

// Constants
const PORT = 8079;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world Monday Morning\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);