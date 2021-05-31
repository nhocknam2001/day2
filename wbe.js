const express = require('express')

const app = express()

app.get('/index',(req,res)=>{
  res.end('Hello world');  
})

app.get('/about',(req,res){
    res.sendFile(__dirname + bbm);
})