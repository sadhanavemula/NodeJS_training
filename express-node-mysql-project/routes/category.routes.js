const db = require('../models');
const categoryController = require('../controllers/category.controller')

module.exports = function (app) {
    app.get('/categories',categoryController.getCategories);
    app.get('/categories/:id', categoryController.getCategoryById);
    app.post('/categories/add',categoryController.addCategories);
    app.put('/categories/:id',categoryController.updateCategory);
    app.delete("/categories/:id",categoryController.deleteCategory);
}