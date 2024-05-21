const { User } = require('../models/index');

const getAllUsers = async (req, res) => {
    try { 
        const users = await User.findAll();
        if (users) {
            res.status(200).json(users);
        }
    } catch(error) {
        res.status(500).send(error);
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findByPk(userId);
        if (user) {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        const newInfo = req.body;
        const userId = req.params.userId;
        const user = User.findByPk(userId);
        await user.update(newInfo);
        res.status(200).send("User updated!");
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = User.findByPk(userId);
        if (user) {
            await user.destroy();
            res.status(200).send("User removed!");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
}