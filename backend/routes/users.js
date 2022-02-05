const usersRouter = require('express').Router();

const { celebrate, Joi } = require('celebrate');

const { findCurrentUser } = require('../controllers/users');

usersRouter.get(
  '/users/me',
  celebrate({
    body: Joi.object().keys({
      user: Joi.object().keys({
        _id: Joi.string().hex().required(),
      }).unknown(true),
    }).unknown(true),
  }),
  findCurrentUser,
);

module.exports = usersRouter;
