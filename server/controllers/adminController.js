const { Item, Category } = require('../models/index');
const { body, validationResult } = require('express-validator');

/**
 * ITEM ADMIN CONTROLLER
 */
const createItem = [
  body('name')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('description')
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters long'),
  body('price')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('qty')
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  async (req, res, next) => {
    try {
      const { name, description, price, qty, imageUrl, category } = req.body;

    
      const newItem = await Item.create({
        name,
        description,
        price,
        qty,
        imageUrl,
        category: Array.isArray(category) ? category.join(', ') : category, 
      });

      res.status(201).json(newItem);
    } catch (error) {
      next(error);
      res.status(500).send(error);
    }
  },
];


const updateItem = [
  body('name')
    .optional()
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters long'),
  body('description')
    .optional()
    .isLength({ min: 10 })
    .withMessage('Description must be at least 10 characters long'),
  body('price')
    .optional()
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),
  body('qty')
    .optional()
    .isInt({ min: 0 })
    .withMessage('Quantity must be a non-negative integer'),
  body('categoryId')
    .optional()
    .isUUID()
    .withMessage('Category ID must be a valid UUID'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  async (req, res, next) => {
    try {
      const itemId = req.params.itemId;
      const item = await Item.findByPk(itemId);
      if (!item) {
        return res
          .status(404)
          .send(`Error updating item: Item with ID ${itemId} not found`);
      }
      await item.update(req.body);
      res.status(200).json(item);
    } catch (error) {
      next(error)
      res.status(500).send(error);
    }
  },
];

const deleteItem = async (req, res, next) => {
  try {
    const itemId = req.params.itemId;
    const item = await Item.findByPk(itemId);
    if (!item) {
      res
        .status(404)
        .send(`Error deleting item: Item with ID ${itemId} not found`);
    } else {
      await item.destroy();
      res.status(200).send('Item removed!');
    }
  } catch (error) {
    next(error)
    res.status(500).send(error);
  }
};

const createCategory = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const categoryInfo = req.body;
    const newCategory = await Category.create(categoryInfo);

    if (!newCategory) {
      res.status(400).json({ error: 'Error creating new category.' });
    } else {
      res.status(201).json(newCategory);
    }
  } catch (error) {
    next(error)
    res.status(500).send(error);
  }
};

/**
 * CATEGORY ADMIN CONTROLLER
 */
const updateCategory = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const newInfo = req.body;
    const categoryId = req.params.categoryId;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      res
        .status(404)
        .send(
          `Error updating category: Category with ID ${categoryId} not found`
        );
    } else {
      await category.update(newInfo);
      res.status(200).json(category);
    }
  } catch (error) {
    next(error)
    res.status(500).send(error);
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      res
        .status(404)
        .send(
          `Error deleting category: Category with ID ${categoryId} not found`
        );
    } else {
      await category.destroy();
      res.status(200).send('Category succesfuly removed!');
    }
  } catch (error) {
    next(error)
    res.status(500).send(error);
  }
};
module.exports = {
  createItem,
  updateItem,
  deleteItem,
  createCategory,
  updateCategory,
  deleteCategory,
};
