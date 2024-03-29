const db = require('../models/index');

const ROLES = db.ROLES;
const User = db.user;

checkDuplicateUsernameOrEmail = (req, res, next) => {
    User.findOne({ where: { username: req.body.username } })
        .then((user) => {
            if (user) {
                res.status(400).send('Failed!! user already exists with this name');
                return;
            }
            User.findOne({ where: { email: req.body.email } })
                .then((user) => {
                    if (user) {
                        res.status(400).send('Failed!! user already exists with this email');
                        return;
                    }
                    next();
                })
        })
}

checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                res.status(400).send('Failed!! Role doesnt exist');
                return;
            }
        }
    }
    next();
}

const verifySignUp = {
    checkDuplicateUsernameOrEmail,
    checkRolesExisted
}

module.exports = verifySignUp;