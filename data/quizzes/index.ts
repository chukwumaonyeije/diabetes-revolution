import { Quiz } from '@/types/quiz';
import { gdmBasics } from './gdm-basics';
import { gdmDiagnosis } from './gdm-diagnosis';
import { gdmRiskFactors } from './gdm-risk-factors';
import { gdmPathophysiology } from './gdm-pathophysiology';
import { gdmNutrition } from './gdm-nutrition';
import { gdmCarbCounting } from './gdm-carb-counting';
import { gdmExercise } from './gdm-exercise';
import { gdmMonitoring } from './gdm-monitoring';
import { gdmInsulin } from './gdm-insulin';
import { gdmMedications } from './gdm-medications';
import { gdmTargets } from './gdm-targets';
import { gdmMaternalComplications } from './gdm-maternal-complications';
import { gdmFetalComplications } from './gdm-fetal-complications';
import { gdmLaborDelivery } from './gdm-labor-delivery';
import { gdmPostpartum } from './gdm-postpartum';
import { gdmLongTermRisks } from './gdm-long-term-risks';
import { gdmPrevention } from './gdm-prevention';
import { gdmBreastfeeding } from './gdm-breastfeeding';
import { gdmOutcomes } from './gdm-outcomes';
import { gdmAdvanced } from './gdm-advanced';

// Export all available quizzes
export const quizzes: Quiz[] = [
  gdmBasics,
  gdmDiagnosis,
  gdmRiskFactors,
  gdmPathophysiology,
  gdmNutrition,
  gdmCarbCounting,
  gdmExercise,
  gdmMonitoring,
  gdmInsulin,
  gdmMedications,
  gdmTargets,
  gdmMaternalComplications,
  gdmFetalComplications,
  gdmLaborDelivery,
  gdmPostpartum,
  gdmLongTermRisks,
  gdmPrevention,
  gdmBreastfeeding,
  gdmOutcomes,
  gdmAdvanced,
];

// Helper function to get a quiz by ID
export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find(quiz => quiz.id === id);
}

// Helper function to get all quiz IDs (useful for static generation)
export function getAllQuizIds(): string[] {
  return quizzes.map(quiz => quiz.id);
}
