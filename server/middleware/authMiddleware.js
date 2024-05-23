const { User } = require('../models/index');

async function requireToken(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token)
      return res.status(404).json({ error: 'Must be logged in to access' });

    const user = await User.verifyByToken(token);
    req.user = user;

    next();
  } catch (e) {
    next(e);
  }
}

async function adminAccessRequired(req, res, next) {
  try {

    const token = req.headers.authorization;
    if (!token)
      return res.status(404).json({ error: 'Must be logged in to access' });

      const adminUser = await User.verifyByToken(token)
      req.user = adminUser

    next();
  } catch (e) {
    next(e);
  }
}

module.exports = { requireToken, adminAccessRequired };
