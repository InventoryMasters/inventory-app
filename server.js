const { sequelize } = require('./server/models');
const app = require('./server/app');

const port = process.env.PORT || 3000;

const init = async () => {
  try {
    await sequelize.sync();

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
      console.log();
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

init();
