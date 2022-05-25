const validator = require('validator');

const { Joi } = require('celebrate');

const { invalidLink } = require('../utils/constants');

// Validation for links:

module.exports.checkedLink = Joi.string()
  .required()
  .custom((value, helpers) => {
    if (validator.isURL(value)) return value;
    return helpers.message(invalidLink);
  });
