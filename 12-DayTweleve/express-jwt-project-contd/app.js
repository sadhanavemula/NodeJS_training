const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const tokenSecret = 'thisismysecretkey';
const refreshTokenSecret = 'thisismyanothersecretkey';

const users = [
    {
        username: 'sarah',
        password: '123456',
        role: 'admin'
    },
    {
        username: 'smith',
        password: '123456',
        role: 'user'
    },
];

let = refreshTokensGenereated = [];

app.get('/', (req, res) => {
    res.send('Hello Everyone!!');
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username == username && u.password == password });
    if (user) {
        console.log(user);
        const accessToken = jwt.sign({ username: user.username, role: user.role }, tokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: user.username, role: user.role }, refreshTokenSecret);
        refreshTokensGenereated.push(refreshToken);
        res.json({ accessToken, refreshToken });
        console.log(refreshTokensGenereated);
    } else {
        res.send('Invalid Credentials')
    }
})

app.listen(3000, () => {
    console.log('Authentication Project Running at Port 3000!!');
})