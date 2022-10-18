const express = require('express');
const app = express();

const requireJSONContent = () => {
    return (req,res,next) =>{
        if(req.headers['content-type'] !== 'application/json')
        res.status(400).send('server requires application/json')
   else
    next();
}
}
//app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/courses',(req,res)=>{
    res.send('List of Customers Here');
})

app.post('/add-course',requireJSONContent(),(req,res)=>{
    console.log(req.body);
    let cname = req.body.course_name;
    res.send(cname);
    //res.send('Adding new courses');
})

app.listen(3000,()=>{
    console.log('The server is running at 3000');
})