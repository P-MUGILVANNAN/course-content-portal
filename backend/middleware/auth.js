const jwt = require('jsonwebtoken');
const Trainer = require('../models/TrainerSchema');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET_KEY;

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    const decoded = jwt.verify(token, JWT_SECRET);
    const trainer = await Trainer.findById(decoded.id);
    if (!trainer) {
      return res.status(401).json({ message: 'Trainer not found' });
    }

    req.trainer = trainer;  // full document attached here
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};
