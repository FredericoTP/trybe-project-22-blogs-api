const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../models');
const schema = require('./validations/validationsInputValues');

const { Op } = Sequelize;

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

const updatePost = async (postId, body, userId) => {
  const post = await getById(postId);
  if (post.message.userId !== userId) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }

  const { title, content } = body;

  await BlogPost.update({ title, content }, { where: { id: postId } });

  const postUpdated = await getById(postId);

  return { type: null, message: postUpdated.message };
};

const removePost = async (postId, userId) => {
  const post = await getById(postId);

  if (post.type) return { type: 'POST_NOT_FOUND', message: 'Post does not exist' };
  if (post.message.userId !== userId) {
    return { type: 'UNAUTHORIZED', message: 'Unauthorized user' };
  }

  await BlogPost.destroy({ where: { id: postId } });

  return { type: null, message: '' };
};

const searchPost = async (search) => {
  const posts = await BlogPost.findAll({
    where: {
      [Op.or]: {
        title: { [Op.like]: `%${search}%` },
        content: { [Op.like]: `%${search}%` },
      },
    },
    include: [
      { model: User,
        as: 'user',
        attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return { type: null, message: posts };
};

module.exports = {
  getAllPosts,
  getById,
  updatePost,
  removePost,
  searchPost,
};