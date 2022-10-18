
module.exports = {
    allAccess: (req, res) => {
        res.send("all can access");
    },
    userAccess: (req, res) => {
        res.send("only user role can access");
    },
    moderatorAccess: (req, res) => {
        res.send("only moderator can access");
    },
    adminAccess: (req, res) => {
        res.send("only admin role can access");
    }
}
