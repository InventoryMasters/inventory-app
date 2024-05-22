const express = require("express");
const router = express.Router();

// different model routers
router.use('/users', require('./users'));
router.use('/auth/login', require('./auth'))
router.use('/auth/email-check', require('./auth'))

module.exports = router;
