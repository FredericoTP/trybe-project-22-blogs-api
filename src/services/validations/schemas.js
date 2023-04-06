const Joi = require('joi');

const emailSchema = Joi.string().email().required();

module.exports = {
  emailSchema,
};