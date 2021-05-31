const express = require('express')

const app = express()

app.get('/index',(req,res)=>{
  res.end('Hello world');  
})

app.get('/aboutpage',(req,res)=>{
    res.sendFile(__dirname + '/public/about.html');
})

const PORT = 5000;
app.listen(process.env.PORT || PORT);
console.log('Server is running')