const { verifySignUp } = require('../middlewares');

const config = require('../configs/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authController = require('../controllers/auth.controllers');


module.exports = function (app) {
    app.use((req, res, next) => {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token,Origin,Content-Type,Accept"
        );
        next();
    })

    app.post('/api/auth/signup',
    [verifySignUp.checkDuplicateUsernameOrEmail,
        verifySignUp.checkRolesExisted], authController.signup)

    app.post('/api/auth/signin',authController.signin )
}