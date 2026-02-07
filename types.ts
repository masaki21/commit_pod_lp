
export type Gender = 'male' | 'female';
export type ActivityLevel = 'low' | 'normal' | 'high';
export type Goal = 'bulk' | 'recomp' | 'cut';

export interface UserProfile {
  height: number;
  weight: number;
  age: number;
  gender: Gender;
  activityLevel: ActivityLevel;
  goal: Goal;
}

export interface CalculatedResults {
  bmr: number;
  tdee: number;
  targetCalories: number;
  p: number;
  f: number;
  c: number;
}
