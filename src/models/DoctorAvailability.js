
const DoctorAvailabilitySchema = new mongoose.Schema({
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true,
      unique: true
    },
  
    weeklySchedule: {
      monday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      },
      tuesday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      },
      wednesday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      },
      thursday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      },
      friday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      },
      saturday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      },
      sunday: {
        isAvailable: { type: Boolean, default: false },
        slots: [{
          start: { type: String, required: true }, // "09:00"
          end: { type: String, required: true },   // "09:30"
          status: { 
            type: String, 
            enum: ['available', 'booked', 'holding', 'cancelled', 'blocked'],
            default: 'available'
          },
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            default: null
          },
          appointmentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Appointment',
            default: null
          },
          bookedAt: {
            type: Date,
            default: null
          },
          holdingExpiresAt: {
            type: Date,
            default: null // For 30-second hold
          }
        }]
      }
    },
  
    slotDuration: {
      type: Number,
      default: 30, 
      min: 15,
      max: 120
    },
  
    advanceBookingDays: {
      type: Number,
      default: 7,
      min: 1,
      max: 90
    },
  
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active'
    }
  }, { timestamps: true });
  
  DoctorAvailabilitySchema.index({ doctorId: 1 });
  DoctorAvailabilitySchema.index({ status: 1 });
  
  const DoctorAvailability = mongoose.model('DoctorAvailability', DoctorAvailabilitySchema);
  