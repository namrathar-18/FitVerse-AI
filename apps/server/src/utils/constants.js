const USER_ROLES = {
  FITNESS_USER: 'fitness_user',
  PERSONAL_TRAINER: 'personal_trainer',
  NUTRITIONIST: 'nutritionist',
  GYM_OWNER: 'gym_owner',
  HEALTHCARE_PRO: 'healthcare_professional',
  ADMIN: 'admin',
};

const FITNESS_GOALS = [
  'weight_loss',
  'weight_gain',
  'muscle_building',
  'body_recomposition',
  'general_fitness',
  'marathon_training',
  'powerlifting',
  'sports_performance',
  'home_workout',
  'yoga',
  'mobility_flexibility',
  'rehabilitation',
  'healthy_lifestyle',
];

const CHALLENGE_TYPES = [
  'fat_loss_30',
  'pushup_100',
  'marathon_prep',
  'summer_transformation',
  'custom',
];

module.exports = { USER_ROLES, FITNESS_GOALS, CHALLENGE_TYPES };
