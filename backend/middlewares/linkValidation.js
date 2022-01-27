const validator = require('validator');

// Validation for links:
module.exports.validateUrl = (value, helpers) => {
  if (validator.isURL(value)) {
    return value;
  }
  return helpers.error('string.uri');
};
