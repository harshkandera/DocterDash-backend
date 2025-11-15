const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema(
  {
    // ADD THESE NEW FIELDS
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minLength: 8,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
    },

    // EXISTING FIELDS
    title: {
      type: String,
      enum: ["Dr.", "Prof.", "MD", "MBBS"],
      default: "Dr.",
    },

    apppointments: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Appointment" },
    ],

    specialization: {
      type: String,
      required: true,
      enum: [
        "Cardiologist",
        "Dermatologist",
        "Psychiatrist",
        "Dentist",
        "General Physician",
        "Gyenocologist",
        "Pediatrician",
        "Neurologist",
        "Gastrologist",
        "Orthopaedist",
      ],
    },

    qualifications: [
      {
        degree: { type: String, required: true },
        institution: { type: String, required: true },
        year: { type: Number, min: 1900, max: new Date().getFullYear() },
      },
    ],

    licenseNumber: {
      type: String,
      required: true,
      unique: true,
    },

    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    about: {
      type: String,
      maxLength: 1000,
    },

    languages: [
      {
        type: String,
      },
    ],

    consultationFee: {
      type: Number,
      required: true,
      min: 0,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },

    isAcceptingPatients: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// Indexes
DoctorSchema.index({ userId: 1 });
DoctorSchema.index({ specialization: 1 });
DoctorSchema.index({ rating: -1 });
DoctorSchema.index({ consultationFee: 1 });
DoctorSchema.index({ email: 1 }); // ADD THIS INDEX for faster email lookups
DoctorSchema.index({ licenseNumber: 1 }); // ADD THIS INDEX for faster license lookups

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;