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

module.exports = {
    getAllItems,
    getItem,
    createItem,
    updateItem
}
