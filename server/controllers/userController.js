const { User } = require('../models/index');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        if (!users) {
            res.status(404).send("Error fetching users: Users not found");
        } else {
            res.status(200).json(users);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findByPk(userId);
        if (!user) {
            res.status(404).send(`Error fetching user: User with ID ${userId} not found`);
        } else {
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const createUser = async (req, res) => {
    try {
        const userInfo = req.body;
        await User.create(userInfo);
        const newUser = await User.findOne({ where: { email: userInfo.email } });
        if (!newUser) {
            res.status(500).json({ error: 'Error creating user '});
        } else {
            res.status(200).json(newUser);
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
        if (!user) {
            res.status(404).send(`Error updating user: User with ID ${userId} not found`);
        } else {
            await user.update(newInfo);
            res.status(200).json(user);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const user = User.findByPk(userId);
        if (!user) {
            res.status(404).send(`Error deleting user: User with ID ${userId} not found`);
        } else {
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
    createUser,
    updateUser,
    deleteUser
}