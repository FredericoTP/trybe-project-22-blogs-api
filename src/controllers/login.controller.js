const { loginService } = require('../services');
const errorMap = require('../utils/errorMap');

const singIn = async (req, res) => {
  const { email, password } = req.body;
  const { type, message } = await loginService.getByEmail(email, password);

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(200).json(message);
};

module.exports = {
  singIn,
};