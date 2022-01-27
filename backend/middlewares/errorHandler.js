const ERROR_CODE_SERVER = 500;

const handleErrors = (err, req, res, next) => {
  const { statusCode = ERROR_CODE_SERVER, message } = err;
  if (res) {
    res.status(statusCode)
      .send({
        message: statusCode === ERROR_CODE_SERVER
          ? 'Server error' + err.message
          : message,
      });
    // next();
  }
};

module.exports = handleErrors;
