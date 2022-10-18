const db = require('../models');
const Product = db.products;

module.exports = {
    //Getting all Products
    //Get API requset URL is http://localhost:3000/products
    getProducts: (req, res) => {
        Product.findAll({
        }).then(products => {
            if (products.length != 0) {
                res.send(products)
            } else {
                res.status(400).send("No products in table")
            }
        })
            .catch((err) => {
                console.log(err);
            })
    },
    //Getting Product by Id
    //Get API requset URL is http://localhost:3000/products/:id
    getProductById: (req, res) => {
        Product.findOne({
            where: { id: req.params.id }
        })
            .then(products => {
                if (products.length != 0) {
                    res.send(products)
                } else {
                    res.status(400).send("No Products in table")
                }
            })
            .catch((err) => {
                console.log("error message");
            })
    },
    //Adding New Product
    //Post API requset URL is http://localhost:3000/products/add
    addProducts: (req, res) => {
        Product.create({
            name: req.body.name,
            desc: req.body.desc,
            brandId: req.body.brandId,
            categoryId: req.body.categoryId
        })
            .then((product) => {
                res.send(product);
            })
            .catch((err) => {
                console.log(err.message);
            })
    },
    //Updating Product
    //Put API requset URL is http://localhost:3000/products/:id
    updateProduct: (req, res) => {
        const id = req.params.id;
        const data = req.body;
        Product.update(data, { where: { id } })
            .then(product => {
                return res.send('Product updated');
            })
            .catch((err) => {
                return res.send(err);
            })
    },
    //Deleting Product
    //Delete API requset URL is http://localhost:3000/products/:id
    deleteProduct: (req, res) => {
        const id = req.params.id;
        Product.destroy({
            where: {
                id
            }
        })
            .then(product => {
                if (product === 0) {
                    res.send('No records were deleted');
                } else {
                    res.send(`Product deleted`);
                }
            })
            .catch((err) => {
                return res.send(err);
            })
    }
}