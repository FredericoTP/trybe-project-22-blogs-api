const {
  emailSchema,
  newUserSchema,
  idSchema,
  categoryNameSchema, 
} = require('./schemas');

const BAD_REQUEST = 'BAD_REQUEST';

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);

  if (error) return { type: 'INVALID_VALUE', message: '"email" must be valid' };

  return { type: null, message: '' };
};

const validateNewUser = (displayName, email, password) => {
  const { error } = newUserSchema.validate({ displayName, email, password });

  if (error) return { type: BAD_REQUEST, message: error.message };

  return { type: null, message: '' }; 
};

const validateId = (id) => {
  const { error } = idSchema.validate(id);

  if (error) return { type: BAD_REQUEST, message: error.message };

  return { type: null, message: '' }; 
};

const validateCategoryName = (name) => {
  const { error } = categoryNameSchema.validate(name);

  if (error) return { type: BAD_REQUEST, message: error.message };

  return { type: null, message: '' }; 
};

module.exports = {
  validateEmail,
  validateNewUser,
  validateId,
  validateCategoryName,
};