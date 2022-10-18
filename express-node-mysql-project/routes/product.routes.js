const db = require('../models');
const { authJwt } = require('../middlewares');
const productController = require('../controllers/product.controller')

module.exports = function (app) {
    app.get('/products',productController.getProducts);
    app.get('/products/:id', productController.getProductById);
    app.post('/products/add',[authJwt.verifyToken, authJwt.isModeratorOrAdmin],productController.addProducts);
    app.put('/products/:id',[authJwt.verifyToken, authJwt.isModeratorOrAdmin],productController.updateProduct);
    app.delete("/products/:id",[authJwt.verifyToken, authJwt.isModeratorOrAdmin],productController.deleteProduct);
}