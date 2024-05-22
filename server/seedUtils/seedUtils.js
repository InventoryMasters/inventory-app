const { mockCategory } = require('../mock-data/index');

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomCategoryIds = () => {
  const categoryCount = getRandomInt(1, 3);
  const shuffledCategories = mockCategory.sort(() => 0.5 - Math.random());
  return shuffledCategories
    .slice(0, categoryCount)
    .map((category) => category.id);
};

module.exports = getRandomCategoryIds;
