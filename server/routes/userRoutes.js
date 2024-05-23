const express = require('express');
const Router = express.Router();
const {
  requireToken,
  adminAccessRequired,
} = require('../middleware/authMiddleware');

const checkTokenBlacklist = require('../middleware/tokenMiddleware');

const {
  getAllUsers,
  getUser,
  // createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const {
  validateName,
  validatePassword,
} = require('../validators/userValidator');

Router.get('/', adminAccessRequired, checkTokenBlacklist, getAllUsers);
Router.get('/:userId', requireToken, checkTokenBlacklist, getUser);
// Router.post('/', [validateName, validatePassword], createUser);
Router.put(
  '/:userId',
  [validateName, validatePassword],
  requireToken,
  updateUser
);
Router.delete('/:userId', requireToken, checkTokenBlacklist, deleteUser);

module.exports = Router;
