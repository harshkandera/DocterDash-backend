const mongoose = require('mongoose');


const DoctorSchema = new mongoose.Schema({

    title: {
      type: String,
      enum: ['Dr.', 'Prof.', 'MD', 'MBBS'],
      default: 'Dr.'
    },
  
    specialization: [{
      type: String,
      required: true
    }],
  
    qualifications: [{
      degree: { type: String, required: true },
      institution: { type: String, required: true },
      year: { type: Number, required: true }
    }],
  
    licenseNumber: {
      type: String,
      required: true,
      unique: true
    },
  
    experience: {
      type: Number,
      required: true,
      min: 0
    },
  
    about: {
      type: String,
      maxLength: 1000
    },
  
    languages: [{
      type: String
    }],
  
    consultationFee: {
      type: Number,
      required: true,
      min: 0
    },
  
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
  
    totalReviews: {
      type: Number,
      default: 0
    },

    isAcceptingPatients: {
      type: Boolean,
      default: False
    },

  }, { timestamps: true });
  
  // Indexes
  DoctorSchema.index({ userId: 1 });
  DoctorSchema.index({ specialization: 1 });
  DoctorSchema.index({ rating: -1 });
  DoctorSchema.index({ consultationFee: 1 });
  
  const Doctor = mongoose.model('Doctor', DoctorSchema);
  