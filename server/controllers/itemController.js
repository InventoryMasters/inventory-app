const { Item } = require('../models/index');

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
const createItem = async (req, res) => {
    try {
        const itemInfo = req.body;
        const newItem = await Item.create(itemInfo);
        res.status(201).json(newItem);
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateItem = async (req, res) => {
    try {
        const itemId = req.params.itemId;
        const newInfo = req.body;
        const item = await Item.findByPk(itemId);
        if (!item) {
            res.status(404).send(`Error updating item: Item with ID ${itemId} not found`);
        } else {
            await item.update(newInfo);
            res.status(200).json(item);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

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
