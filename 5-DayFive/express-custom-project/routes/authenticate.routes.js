var express = require('express');
var app = express();
const auth = require('../controllers/authenticate.controller')

app.get('/login', auth.getLogin);

app.post('/login', auth.postLogin);

module.exports = app;