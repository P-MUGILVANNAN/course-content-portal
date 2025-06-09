const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const trainerSchema = new mongoose.Schema({
  // Existing fields
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'trainer'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  // New profile fields (all optional)
  phone: {
    type: String,
    default: ''
  },
  specialization: {
    type: String,
    default: ''
  },
  experience: {
    type: String,
    default: ''
  },
  bio: {
    type: String,
    default: ''
  },
  certifications: {
    type: [String],
    default: []
  },
  profileImage: {
    type: String,
    default: 'https://randomuser.me/api/portraits/men/32.jpg' // Default image
  }
});

// Keep your existing pre-save hook and methods
trainerSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

trainerSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('Trainer', trainerSchema);