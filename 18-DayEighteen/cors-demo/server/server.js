const express = require('express');
const app = express();
const cors = require('cors');

//Enable All CORS request
//app.use(cors());

// var corsOptions = {
//     origin:"https://localhost:4200",
//     methods:"GET,POST"
// }

// app.use(cors(corsOptions));

const users = [
    {"id":101,"name":"sadhana"},
    {"id":102,"name":"ramesh"},
    {"id":103,"name":"vedha"},
    {"id":104,"name":"mahesh"},
    {"id":105,"name":"naresh"},
]

//Enable  CORS for single route
app.get('/users',cors(),(req,res)=>{
    res.send(users);
})

app.listen(4000,()=>{
    console.log("server is runningat 4000");
})