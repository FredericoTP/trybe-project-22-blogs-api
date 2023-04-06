const { emailSchema } = require('./schemas');

const validateEmail = (email) => {
  const { error } = emailSchema.validate(email);

  if (error) return { type: 'INVALID_VALUE', message: '"email" must be valid' };

  return { type: null, message: '' };
};

module.exports = {
  validateEmail,
};