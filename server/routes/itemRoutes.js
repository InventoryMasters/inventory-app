const express = require('express');
const Router = express.Router();

const { getAllItems, getItem } = require('../controllers/itemController');

Router.get('/items', getAllItems);
Router.get('/items/:itemId', getItem);
Router.post('/items', createItem);
Router.put('/items/:itemId', updateItem);

module.exports = Router;


