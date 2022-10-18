const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/message',(req,res,next)=>{
    next(new Error('I am passing you an error'));
})

app.use((err,req,res,next)=>{
    if(!res.headersSent){
        res.status(500).send("error message: " + err.message)
    }
})

app.listen(3000,()=>{
    console.log('The server is running at 3000');
})