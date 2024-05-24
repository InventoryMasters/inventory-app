const router = require('express').Router();
const { requireToken } = require('../middleware/authMiddleware');
const {
  validateName,
  validatePassword,
} = require('../validators/userValidator');


const {
  login,
  emailCheck,
  signup,
  logout,
} = require('../controllers/authController');

router.post('/login', login);
router.post('/signup',[validateName, validatePassword], signup);
router.post('/logout', requireToken, logout);
router.post('/check-email', emailCheck);

module.exports = router;
