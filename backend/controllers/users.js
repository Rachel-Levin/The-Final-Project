const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/users');

const next = require('../middlewares/errorHandler');

const NotFoundError = require('../errors/NotFoundError');

const ValidationError = require('../errors/ValidationError');

const UserExistsError = require('../errors/UserExistsError');

const UnauthorizedError = require('../errors/UnauthorizedError');

const {
  incorrectPassOrEmail,
  userExists,
  userNotFound,
} = require('../utils/constants');

const findCurrentUser = (req, res) => {
  User.findById(req.user._id)
    .orFail(new NotFoundError(userNotFound))
    .then((user) => res.send(user.toJSON()))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new ValidationError('idIsIncorrect'), req, res);
      }
      if (err.name === 'NotFoundError') {
        next(new NotFoundError(userNotFound), req, res);
      } else {
        next(err, req, res);
      }
    });
};

const createUser = (req, res) => {
  // const user_email  =req.body.email;
  // User.findOne({user_email})
  //   .then((user) => {
  //     if(user) {
  //       next(new UserExistsError(userExists), req, res);
  //     }
  //   }
  //   );
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then(() => res.status(201).send({ message: 'user created successfully' }))
    .catch((err) => {
      // res.status(403).send(err);
      if (err.code === 11000) {
        next(new UserExistsError(userExists), req, res);
      } else if (err.name === 'NotFoundError') {
        next(new NotFoundError(userNotFound), req, res);
      } else {
        next(err, req, res);
      }
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        next(new UnauthorizedError(incorrectPassOrEmail), req, res);
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return next(new UnauthorizedError(incorrectPassOrEmail), req, res);
          }
          const { NODE_ENV, JWT_SECRET } = process.env;
          const token = jwt.sign({ _id: user._id }, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret', { expiresIn: '7d' });
          return res.send({ token });
        })
        .catch((err) => {
          if (err.name === 'Error') {
            next(new UnauthorizedError(incorrectPassOrEmail), req, res);
          } else {
            next(err, req, res);
          }
        });
    });
};

module.exports = {
  findCurrentUser,
  createUser,
  login,
};
