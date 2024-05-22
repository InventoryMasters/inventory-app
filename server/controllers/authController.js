const { User } = require('../models/index');

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
    if (token) {
      return res.status(200).json({ token });
    } else {
      err = new Error('Incorrect username or password');
      err.status = 401;
      throw err;
    }
  } catch (e) {
    next(e);
  }
};

const signup = async (req, res, next) => {
  try {
   
  }catch(e) {
    next(e)
  }
}

module.exports = { login, emailCheck };
