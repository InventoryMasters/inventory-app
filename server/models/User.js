const sequelize = require('../db');
const { DataTypes, Sequelize } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const SECRET = process.env.JWT;
const SALT_ROUNDS = process.env.SALT_ROUNDS;

const User = sequelize.define('user', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2],
        msg: 'First name must be at least 2 letters long!',
      },
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2],
        msg: 'Last name must be at least 2 letters long!',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [8, 24],
        msg: 'Password must be between 8 and 24 characters!',
      },
      containsSpecialChar(value) {
        if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
          throw new Error('Password must have at least one special character!');
        }
      },
      containsUppercase(value) {
        if (!/[A-Z]/.test(value)) {
          throw new Error('Password must have at least one uppercase letter!');
        }
      },
      containsLowercase(value) {
        if (!/[a-z]/.test(value)) {
          throw new Error('Password must have at least one lowercase letter!');
        }
      },
      containsNumber(value) {
        if (!/\d/.test(value)) {
          throw new Error('Password must have at least one number!');
        }
      },
    },
  },
  role: {
    type: DataTypes.ENUM('USER', 'ADMIN'),
    defaultValue: 'USER',
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
});

/**
 * USER HOOKS
 */
User.beforeValidate((user) => {
  const MIN_PASSWORD_LEN = 8;
  const pw = user.passwordHash;
  if (pw && pw.length < MIN_PASSWORD_LEN) {
    const err = new Error();
    err.message = `Password should be minimum ${MIN_PASSWORD_LEN} characters`;
    throw err;
  }
});

User.beforeCreate(async (user) => {
  user.passwordHash = await bcrypt.hash(
    user.passwordHash,
    parseInt(SALT_ROUNDS)
  );
});

// User.beforeUpdate(async(user) => {
//     if(user.passwordHash) user.passwordHash = await bcrypt.hash(user.passwordHash, parseInt(SALT_ROUNDS))
// })

User.authenticate = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      const err = new Error('User not found');
      err.status = 404;
      throw err;
    }

    if (
      user &&
      user.passwordHash &&
      (await bcrypt.compare(password, user.passwordHash))
    ) {
      return jwt.sign(
        {
          id: user.id,
          email: user.email,
          role: user.role,
        },
        SECRET
      );
    } else {
      const error = new Error('Incorrect username or password');
      error.status = 401;
      throw error;
    }
  } catch (err) {
    console.error({ 'Authentication error': err.message });
    throw err;
  }
};

User.verifyByToken = async (token) => {
  try {
    const { id } = jwt.verify(token, SECRET);
    const user = await User.findByPk(id, {
      attributes: { exclude: ['firstName', 'lastName', 'passwordHash'] },
    });

    if (!user) {
      const err = new Error('Bad credential/mal;formed token');
      err.status = 401;
      throw err;
    }

    return user;
  } catch (e) {
    console.error('Error verifying token', e.message);
    throw e;
  }
};

module.exports = User;
