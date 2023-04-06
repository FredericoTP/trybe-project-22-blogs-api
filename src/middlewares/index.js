const validateLoginFields = require('./validateLoginFields');
const validateToken = require('./auth');
const validateNewCategory = require('./validateNewCategory');

module.exports = {
  validateLoginFields,
  validateToken,
  validateNewCategory,
};