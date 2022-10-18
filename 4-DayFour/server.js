const express = require('express');
const app = express();
const fs = require('fs');


// GET Request: http://localhost:3000
app.get('/', (req, res) => {
    res.send("Basic CRUD operations on user entity");
})

// GET Request: http://localhost:3000/users
app.get('/users', (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, users) => {
        if (err) throw err;
        res.end(users);
    })
})

// GET Request: http://localhost:3000/users/101
app.get('/users/:userid', (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, users) => {
        var userList = JSON.parse(users);
        var user = userList["user_" + req.params.userid];
        if (user) { res.end(JSON.stringify(user)); }
        else { res.end("There is no user with this id."); }
    })
})

// POST Request: 
app.post('/users', (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, users) => {
        var userList = JSON.parse(users);
        var userObj = {
            "user4": { "id": 4, "name": "Sarah", "age": 20, "salary": 23000 }
        }
        userList["user_4"] = userObj["user4"];
        res.end(JSON.stringify(userList));
    })
})

// DELETE Request:
app.delete('/users/:userid', (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, users) => {
        var userList = JSON.parse(users);
        delete userList["user_" + req.params.userid]
        res.end(JSON.stringify(userList));
    })
})

// PUT Request:
app.put('/users', (req, res) => {
    fs.readFile(__dirname + "/data.json", (err, users) => {
        let userList = JSON.parse(users);
        let newUser = { "user_2": { "name": "Hrishit1", "salary": 5000 } }
        userList["user_2"] = newUser["user_2"];
        res.end(JSON.stringify(userList))
    });
})


app.listen(3000, () => {
    console.log(`The server is running at 3000!!`);
})

