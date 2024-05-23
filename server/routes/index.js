const express = require("express");
const router = express.Router();

// different model routers
router.use('/users', require('./users'));
router.use('/auth', require('./auth'))


module.exports = router;
