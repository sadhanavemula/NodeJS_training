const express = require('express');
const app = express();

//Database Connectivity
const db = require('./models/index');
const Role = db.role;

db.sequelize.sync({ force: true })
    .then(() => { console.log('connected..!!'); })
    .catch((error) => { console.log(`There is some error${error}`) });

app.get('/', (req, res) => {
    res.send("Project started...");
})

app.listen(3000, () => {
    console.log("Application running at port 3000!!");
})