const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2],
                msg: 'First name must be at least 2 letters long!'
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2],
                msg: 'Last name must be at least 2 letters long!'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    passwordHash: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [8, 24],
                msg: 'Password must be between 8 and 24 characters!'
            },
            containsSpecialChar(value) {
                if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                    throw new Error('Password must have at least one special character!');
                }
            },
            containsUppercase(value) {
                if (!/[A-Z]/.test(value)) {
                    throw new Error('Password must have at least one uppercase letter!');
                }
            },
            constainsLowercase(value) {
                if (!/[a-z]/.test(value)) {
                    throw new Error('Password must have at least one lowercase letter!');
                }
            },
            containsNumber(value) {
                if (!/\d/.test(value)) {
                    throw new Error('Password must have at least one number!');
                }
            }
        }
    },
    role: {
        type: DataTypes.ENUM('USER', 'ADMIN'),
        defaultValue: 'USER'
    }
})

module.exports = User;