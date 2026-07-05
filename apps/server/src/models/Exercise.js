const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, unique: true },
    category: { type: String, enum: ['strength', 'cardio', 'flexibility', 'balance', 'sports', 'yoga'] },
    muscleGroups: [String],
    equipment: [String],
    difficulty: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
    instructions: [String],
    videoUrl: String,
    imageUrl: String,
    caloriesPerMinute: Number,
    formTips: [String],
    isCustom: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Exercise', exerciseSchema);
