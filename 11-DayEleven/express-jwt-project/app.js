const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const tokenSecret = 'thisismysecretkey';

const refreshTokenSecret = 'thisismyothersecretkey';

const refreshtokensGenerated = [];

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
]

app.get('/', (req, res) => {
    res.send('Hello Everyone!!');
})

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => { return u.username == username && u.password == password })
    if (user) {
        console.log(user);
        const accessToken = jwt.sign({ username: user.username, password: user.password, role: user.role }, tokenSecret, { expiresIn: '20m' });
        const refreshToken = jwt.sign({ username: user.username, password: user.password, role: user.role }, refreshTokenSecret);
        refreshtokensGenerated.push(refreshToken);
        res.json({ accessToken, refreshToken });
        console.log(refreshtokensGenerated);
    }
    else {
        res.send('Invalid credentails');
    }
})

app.listen(3000, () => {
    console.log('Authentication Project Running at port 3000!!');
})