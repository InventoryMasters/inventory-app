const { User } = require('../models/index');
const { addToBlacklist } = require('../tokenUtils/tokenBlacklist');
const { validationResult } = require('express-validator');

/**
 * USER EMAIL CHECKER (will use on a front end)
 */
const emailCheck = async (req, res, next) => {
  try {
    const emailLookup = await User.findOne({ email: req.body.email });
    if (!emailLookup) return res.status(404).json({ mesage: false });

    res.status(200).json({ message: true });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await User.authenticate({
      email: email.trim().toLowerCase(),
      password: password.trim(),
    });

    if (!token)
      return res.staus(401).json({ error: 'Incorrect username or password' });

    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};

const signup = async (req, res, next) => {
  const errors = validationResult(req);
      if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
      }
  try {
    const { firstName, lastName, email, passwordHash } = req.body;

    const newUser = await User.create({
      firstName,
      lastName,
      email: email.trim().toLowerCase(),
      passwordHash: passwordHash.trim(),
    });

    if (newUser.id) {
      res.status(201).json({
        token: await User.authenticate({
          email: email.trim().toLowerCase(),
          password: passwordHash.trim(),
        }),
      });
    }
  } catch (e) {
    if (e.name === 'SequelizeUniqueConstaintError') {
      res
        .status(401)
        .json({ error: `User with email ${email} already exists` });
    }
    next(e);
  }
};

const logout = async (req, res, next) => {
  try {
    //extract token form a bearer authorization header
    const token = req.headers.authorization?.split(' ')[1];
    if (!token)
      return res
        .status(403)
        .json({ error: 'Cannot logout: inadequate access rights' });
    res.status(200).json({ message: 'Logout successful' });
  } catch (e) {
    next(e);
  }
};

module.exports = { login, emailCheck, signup, logout };
