const express = require('express');
const Router = express.Router();

// controller
// validate

Router.get('/categories', getAllCategories);
Router.get('/categories/:categoryId', getCategory);
// Router.post('/categories', [validate], createCategory);
// Router.put('/categories', [validate], updateCategory);
Router.delete('/categories/:categoryId', deleteCategory);

module.exports = Router;
