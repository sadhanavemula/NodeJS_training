const config = require('../configs/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    //User SignUp
    //Post API requset URL is http://localhost:3000/api/auth/signup
    signup: (req, res) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8)
        })
            .then((user) => {
                if (req.body.roles) {
                    Role.findAll({
                        where: {
                            name: {
                                [Op.or]: req.body.roles
                            }
                        }
                    }).then(roles => {
                        user.setRoles(roles).then(() => res.send('User signup successfully!'));
                    })
                } else {
                    user.setRoles([1]).then(() => res.send('User signup successfully!'));
                }
            })
            .catch((error) => {
                res.status(500).send(error.message);
            })
    },
    //User SignIn
    //Post API requset URL is http://localhost:3000/api/auth/signin
    signin: (req, res) => {
        User.findOne({
            where: { username: req.body.username }
        })
            .then((user) => {
                if (!user) {
                    return res.status(400).send('User not found');
                }
                var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                if (!passwordIsValid) {
                    return res.status(401).send('Incorrect password!');
                }
                var token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 });
                var authorities = [];
                user.getRoles().then(roles => {
                    for (let i = 0; i < roles.length; i++) {
                        console.log(roles[i].name);
                        authorities.push("Roles: " + roles[i].name.toUpperCase());
                    }
                    res.status(200).send({
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        roles: authorities,
                        accessToken: token
                    });
                })

            })
            .catch((error) => {
                res.status(500).send(error.message);
            })
    }
}