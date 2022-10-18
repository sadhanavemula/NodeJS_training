const { authJwt } = require('../middlewares');
const roleController = require('../controllers/role.controller');

module.exports = function (app) {
    app.get('/roles',[authJwt.verifyToken, authJwt.isModeratorOrAdmin], roleController.getRoles);
    app.get('/roles/:id', [authJwt.verifyToken, authJwt.isModeratorOrAdmin], roleController.getRoleById);
    app.post('/roles/add',[authJwt.verifyToken, authJwt.isModeratorOrAdmin], roleController.addRole)
    app.put('/roles/:id',[authJwt.verifyToken, authJwt.isModeratorOrAdmin], roleController.updateRole);
    app.delete('/roles/:id', [authJwt.verifyToken, authJwt.isModeratorOrAdmin], roleController.deleteRole);

}