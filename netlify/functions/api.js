const serverless = require('serverless-http');
const express = require('express');
 
const app = express();
 
app.get('/', (req, res) => {
  res.send('Hello World');
});
 
app.get('/@:name', (req, res) => {
  const { name } = req.params;
  res.send(`Counter: ${name}`);
});
 
module.exports = serverless(app);
