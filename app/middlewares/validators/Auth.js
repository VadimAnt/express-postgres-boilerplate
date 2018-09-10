const Joi = require('joi');

module.exports = {
  signin: {
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
    }),
  },
  signup: {
    body: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(5).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
    }),
  },
};
