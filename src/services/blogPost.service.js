const { BlogPost, User, Category } = require('../models');
const schema = require('./validations/validationsInputValues');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return { type: null, message: posts };
};

const getById = async (id) => {
  const error = schema.validateId(id);
  if (error.type) return error;

  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  if (!post) return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };

  return { type: null, message: post.dataValues };
};

module.exports = {
  getAllPosts,
  getById,
};