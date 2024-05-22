const { Category } = require('../models/index'); 
const { validationResult } = require('express-validator');

const getAllCategories = async (req, res) => {
    try{
        const categories = await Category.findAll();

        if(!categories) {
            res.status(400).send('Error fetching categories: Categories not found.');
        } else {
            res.status(200).json(categories);
        }

    } catch (error) {
        res.status(500).send(error)
    }
}

const getCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const category = await Category.findByPk(categoryId);

        if (!category) {
            res.status(404).send(`Error fetching category: Category with ID ${categoryId} not found.`);
        } else {
            res.status(200).json(category);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const createCategory = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const categoryInfo = req.body;
        const newCategory = await Category.create(categoryInfo);

        if (!newCategory) {
            res.status(400).json({error: 'Error creating new category.'})
        } else {
            res.status(201).json(newCategory);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateCategory = async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const newInfo = req.body;
        const categoryId = req.params.categoryId;
        const category = await Category.findByPk(categoryId);

        if(!category) {
            res.status(404).send(`Error updating category: Category with ID ${categoryId} not found`)
        } else {
            await category.update(newInfo);
            res.status(200).json(category)
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const category = await Category.findByPk(categoryId);

        if (!category) {
            res.status(404).send(`Error deleting category: Category with ID ${categoryId} not found`);
        } else {
            await category.destroy();
            res.status(200).send("Category succesfuly removed!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory
}