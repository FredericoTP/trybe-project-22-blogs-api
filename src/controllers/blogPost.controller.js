const { blogPostService } = require('../services');
const errorMap = require('../utils/errorMap');

const getAllPosts = async (_req, res) => {
  const { type, message } = await blogPostService.getAllPosts();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await blogPostService.getById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const info = req.body;
  const { user } = req;

  const { type, message } = await blogPostService.updatePost(id, info, user.id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  
  return res.status(200).json(message);
};

const removePost = async (req, res) => {
  const { id } = req.params;
  const { user } = req;

  const { type, message } = await blogPostService.removePost(id, user.id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(204).json(message);
};

module.exports = {
  getAllPosts,
  getById,
  updatePost,
  removePost,
};