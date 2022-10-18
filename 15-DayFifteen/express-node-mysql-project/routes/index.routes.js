const indexController = require('../controllers/index.controllers');

module.exports = function (app) {
    app.get('/auth/message', indexController.message);
    app.get('/', indexController.index);
}





