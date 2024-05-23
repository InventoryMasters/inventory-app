const { isTokenBlacklisted } = require('../tokenUtils/tokenBlacklist');

const checkTokenBlacklist = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (token && isTokenBlacklisted(token)) {
    return res.status(401).json({ message: 'Token revoked' });
  }

  next();
  
};


module.exports = checkTokenBlacklist;
