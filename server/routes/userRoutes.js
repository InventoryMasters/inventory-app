const express = require('express');
const Router = express.Router();

Router.get('/users', getAllUsers);
Router.get('/users/:userId', getUser);
Router.put('/users/:userId', updateUser);
Router.delete('/users/:userId', deleteUser);

module.exports = Router;