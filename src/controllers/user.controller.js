const { userService } = require('../services');
const errorMap = require('../utils/errorMap');

const createUser = async (req, res) => {
  const user = req.body;

  const { displayName, email, password, image = null } = user;

  const { type, message } = await userService.createUser(displayName, email, password, image);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(201).json(message);
};

const getAllUsers = async (_req, res) => {
  const { type, message } = await userService.getAllUsers();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  return res.status(200).json(message);
};

module.exports = {
  createUser,
  getAllUsers,
};