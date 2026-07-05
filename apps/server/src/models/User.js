const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { USER_ROLES, FITNESS_GOALS } = require('../utils/constants');

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, select: false },
    googleId: { type: String, sparse: true },
    name: { type: String, required: true, trim: true },
    avatar: { type: String },
    role: { type: String, enum: Object.values(USER_ROLES), default: USER_ROLES.FITNESS_USER },
    isOnboarded: { type: Boolean, default: false },
    profile: {
      age: Number,
      gender: { type: String, enum: ['male', 'female', 'other', 'prefer_not_to_say'] },
      height: Number,
      weight: Number,
      activityLevel: { type: String, enum: ['sedentary', 'light', 'moderate', 'active', 'very_active'] },
      fitnessGoal: { type: String, enum: FITNESS_GOALS },
      dietaryPreferences: [String],
      budget: { type: String, enum: ['low', 'medium', 'high'] },
      region: String,
      injuries: [String],
      equipment: [String],
    },
    preferences: {
      darkMode: { type: Boolean, default: true },
      notifications: { type: Boolean, default: true },
      units: { type: String, enum: ['metric', 'imperial'], default: 'metric' },
    },
    streaks: {
      workout: { type: Number, default: 0 },
      nutrition: { type: Number, default: 0 },
      water: { type: Number, default: 0 },
      meditation: { type: Number, default: 0 },
    },
    connectedWearables: [{
      provider: { type: String, enum: ['fitbit', 'garmin', 'apple_health', 'google_fit', 'samsung'] },
      accessToken: String,
      refreshToken: String,
      connectedAt: Date,
    }],
    trainerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    clients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    refreshToken: { type: String, select: false },
    isActive: { type: Boolean, default: true },
    lastLogin: Date,
  },
  { timestamps: true }
);

userSchema.pre('save', async function hashPassword(next) {
  if (!this.isModified('password') || !this.password) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function comparePassword(candidate) {
  if (!this.password) return false;
  return bcrypt.compare(candidate, this.password);
};

userSchema.methods.toPublicJSON = function toPublicJSON() {
  const obj = this.toObject();
  delete obj.password;
  delete obj.refreshToken;
  delete obj.connectedWearables;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
