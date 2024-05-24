const { mockItem, mockUser, mockCategory } = require('./mock-data/index.js');
const { User, Item, Category } = require('./models/index.js');
const sequelize = require('./db');

const seed = async () => {
  try {
    // drop and recreate tables per model definitions
    await sequelize.sync({ force: true });

    console.log('___DB SEED STARTED___')
    //seed users
    await Promise.all(mockUser.map((user) => User.create(user)));
    console.log('All users have been seeded successfully...');

    //seed category
    await Promise.all(
      mockCategory.map((category) => Category.create(category))
    );
    console.log('All categories have been seeded successfully...');

 // Seed items
 await Promise.all(items.map((item) => Item.create(item)));
 console.log('All items have been seeded successfully...');

 console.log('___DB POPULATED SUCCESSFULLY___');
} catch (error) {
 console.error(error);
}
};

seed();
