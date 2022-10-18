const db = require("../models");
const Role = db.role;

module.exports = {

    ///Getting all Roles
    //Get API requset URL is http://localhost:3000/roles
    getRoles: (req, res) => {
        Role.findAll({
        })
            .then((roles) => {
                if (roles.length != 0) {
                    res.send(roles);
                }
                else {
                    res.status(400).send('There is no data in role table!');
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },

    //Getting Role by Id
    //Get API requset URL is http://localhost:3000/roles/:id
    getRoleById: (req, res) => {
        const id = req.params.id;
        Role.findByPk(id)
            .then((role) => {
                if (role) {
                    res.send(role);
                }
                else {
                    // Role does not exist with the provided id
                    res.status(400).send(`Cannot find Role with id=${id}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },


    //Adding New Role
    //Post API requset URL is http://localhost:3000/roles/add
    addRole: (req, res) => {
        Role.create({
            name: req.body.name
        })
            .then((role) => {
                res.send(role);
            })
            .catch((error) => {
                console.log(error.message)
            })
    },

    //Updating role
    //Put API requset URL is http://localhost:3000/roles/:id
    updateRole: (req, res) => {
        const id = req.params.id;
        Role.update(req.body, {
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send(`Role with id ${id} updated successfully!`);
                }
                else {
                    // Role does not exist with the provided Id
                    res.send(`Cannot find Role with id=${id}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    },

    //Deleting role
    //Delete API requset URL is http://localhost:3000/roles/:id
    deleteRole: (req, res) => {
        const id = req.params.id;
        Role.destroy({
            where: { id: id }
        })
            .then(num => {
                if (num == 1) {
                    res.send(`Role with id ${id} deleted successfully!`);
                }
                else {
                    // Role does not exist with the provided Id
                    res.send(`Cannot find Role with id=${id}`);
                }
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
}