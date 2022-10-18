const express = require('express');
const app = express();

// GET Request: http://localhost:3000
app.get('/', (req, res) => {
    res.send("Hello Everyone!! Lets Learn Express");
})

// GET Request: http://localhost:3000/courses
app.get('/courses', (req, res) => {
    res.send("Courses List");
})

// POST Request: http://localhost:3000/courses
app.post('/courses', (req, res) => {
    res.send('Adding New Course');
})

// PUT Request: http://localhost:3000/courses
app.put('/courses', (req, res) => {
    res.send('Update Exisitng Course');
})

// DELETE Request: http://localhost:3000/courses
app.delete('/courses', (req, res) => {
    res.send('Delete Existing Course');
})


app.listen(3000, () => {
    console.log(`The server is running at 3000!!`);
})

