const express = require('express');
const Router = express.Router();

const {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
} = require('../controllers/categoryController');

const { validateCategoryName } = require('../validators/categoryValidator');

Router.get('/', getAllCategories);
Router.get('/:categoryId', getCategory);
Router.post('/', [validateCategoryName], createCategory);
Router.put('/:categoryId', [validateCategoryName], updateCategory);
Router.delete('/:categoryId', deleteCategory);

module.exports = Router;
