const db = require('../models');
const Brand = db.brands;

module.exports = {
    //Getting all Brands
    //Get API requset URL is http://localhost:3000/brands
    getBrands: (req, res) => {
        Brand.findAll({
        }).then(brands => {
            if (brands.length != 0) {
                res.send(brands)
            } else {
                res.status(400).send("No brands in table")
            }
        })
            .catch((err) => {
                console.log("error message");
            })
    },
    //Getting Brand by Id
    //Get API requset URL is http://localhost:3000/brands/:id
    getBrandById: (req, res) => {
        Brand.findOne({
            where: { id: req.params.id }
        })
            .then(brands => {
                console.log(brands)
                if (brands.length != 0) {
                    res.send(brands)
                } else {
                    res.status(400).send("No brands in table")
                }
            })
            .catch((err) => {
                console.log("error message");
            })
    },
    //Adding New Brand
    //Post API requset URL is http://localhost:3000/brands/add
    addBrands: (req, res) => {
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
    },
    //Updating Brand
    //Put API requset URL is http://localhost:3000/brands/:id
    updateBrand: (req, res) => {
        const id = req.params.id;
        const data = req.body;
        Brand.update(data, { where: { id } })
            .then(brands => {
                return res.send('Category updated');
            })
            .catch((err) => {
                return res.send(err);
            })
    },
    //Deleting Brand
    //Delete API requset URL is http://localhost:3000/brands/:id
    deleteBrand: (req, res) => {
        const id = req.params.id;
        Brand.destroy({
            where: {
                id
            }
        })
            .then(brands => {
                if (brands === 0) {
                    res.send('No records were deleted');
                } else {
                    res.send(`Brand deleted`);
                }
            })
            .catch((err) => {
                return res.send(err);
            })
    }
}