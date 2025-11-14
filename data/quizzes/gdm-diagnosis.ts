import { Quiz } from '@/types/quiz';

export const gdmDiagnosis: Quiz = {
  id: 'gdm-diagnosis',
  title: 'GDM Diagnosis & Screening',
  description: 'Learn about diagnostic criteria and screening tests for GDM',
  category: 'Diagnosis',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'Which test is most commonly used to screen for GDM?',
      options: [
        'Fasting blood glucose',
        '1-hour glucose challenge test (GCT)',
        'Hemoglobin A1C',
        'Random blood glucose'
      ],
      correctAnswer: 1,
      explanation: 'The 1-hour glucose challenge test (GCT) with 50g glucose load is the most common initial screening test. A value ≥140 mg/dL (or ≥130 mg/dL in some protocols) is considered positive and requires follow-up with a 3-hour oral glucose tolerance test.',
      category: 'Screening',
      difficulty: 'medium'
    },
    {
      id: 'q2',
      question: 'What is the diagnostic cutoff for the fasting glucose in the 3-hour OGTT according to Carpenter-Coustan criteria?',
      options: [
        '≥85 mg/dL',
        '≥95 mg/dL',
        '≥100 mg/dL',
        '≥126 mg/dL'
      ],
      correctAnswer: 1,
      explanation: 'The Carpenter-Coustan criteria for the 100g 3-hour OGTT uses ≥95 mg/dL for fasting glucose. Two or more values meeting or exceeding the thresholds are required for GDM diagnosis.',
      category: 'Diagnostic Criteria',
      difficulty: 'hard'
    },
    {
      id: 'q3',
      question: 'When should women with risk factors be screened for pre-existing diabetes?',
      options: [
        'Only at 24-28 weeks',
        'At the first prenatal visit',
        'In the third trimester only',
        'Screening is not necessary for high-risk women'
      ],
      correctAnswer: 1,
      explanation: 'Women with significant risk factors (obesity, strong family history, previous GDM) should be screened at their first prenatal visit to detect pre-existing diabetes. If negative, they should be re-screened at 24-28 weeks.',
      category: 'Screening Timing',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'How many abnormal values are needed on the 3-hour OGTT to diagnose GDM?',
      options: [
        'One abnormal value',
        'Two or more abnormal values',
        'Three or more abnormal values',
        'All four values must be abnormal'
      ],
      correctAnswer: 1,
      explanation: 'According to both Carpenter-Coustan and National Diabetes Data Group criteria, two or more abnormal values on the 3-hour OGTT are required for GDM diagnosis. Some protocols accept one abnormal value.',
      category: 'Diagnostic Criteria',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'What is the "one-step" approach for GDM screening?',
      options: [
        'Only performing fasting glucose',
        'Performing a 2-hour 75g OGTT without prior screening',
        'Doing HbA1C testing only',
        'Random glucose testing'
      ],
      correctAnswer: 1,
      explanation: 'The one-step approach involves performing a 2-hour 75g OGTT at 24-28 weeks without a prior screening test. This is recommended by the International Association of Diabetes and Pregnancy Study Groups (IADPSG) and endorsed by ADA.',
      category: 'Screening Approaches',
      difficulty: 'medium'
    }
  ]
};
