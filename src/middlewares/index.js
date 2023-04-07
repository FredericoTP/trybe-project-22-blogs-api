const validateLoginFields = require('./validateLoginFields');
const validateToken = require('./auth');
const validateNewCategory = require('./validateNewCategory');
const validateUpdatePost = require('./validateUpdatePost');

module.exports = {
  validateLoginFields,
  validateToken,
  validateNewCategory,
  validateUpdatePost,
};