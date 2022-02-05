const express = require('express');

const cors = require('cors');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

require('dotenv').config();

const { errors } = require('celebrate');

const helmet = require('helmet');

const limiter = require('./middlewares/rateLimiter');

const router = require('./routes/index');

const handleErrors = require('./middlewares/errorHandler');

const { requestLogger, errorLogger } = require('./middlewares/logger');

const app = express();

const { PORT = 3013, DB = 'mongodb://127.0.0.1:27017/finalprojectdb' } = process.env;

mongoose.connect(DB);

app.use(cors());
app.options('*', cors());
// request logger
app.use(requestLogger);
// error logger
app.use(errorLogger);

app.use(bodyParser.json());

app.use(helmet());

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Server will crash now');
  }, 0);
});

app.use(limiter);

app.use(router);
// celebrate error handler
app.use(errors());
// centralized handler
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`App listening at port ${PORT}`);
});
