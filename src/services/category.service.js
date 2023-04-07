const { Category } = require('../models');
const schema = require('./validations/validationsInputValues');

const getByName = async (name) => {
  const categoryInfo = await Category.findOne({ where: { name } });

  if (!categoryInfo) return { type: 'CATEGORY_NOT_FOUND', message: 'Category does not exist' };

  return { type: null, message: categoryInfo.dataValues };
};

const createCategory = async (name) => {
  const error = schema.validateCategoryName(name);
  if (error.type) return error;

  const checkUser = await getByName(name);
  if (!checkUser.type) return { type: 'CONFLICT', message: 'Category already registered' };

  await Category.create({ name });

  const newCategory = await getByName(name);

  return { type: null, message: newCategory.message };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return { type: null, message: categories };
};

module.exports = {
  createCategory,
  getAllCategories,
};