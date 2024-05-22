const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Item = require('./Item');
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
  foreignKey: 'categoryId'
});

module.exports = {
  Item,
  Category,
  User, 
  sequelize,
  
};

