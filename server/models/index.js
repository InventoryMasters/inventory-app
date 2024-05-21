const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = require('./item');
const Category = require('./Category');
const User = require('./User'); 

Item.belongsTo(Category, { foreignKey: 'categoryId' });
Category.hasMany(Item, { foreignKey: 'categoryId' });

module.exports = {
  Item,
  Category,
  User, 
  sequelize,
  Sequelize
};

