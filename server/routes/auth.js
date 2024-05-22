const router = require('express').Router();
// const Router = express.Router();

const { login, emailCheck } = require('../controllers/authController');

router.post('/', login);
router.post('/', emailCheck)

module.exports = router;
