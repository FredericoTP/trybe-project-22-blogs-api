module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }

  if (!Array.isArray(categoryIds)) {
    return res.status(400).json({ message: 'categoryIds must be an Array' }); 
  }

  return next();
};