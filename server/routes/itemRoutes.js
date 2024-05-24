const express = require('express');
const Router = express.Router();

const { getAllItems, getItem } = require('../controllers/itemController');



Router.get('/', getAllItems);
Router.get('/:itemId', getItem);


module.exports = Router;


