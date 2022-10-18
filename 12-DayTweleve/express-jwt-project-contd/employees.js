const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const tokenSecret = 'thisismysecretkey';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, tokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        })
    } else {
        res.sendStatus(401);
    }
}

const employees = [
    {
        "name": "John Smith",
        "salary": 12000,
        "gender": "Male",
        "country": "India"
    },
    {
        "name": "Gautam Bhalla",
        "salary": 10000,
        "gender": "Male",
        "country": "India"
    },
    {
        "name": "King Kochhar",
        "salary": 22000,
        "gender": "Male",
        "country": "India"
    },
    {
        "name": "Shreya Bajaj",
        "salary": 40000,
        "gender": "Female",
        "country": "India"
    }
]

app.get('/employees', (req, res) => {
    res.send(employees);
})

app.post('/employee-add', authenticateJWT, (req, res) => {
    const { role } = req.user;
    if (role !== 'admin') {
        return res.sendStatus(403);
    }
    const employee = req.body;
    employees.push(employee);
    console.log('employee added !!',employee,req.body);
    res.send(employees);
})

app.listen(4000, () => {
    console.log('Employees Service is running at port 4000!!')
})