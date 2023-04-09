const validateLoginFields = require('./validateLoginFields');
const validateToken = require('./auth');
const validateNewCategory = require('./validateNewCategory');
const validateUpdatePost = require('./validateUpdatePost');
const validateNewPost = require('./validateNewPost');

module.exports = {
  validateLoginFields,
  validateToken,
  validateNewCategory,
  validateUpdatePost,
  validateNewPost,
};