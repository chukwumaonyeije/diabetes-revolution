import { Quiz } from '@/types/quiz';

export const gdmPathophysiology: Quiz = {
  id: 'gdm-pathophysiology',
  title: 'GDM Pathophysiology',
  description: 'Understanding the mechanisms behind gestational diabetes',
  category: 'Science',
  difficulty: 'hard',
  estimatedTime: 7,
  questions: [
    {
      id: 'q1',
      question: 'Which placental hormone is most responsible for insulin resistance in pregnancy?',
      options: [
        'Estrogen',
        'Progesterone',
        'Human placental lactogen (hPL)',
        'Oxytocin'
      ],
      correctAnswer: 2,
      explanation: 'Human placental lactogen (hPL) is the primary diabetogenic hormone in pregnancy. It increases progressively throughout pregnancy and causes insulin resistance by interfering with insulin receptor signaling.',
      category: 'Hormones',
      difficulty: 'hard'
    },
    {
      id: 'q2',
      question: 'By how much does insulin resistance typically increase during pregnancy?',
      options: [
        '10-20%',
        '30-50%',
        '50-70%',
        '100-200%'
      ],
      correctAnswer: 2,
      explanation: 'Insulin resistance increases by approximately 50-70% during normal pregnancy, particularly in the second and third trimesters. Women who develop GDM cannot compensate with adequate insulin secretion.',
      category: 'Metabolic Changes',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'What happens to beta cell function in women who develop GDM?',
      options: [
        'It increases normally',
        'It remains unchanged',
        'It cannot compensate adequately for increased insulin resistance',
        'It completely stops functioning'
      ],
      correctAnswer: 2,
      explanation: 'In GDM, pancreatic beta cells cannot increase insulin secretion sufficiently to overcome pregnancy-induced insulin resistance. This relative insulin deficiency, combined with increased resistance, leads to hyperglycemia.',
      category: 'Pancreatic Function',
      difficulty: 'hard'
    },
    {
      id: 'q4',
      question: 'Which of the following best describes the metabolic state in normal pregnancy?',
      options: [
        'Anabolic in both fasting and fed states',
        'Catabolic in both fasting and fed states',
        'Anabolic when fed, catabolic when fasting ("facilitated anabolism")',
        'No change from non-pregnant state'
      ],
      correctAnswer: 2,
      explanation: 'Normal pregnancy is characterized by "facilitated anabolism" - enhanced anabolism in the fed state (nutrient storage) and accelerated catabolism in the fasted state (rapid mobilization of nutrients for the fetus).',
      category: 'Metabolic Adaptations',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'What is the approximate increase in insulin secretion needed to maintain euglycemia in normal pregnancy?',
      options: [
        '50-100%',
        '100-150%',
        '200-250%',
        '300-400%'
      ],
      correctAnswer: 2,
      explanation: 'To maintain normal glucose levels during pregnancy, insulin secretion must increase by approximately 200-250%. Women who develop GDM cannot achieve this compensatory increase in insulin production.',
      category: 'Insulin Dynamics',
      difficulty: 'hard'
    }
  ]
};
