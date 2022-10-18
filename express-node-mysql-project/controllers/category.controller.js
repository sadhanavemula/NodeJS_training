const { categories } = require('../models');
const db = require('../models');
const Category = db.categories;

module.exports = {
  //Getting all categories
  //Get API requset URL is http://localhost:3000/categories
  getCategories: async (req, res) => {
    try {
      const categories = await Category.findAll({});
      return res.send(categories);
    } catch (err) {
      return res.status(500).send({
        message: err.message
      })
    }
  },
  //Getting Category by Id
  //Get API requset URL is http://localhost:3000/categories/:id
  getCategoryById: async (req, res) => {
    try {
      const categories = await Category.findOne({
        where: { id: req.params.id }
      });
      return res.send(categories);
    } catch (err) {
      console.log(err.message)
      return res.status(500).send({
        message: err.message
      })
    }
  },
  //Adding New Category
  //Post API requset URL is http://localhost:3000/categories/add
  addCategories: async (req, res) => {
    try {
      const categories = await Category.create({
        name: req.body.name,
        desc: req.body.desc
      });
      return res.send(categories);
    } catch (err) {
      return res.status(500).send({
        message: err.message
      })
    }
  },
  //Updating Category
  //Put API requset URL is http://localhost:3000/categories/:id
  updateCategory: async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    try {
      const book = await Category.update(data, {
        where: {
          id
        }
      });
      return res.send('Category updated');
    } catch (err) {
      return res.send(err);
    }
  },
  //Deleting Category
  //Delete API requset URL is http://localhost:3000/categories/:id
  deleteCategory: async (req, res) => {
    const id = req.params.id;
    try {
      const categories = await Category.destroy({
        where: {
          id
        }
      });
      if (categories === 0) {
        res.send('No records were deleted');
      } else {
        res.send(`Category deleted`);
      }
    } catch (err) {
      res.send(err);
    }
  }
}