const { body } = require('express-validator');

const validateName = [
    body('firstName')
        .optional()
        .isLength({ min: 2 })
        .withMessage('First name must be at least 2 characters long'),
    body('lastName')
        .optional()
        .isLength({ min: 2 })
        .withMessage('Last name must be at least 2 characters long')
];

const validatePassword = [
    body('passwordHash')
        .optional()
        .isLength({ min: 8, max: 24 })
        .withMessage('Password must be between 8 and 24 characters')
        .matches(/[!@#$%^&*(),.?":{}|<>]/)
        .withMessage('Password must contain at least one special character')
        .matches(/\d/)
        .withMessage('Password must contain at least one number')
        .matches(/[A-Z]/)
        .withMessage('Password must contain at least one uppercase letter')
        .matches(/[a-z]/)
        .withMessage('Password must contain at least one lowercase letter')
];

module.exports = { validateName, validatePassword }

