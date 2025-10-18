const express = require('express');
const serverless = require('@netlify/express');
 
const app = express();
 
// 静态文件
app。use(express.static('assets'));
 
// 主页路由
app.get('/', (req, res) => {
  res.send('Moe Counter is running!');
});
 
// 计数器路由（简化版）
app.get('/@:name', (req, res) => {
  const { name } = req.params;
  res.send(`Counter for ${name}: ${Math.floor(Math.random() * 1000)}`);
});
 
module.exports = serverless(app);
