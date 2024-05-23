const { User } = require('../models/index');
// const jwt = require('jsonwebtoken')

async function requireToken(req, res, next) {
  try {
    const token = req.headers.authorization;

    console.log({ 'TOKEN FROM MIDDLEWARE': token });

    // console.log({'payload log form middleware': token.payload})
    if (!token)
      return res.status(404).json({ error: 'Must be logged in to access' });

    // const decoded = jwt.verify(token.split(' ')[1], SECRET);

    // console.log({ 'payload log form middleware': decoded });
    const user = await User.verifyByToken(token);
    console.log({ user });
    req.user = user;

    console.log({ REQ: req.user });
    console.log(' WE GOT HERE');
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = { requireToken };
