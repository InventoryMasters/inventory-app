const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = require('./item');
const Category = require('./Category');
const User = require('./User'); 

Category.hasMany(Item, {
  foreignKey: {
    name: 'categoryId',
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
});
Item.belongsTo(Category, {
  foreignKey: {
    name: 'categoryId',
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  }
});

module.exports = {
  Item,
  Category,
  User, 
  sequelize,
  Sequelize
};

