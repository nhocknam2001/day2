const express = require('express')

const app= express()

app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/public/index.html');
})

app.get('/aboutpage',(req,res)=>{
    res.sendFile(__dirname + '/public/aboutpage.html');
})


const PORT =5000;
app.listen(process.env.PORT || PORT);
console.log('Server is running')