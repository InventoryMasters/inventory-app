const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../db');

const Item = sequelize.define('item' , {
     id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: {
                args: [2]
            }
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }
    });
    
    module.exports = Item;

