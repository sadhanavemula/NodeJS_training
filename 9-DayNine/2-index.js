const express = require('express');
const app = express();

const message = (req,res,next) =>{
    console.log('Something here...');
    next();
}

app.use(message);

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/courses',(req,res)=>{
    res.send('List of Customers Here');
})

app.listen(3000,()=>{
    console.log('The server is running at 3000');
})