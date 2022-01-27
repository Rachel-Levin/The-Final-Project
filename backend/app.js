const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv').config();

const { errors, celebrate, Joi } = require('celebrate');

const usersRouter = require('./routes/users');

const articlesRouter = require('./routes/articles');

const handleErrors = require('./middlewares/errorHandler');

const NotFoundError = require('./errors/NotFoundError');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const { createUser, login } = require('./controllers/users');

const auth = require('./middlewares/auth');

const app = express();

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/finalprojectdb');

// app.use((req, res, next) => {
//   req.user = {
//     _id: '61ee9e6a86429e1dd68099ee',
//   };

//   next();
// });

app.use(cors());
app.options('*', cors());
// request logger
app.use(requestLogger);
// error logger
app.use(errorLogger);

app.use(bodyParser.json());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

app.post('/api/signup',
celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}),
createUser);

app.post('/api/signin',
celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
}),
login);

app.use('/', auth, articlesRouter);

app.use('/', auth, usersRouter);

app.get('*', () => {
  throw new NotFoundError('OOPS! page not found');
});

// celebrate error handler
app.use(errors());
// centralized handler
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
