const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const indexRoutes = require('./routes/index.routes');
const authenticateRoutes = require('./routes/authenticate.routes');

// Adding Middlewares to access the Request Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting Up View Engine i.e. EJS
app.set("view engine", "ejs");

// Adding Middleware to Access the Routes
app.use('/', indexRoutes);
app.use('/authenticate', authenticateRoutes);

app.listen(3000, () => {
    console.log(`The server is running at 3000!!`);
})