const express = require('express');
const mongoose = require('mongoose');
const app = express()



mongoose.connect('mongodb://localhost:27017/test');
const con = mongoose.connection;
con.once('open',()=>{
  //成功连接
  console.log('连接成功');
})
app.get('/data', function(req, res) {
  res.json({naem: 'imooc', type: 'IT'})
})

app.listen(9093, function() {
  console.log('node app start');
})