const mongoose = require('mongoose');

const workoutPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: String,
    type: { type: String, enum: ['daily', 'weekly', 'monthly', 'custom'], default: 'daily' },
    goal: String,
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
    exercises: [{
      exerciseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Exercise' },
      name: String,
      sets: Number,
      reps: Number,
      duration: Number,
      restSeconds: Number,
      weight: Number,
      notes: String,
    }],
    schedule: {
      days: [String],
      durationWeeks: Number,
    },
    aiGenerated: { type: Boolean, default: false },
    adaptiveFactors: {
      sleepQuality: Number,
      fatigueLevel: Number,
      recoveryScore: Number,
    },
    isActive: { type: Boolean, default: true },
    assignedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('WorkoutPlan', workoutPlanSchema);
