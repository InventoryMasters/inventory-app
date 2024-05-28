const { sequelize } = require('./server/models');
const app = require('./server/app');

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
      console.log(PORT);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

init();
