const router = require('express').Router();

const { celebrate, Joi } = require('celebrate');

const NotFoundError = require('../errors/NotFoundError');

const usersRouter = require('./users');

const articlesRouter = require('./articles');

const { createUser, login } = require('../controllers/users');

const auth = require('../middlewares/auth');

router.post(
  '/api/signup',
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2),
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  createUser,
);

router.post(
  '/api/signin',
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  login,
);

router.use('/', auth, articlesRouter);

router.use('/', auth, usersRouter);

router.get('*', () => {
  throw new NotFoundError('OOPS! page not found');
});

module.exports = router;
