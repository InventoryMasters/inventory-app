const express = require('express');
const Router = express.Router();

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const { validateName, validatePassword } = require('../validators/userValidator');

Router.get('/', getAllUsers);
Router.get('/:userId', getUser);
Router.post('/', [validateName, validatePassword], createUser);
Router.put('/:userId', [validateName, validatePassword], updateUser);
Router.delete('/:userId', deleteUser);

module.exports = Router;