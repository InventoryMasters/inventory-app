const router = require('express').Router();

const {
  createItem,
  updateItem,
  deleteItem,
  createCategory,
  updateCategory,
  deleteCategory,
} = require('../controllers/adminController');

const { validateCategoryName } = require('../validators/categoryValidator');

/**
 * ITEM ROUTES
 */
router.post('/items', createItem);
router.put('/items/:itemId', updateItem);
router.delete('/items/:itemId', deleteItem);

/**
 * CATEGORY ROUTES
 */
router.post('/categories',[validateCategoryName], createCategory);
router.put('/categories/:categoryId', [validateCategoryName], updateCategory);
router.delete('/categories/:categoryId', deleteCategory);

module.exports = router;
