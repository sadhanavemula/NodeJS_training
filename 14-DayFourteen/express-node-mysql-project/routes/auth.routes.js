const { verifySignUp } = require('../middlewares');

const config = require('../configs/auth.config');
const db = require('../models');
const User = db.user;
const Role = db.role;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


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
        verifySignUp.checkRolesExisted], (req, res) => {
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
                        user.setRoles(roles).then(() => { res.send('User signed Up sussessfully! ') })
                    })
                } else {
                    user.setRoles([1]).then(() => { res.send("User Signed up successfully") })
                }
            })
            .catch((err) => {
                res.status(500).send(err.message);
            })
    })

    app.post('/api/auth/signin', (req, res) => {
       User.findOne({
        where: {username: req.body.username}
       })
       .then((user)=>{
        if(!user){
            return res.status(400).send('User Not found!');
        }
        var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid){
            return res.status(401).send('Invalid Password!!');
        }
        var token = jwt.sign({id:user.id},config.secret,{expiresIn:86400});
        var authorities = [];
        user.getRoles().then(roles =>{
            for(let i=0;i<roles.length;i++){
                console.log(roles[i].name);
                authorities.push("ROLE" + roles[i].name.toUpperCase());
            }
            res.status(200).send({
                id:user.id,
                username:user.username,
                email: user.email,
                role: authorities,
                accessToken:token
            })
        })
       })
       .catch((err)=>{
        res.status(500).send(err.message);
       })
    })
}