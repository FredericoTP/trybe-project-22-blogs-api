const { blogPostService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllPosts = async (_req, res) => {
  const { type, message } = await blogPostService.getAllPosts();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  getAllPosts,
};