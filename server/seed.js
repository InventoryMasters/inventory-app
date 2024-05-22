const { mockItem, mockUser } = require('./mock-data/index.js');
const { User, Item } = require('./models/index.js');
const sequelize = require('./db');

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    await Promise.all(mockUser.map((user) => User.create(user)));
    console.log('All users have been seeded successfully...');

    await Promise.all(mockItem.map((item) => Item.create(item)));
    console.log('All items have been seeded successfully...');

    console.log('___DB POPULATED SUCCESSFULLY___');
  } catch (error) {
    console.error(error);
  }
};

seed();
