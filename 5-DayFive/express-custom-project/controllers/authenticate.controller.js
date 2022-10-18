
const path = require('path');

module.exports.getLogin = (req, res) => {
    res.sendFile("login.html", { root: path.join(__dirname, '../public') })
}

module.exports.postLogin = (req, res) => {
    var uname = req.body.username;
    var pass = req.body.password;
    res.send(`Hello ${uname}, your password is ${pass}`);
}

