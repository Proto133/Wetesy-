const jwt = require('jsonwebtoken');
const { createError } = require('../utils/error');

exports.authenticate = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw createError(401, 'Authentication required');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    next(createError(401, 'Invalid or expired token'));
  }
};

exports.authorize = (roles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.userId);
      if (!roles.includes(user.role)) {
        throw createError(403, 'Insufficient permissions');
      }
      next();
    } catch (error) {
      next(error);
    }
  };
};