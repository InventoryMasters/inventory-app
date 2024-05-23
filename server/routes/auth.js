const router = require('express').Router();
const { checkTokenBlacklist } = require('../middleware/tokenMiddleware');

const {
  login,
  emailCheck,
  signup,
  logout,
} = require('../controllers/authController');

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', logout);
router.post('/check-email', emailCheck);

module.exports = router;
