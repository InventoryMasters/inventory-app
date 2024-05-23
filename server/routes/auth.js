const router = require('express').Router();
const { requireToken } = require('../middleware/authMiddleware');

const {
  login,
  emailCheck,
  signup,
  logout,
} = require('../controllers/authController');

router.post('/login', login);
router.post('/signup', signup);
router.post('/logout', requireToken, logout);
router.post('/check-email', emailCheck);

module.exports = router;
