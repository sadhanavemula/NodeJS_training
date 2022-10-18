const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const tokenSecret = 'thisismysecretkey';
// const authenticateJWT = (req, res, next) => {
//     const authHeader = req.headers.authorization;
//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         console.log(token)
//         jwt.verify(token, tokenSecret, (err, user) => {
//             if (err) {
//                 return res.sendStatus(403);
//             }
//             req.user = user;
//             next();
//         })
//     } else {
//         res.sendStatus(401);
//     }
// }

const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if( authHeader) {

        const token = authHeader.split(' ')[1];

        jwt.verify(token, tokenSecret, (err, user) => {

            if(err) {

                return res.sendStatus(403);

            }

            req.user = user;

            next();

        })

    } else {

        res.sendStatus(401);

    }

}
const employess = [
    {
        "name": "sadhana",
        "salary": 12000,
        "gender": "Female",
        "country": "india"
    },
    {
        "name": "vedha",
        "salary": 11000,
        "gender": "Female",
        "country": "Us"
    },
    {
        "name": "ramesh",
        "salary": 10000,
        "gender": "Male",
        "country": "UK"
    },
    {
        "name": "sravanthi",
        "salary": 9000,
        "gender": "Female",
        "country": "india"
    },
]

app.get('/employees', (req, res) => {
    res.send(employess);
})

app.post('/employee-add', authenticateJWT, (req, res) => {
    const user = req.user;
    res.send(user);
})

app.listen(4000, () => {
    console.log('Employees service is running at 4000!!')
})