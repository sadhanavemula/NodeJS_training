const express = require('express');
const app = express();

app.use((req,res,next) =>{
    console.log('Something here...');
    next();
})

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/courses',(req,res)=>{
    res.send('List of Customers Here');
})

app.listen(3000,()=>{
    console.log('The server is running at 3000');
})