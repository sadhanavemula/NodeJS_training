// const express = require('express');
// const app = express.Router();

// app.get('/message',(req,res)=>{
//     res.send("hello from Auth Route!1")
// })

// module.exports = app;

module.exports = function (app) {
    app.get('/auth/message', (req, res) => {
        res.send("hello from auth Route!1")
    })
}