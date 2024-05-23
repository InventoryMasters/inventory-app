const { Category } = require('../models/index');

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    if (!categories) {
      res.status(400).send('Error fetching categories: Categories not found.');
    } else {
      res.status(200).json(categories);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getCategory = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      res
        .status(404)
        .send(
          `Error fetching category: Category with ID ${categoryId} not found.`
        );
    } else {
      res.status(200).json(category);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllCategories,
  getCategory,
};
