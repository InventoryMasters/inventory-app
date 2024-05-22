const { Sequelize } = require('sequelize');
const sequelize = require('../db');

const Item = require('./Item');
const Category = require('./Category');
const User = require('./User');

Category.hasMany(Item, { foreignKey: 'categoryId' });
Item.belongsTo(Category, { foreignKey: 'categoryId' });

module.exports = {
  Item,
  Category,
  sequelize,
  User,
  sequelize,
};
