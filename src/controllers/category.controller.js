const { categoryService } = require('../services');
const errorMap = require('../utils/errorMap');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryService.createCategory(name);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(201).json(message);
};

const getAllCategories = async (_req, res) => {
  const { type, message } = await categoryService.getAllCategories();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  createCategory,
  getAllCategories,
};