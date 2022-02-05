const validator = require('validator');

const { Joi } = require('celebrate');

// Validation for links:

module.exports.checkedLink = Joi.string()
  .required()
  .custom((value, helpers) => {
    if (validator.isURL(value)) return value;
    return helpers.message('Invalid link format');
  });
