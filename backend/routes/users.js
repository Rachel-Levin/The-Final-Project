const usersRouter = require('express').Router();

const { findCurrentUser } = require('../controllers/users');

usersRouter.get(
  '/users/me',
  findCurrentUser,
);

module.exports = usersRouter;