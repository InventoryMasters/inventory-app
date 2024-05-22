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

Router.get('/categories', getAllCategories);
Router.get('/categories/:categoryId', getCategory);
Router.post('/categories', [validateCategoryName], createCategory);
Router.put('/categories', [validateCategoryName], updateCategory);
Router.delete('/categories/:categoryId', deleteCategory);

module.exports = Router;
