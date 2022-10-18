const db = require('../models');
const Brand = db.brand;

module.exports = function (app) {
    app.get('/brands', (req, res) => {
        res.send('Brands Here')
    })

    app.post('/brands/add', (req, res) => {
        Brand.create({
            name: req.body.name,
            desc: req.body.desc
        })
            .then((brand) => {
                res.send(brand);
            })
            .catch((err) => {
                console.log(err.message);
            })
    })
}