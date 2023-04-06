const Joi = require('joi');

const idSchema = Joi.number().integer().min(1).required();

const nameSchema = Joi.string().min(8).required();

const emailSchema = Joi.string().email().required();

const passwordSchema = Joi.string().min(6).required();

const newUserSchema = Joi.object({
  displayName: nameSchema,
  email: emailSchema,
  password: passwordSchema,
});

const categoryNameSchema = Joi.string().min(1).required();

module.exports = {
  emailSchema,
  newUserSchema,
  idSchema,
  categoryNameSchema,
};