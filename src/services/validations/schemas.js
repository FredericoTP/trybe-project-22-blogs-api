const Joi = require('joi');

const nameSchema = Joi.string().min(8).required();

const emailSchema = Joi.string().email().required();

const passwordSchema = Joi.string().min(6).required();

const newUserSchema = Joi.object({
  displayName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

module.exports = {
  emailSchema,
  newUserSchema,
};