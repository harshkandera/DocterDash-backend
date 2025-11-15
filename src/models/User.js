
const mongoose = require('mongoose');

// 1. USER SCHEMA
const UserSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: true 
  },

  email: { 
    type: String, 
    unique: true, 
    required: true,
    lowercase: true,
    trim: true
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  },

  phoneNumber: {
    type: String,
    required: true,
    unique: true
  },

  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },

  dateOfBirth: {
    type: Date,
    required: true
  },

  address: {
    type: String,
    required: true
  },

}, { timestamps: true });

// Indexes
UserSchema.index({ email: 1 });
UserSchema.index({ phoneNumber: 1 });

const User = mongoose.model('User', UserSchema);
