const Trainer = require('../models/TrainerSchema');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const cloudinary = require('../util/cloudinary'); // import cloudinary

// JWT secret key (use env variable in production)
const JWT_SECRET = process.env.JWT_SECRET_KEY;

// Generate JWT token
const generateToken = (trainer) => {
  return jwt.sign({ id: trainer._id, role: trainer.role }, JWT_SECRET, {
    expiresIn: '7d'
  });
};

// 1. Trainer Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check existing trainer
    const existing = await Trainer.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const trainer = new Trainer({ name, email, password });
    await trainer.save();

    const token = generateToken(trainer);
    res.status(201).json({
      message: 'Signup successful',
      token,
      trainer: {
        id: trainer._id,
        name: trainer.name,
        email: trainer.email,
        role: trainer.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

// 2. Trainer Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const trainer = await Trainer.findOne({ email });
    if (!trainer) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await trainer.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(trainer);
    res.json({
      message: 'Login successful',
      token,
      trainer: {
        id: trainer._id,
        name: trainer.name,
        email: trainer.email,
        role: trainer.role
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error during login' });
  }
};

// 3. Get Trainer Profile (after auth middleware)
exports.getProfile = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.trainer.id).select('-password');
    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.json({ trainer });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching profile' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const {
      phone,
      specialization,
      experience,
      bio,
      certifications
    } = req.body;

    let profileImageUrl = undefined;

    // Check if file uploaded (via multipart/form-data)
    if (req.file) {
      const result = await cloudinary.uploader.unsigned_upload(
        req.file.path,
        'trainer_preset', // your preset name
        {
          folder: 'trainer_profiles'
        }
      );

      profileImageUrl = result.secure_url;
    }

    const updates = {
      phone,
      specialization,
      experience,
      bio,
      certifications,
    };

    if (profileImageUrl) {
      updates.profileImage = profileImageUrl;
    }

    // Remove undefined fields
    Object.keys(updates).forEach(key => {
      if (updates[key] === undefined) {
        delete updates[key];
      }
    });

    const trainer = await Trainer.findByIdAndUpdate(
      req.trainer.id,
      { $set: updates },
      { new: true, runValidators: true, select: '-password' }
    );

    if (!trainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.json({
      message: 'Profile updated successfully',
      trainer
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating profile' });
  }
};

// 4. Get All Trainers (Admin or Authenticated Access)
exports.getAllProfiles = async (req, res) => {
  try {
    const trainers = await Trainer.find().select('-password');

    res.status(200).json({
      message: 'All trainers fetched successfully',
      count: trainers.length,
      trainers
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching trainers' });
  }
};

// 5. Delete Trainer (admin access or own account deletion)
exports.deleteTrainer = async (req, res) => {
  try {
    const trainerId = req.params.id;

    const deletedTrainer = await Trainer.findByIdAndDelete(trainerId);

    if (!deletedTrainer) {
      return res.status(404).json({ message: 'Trainer not found' });
    }

    res.status(200).json({
      message: 'Trainer deleted successfully',
      trainer: {
        id: deletedTrainer._id,
        name: deletedTrainer.name,
        email: deletedTrainer.email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting trainer' });
  }
};
