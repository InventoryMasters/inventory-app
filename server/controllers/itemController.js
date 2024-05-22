const { Item } = require('../models/index');
const { body, validationResult } = require('express-validator');

const getAllItems = async (req, res) => {
    try {
        const items = await Item.findAll();
        if (!items) {
            res.status(404).send("Error fetching items: Items not found");
        } else {
            res.status(200).json(items);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const item = await Item.findByPk(itemId);
        if (!item) {
            res.status(404).send(`Error fetching item: Item with ID ${itemId} not found`);
        } else {
            res.status(200).json(item);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
const createItem = [
    body('name').isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('description').isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('price').isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('qty').isInt({ min: 0 }).withMessage('Quantity must be a non-negative integer'),
    body('categoryId').isUUID().withMessage('Category ID must be a valid UUID'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    async (req, res) => {
        try {
            const newItem = await Item.create(req.body);
            res.status(201).json(newItem);
        } catch (error) {
            res.status(500).send(error);
        }
    }
];

const updateItem = [
    body('name').optional().isLength({ min: 2 }).withMessage('Name must be at least 2 characters long'),
    body('description').optional().isLength({ min: 10 }).withMessage('Description must be at least 10 characters long'),
    body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a positive number'),
    body('qty').optional().isInt({ min: 0 }).withMessage('Quantity must be a non-negative integer'),
    body('categoryId').optional().isUUID().withMessage('Category ID must be a valid UUID'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    async (req, res) => {
        try {
            const itemId = req.params.itemId;
            const item = await Item.findByPk(itemId);
            if (!item) {
                return res.status(404).send(`Error updating item: Item with ID ${itemId} not found`);
            }
            await item.update(req.body);
            res.status(200).json(item);
        } catch (error) {
            res.status(500).send(error);
        }
    }
]


const deleteItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const item = await Item.findByPk(itemId);
        if (!item) {
            res.status(404).send(`Error deleting item: Item with ID ${itemId} not found`);
        } else {
            await item.destroy();
            res.status(200).send("Item removed!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = {
    getAllItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}
