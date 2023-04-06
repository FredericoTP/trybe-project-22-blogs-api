const { validateToken } = require('../utils/auth');

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
  
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    const infoToken = validateToken(authorization);
    req.user = infoToken;
    
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
