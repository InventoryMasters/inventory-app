const express = require('express');
const Router = express.Router();

const {
  getAllCategories,
  getCategory,
} = require('../controllers/categoryController');

Router.get('/', getAllCategories);
Router.get('/:categoryId', getCategory);

module.exports = Router;
