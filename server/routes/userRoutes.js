const express = require('express');
const Router = express.Router();

const { getAllUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

Router.get('/users', getAllUsers);
Router.get('/users/:userId', getUser);
Router.put('/users/:userId', updateUser);
Router.delete('/users/:userId', deleteUser);

module.exports = Router;