const mongoose = require('mongoose');

const workoutLogSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    workoutPlanId: { type: mongoose.Schema.Types.ObjectId, ref: 'WorkoutPlan' },
    title: String,
    exercises: [{
      name: String,
      sets: [{ reps: Number, weight: Number, duration: Number }],
      formScore: Number,
      notes: String,
    }],
    duration: Number,
    caloriesBurned: Number,
    avgHeartRate: Number,
    maxHeartRate: Number,
    perceivedExertion: { type: Number, min: 1, max: 10 },
    mood: { type: String, enum: ['great', 'good', 'okay', 'tired', 'exhausted'] },
    notes: String,
    completedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('WorkoutLog', workoutLogSchema);
