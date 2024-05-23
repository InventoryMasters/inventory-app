const express = require('express');
const Router = express.Router();

const { getAllItems, getItem, createItem, updateItem, deleteItem } = require('../controllers/itemController');



Router.get('/', getAllItems);
Router.get('/:itemId', getItem);
Router.post('/', createItem);
Router.put('/:itemId', updateItem);
Router.delete('/:itemId', deleteItem);

module.exports = Router;


