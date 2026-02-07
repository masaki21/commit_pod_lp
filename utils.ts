
import { UserProfile, CalculatedResults } from './types';

export const calculateResults = (profile: UserProfile): CalculatedResults => {
  const { height, weight, age, gender, activityLevel, goal } = profile;

  // BMR (Mifflin-St Jeor)
  let bmr = 0;
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // TDEE
  const activityFactors = { low: 1.2, normal: 1.55, high: 1.725 };
  const tdee = bmr * activityFactors[activityLevel];

  // Target Calories
  const goalFactors = { bulk: 1.1, recomp: 1.0, cut: 0.88 };
  const targetCalories = tdee * goalFactors[goal];

  // PFC
  let p = weight * (goal === 'bulk' ? 2.2 : 2.3);
  let f = weight * (goal === 'bulk' ? 0.95 : goal === 'recomp' ? 1.8 : 2.0);
  
  // Ensure minimums
  f = Math.max(f, 60);
  
  const pCal = p * 4;
  const fCal = f * 9;
  let cCal = targetCalories - pCal - fCal;
  let c = cCal / 4;
  
  c = Math.max(c, 50);

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    targetCalories: Math.round(targetCalories),
    p: Math.round(p),
    f: Math.round(f),
    c: Math.round(c),
  };
};
