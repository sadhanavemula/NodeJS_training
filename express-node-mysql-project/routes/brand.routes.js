const db = require('../models');
const brandController = require('../controllers/brand.controller')

module.exports = function (app) {
    app.get('/brands', brandController.getBrands);
    app.get('/brands/:id', brandController.getBrandById);
    app.post('/brands/add', brandController.addBrands);
    app.put('/brands/:id',brandController.updateBrand);
    app.delete("/brands/:id",brandController.deleteBrand);
}