const { sequelize } = require('./server/models');
const app = require('./server/app');

const PORT = process.env.PORT || 3000;

const init = async () => {
  try {
    await sequelize.sync();

    // app.listen(PORT, async () => {
    //   console.log(`Server listening at http://localhost:${PORT}`);
    //   // Dynamically import the open package
    //   const open = (await import("open")).default;
    //   await open(`http://localhost:${PORT}`); // Open the URL in the default browser
    // });

    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

init();
