const { body } = require('express-validator');

const validateCategoryName = [
    body('name')
        .trim()
        .notEmpty()
        .withMessage('Category name cannot be empty')
];

module.exports = { validateCategoryName };
