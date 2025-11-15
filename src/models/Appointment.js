const AppointmentSchema = new mongoose.Schema({
    appointmentNumber: {
      type: String,
      required: true,
      unique: true
    },
  
    patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
  
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor',
      required: true
    },
  
    appointmentDate: {
      type: Date,
      required: true
    },
  
    timeSlot: {
      start: { type: String, required: true },
      end: { type: String, required: true }
    },
  
    type: {
      type: String,
      enum: ['in-person', 'video', 'phone'],
      default: 'in-person'
    },
  
    status: {
      type: String,
      enum: ['scheduled', 'confirmed', 'in-progress', 'completed', 'cancelled'],
      default: 'scheduled'
    },
  
    reason: {
      type: String,
      required: true
    },
  
    symptoms: [{
      type: String
    }],
  
    notes: {
      type: String
    },
  
    cancellationReason: {
      type: String
    },
  
    cancelledBy: {
      type: String,
      enum: ['patient', 'doctor', 'admin', null],
      default: null
    },
  
    cancelledAt: {
      type: Date,
      default: null
    },
  
    reminderSent: {
      type: Boolean,
      default: false
    },
  
  
 
  }, { timestamps: true });
  
  // Indexes
  AppointmentSchema.index({ patientId: 1, appointmentDate: -1 });
  AppointmentSchema.index({ doctorId: 1, appointmentDate: 1 });
  AppointmentSchema.index({ status: 1 });
  AppointmentSchema.index({ appointmentNumber: 1 });
  
  const Appointment = mongoose.model('Appointment', AppointmentSchema);
  