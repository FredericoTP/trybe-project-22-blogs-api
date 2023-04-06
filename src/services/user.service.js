const { User } = require('../models');
const schema = require('./validations/validationsInputValues');
const { generateToken } = require('../utils/auth');

const getByEmail = async (email) => {
  const userInfo = await User.findOne({ where: { email } });

  if (!userInfo) return { type: 'USER_NOT_FOUND', message: 'User not found!' };

  return { type: null, message: userInfo.dataValues };
};

const createUser = async (displayName, email, password, image) => {
  const error = schema.validateNewUser(displayName, email, password);
  if (error.type) return error;

  const checkUser = await getByEmail(email);
  if (!checkUser.type) return { type: 'CONFLICT', message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const token = generateToken({ name: displayName });

  return { type: null, message: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { type: null, message: users };
};

module.exports = {
  createUser,
  getAllUsers,
};