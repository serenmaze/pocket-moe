const express = require('express');
const serverless = require('@netlify/express');
const app = express();
 
// 这里是你的Express应用代码
require('../../index.js');
 
module.exports = serverless(app);