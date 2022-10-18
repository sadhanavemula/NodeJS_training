var express = require('express');
var app = express();
var index = require('../controllers/index.controller');

app.get('/', index.homePage);

app.get('/message', index.getMessage);

app.get('/projects', index.getProjects);

module.exports = app;