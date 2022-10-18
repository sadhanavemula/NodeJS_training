const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
    res.send('Hi');
})

app.get('/abc', (req, res, next) => {
    let err = new Error(`I couldn't find it.`);
    err.httpStatusCode = 404;
    next(err);
})

app.get('/xyz', (req, res, next) => {
    let err = new Error(`I am sorry, you can't do this.`);
    err.httpStatusCode = 401;
    next(err);
})

// Catch Not Found Errors
app.use((err, req, res, next) => {
    if (err.httpStatusCode == 404) {
        res.status(404).send(`Error Message: ${err.message}`);
    }
    next(err);
})

// Catch Unauthorized Errors
app.use((err, req, res, next) => {
    if (err.httpStatusCode == 401) {
        res.status(401).send(`Error Message: ${err.message}`);
    }
    next(err);
})

// Catch All Errors
app.use((err, req, res, next) => {
    if (!res.headersSent) {
        console.log('Catching All Errors');
        res.status(500).send(`Error Message: ${err.message}`);
    }
    next(err);
})



app.listen(3000, () => {
    console.log('The server is running at 3000!!');
})