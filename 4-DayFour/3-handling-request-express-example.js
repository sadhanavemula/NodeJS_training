const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

// Adding Middleware
// This json() would be required when request body is sent through client extension.
// OR request is sent in json format.
app.use(bodyParser.json());
// This urlencoded method would be required when request body is sent through client application.
// OR request is sent from clients like HTML/Angular/React/Vue/Template Engines.
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!!')
})

app.get('/login', (req, res) => {
    res.sendFile("login.html", { root: path.join(__dirname, 'public') })
})

app.post('/login', (req, res) => {
    var uname = req.body.username;
    var pass = req.body.password;
    res.send(`Hello ${uname}, your password is ${pass}`);
})

app.listen(3000, () => {
    console.log(`The server is running at 3000!!`);
})

/**
 *  npm install body-parser
 * 
 *  A library used to process data sent through request.
 *  Whether this request comes from HTML/Client Application or Client Extension.
 */