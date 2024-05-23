const express = require("express");
const router = express.Router();


router.use('/items', require('./itemRoutes'));
router.use('/users', require('./users'));



module.exports = router;
