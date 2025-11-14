import { Quiz } from '@/types/quiz';

export const gdmMonitoring: Quiz = {
  id: 'gdm-monitoring',
  title: 'GDM Blood Glucose Monitoring',
  description: 'Learn proper blood glucose testing techniques and targets',
  category: 'Monitoring',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'How many times per day should blood glucose be checked in GDM?',
      options: [
        'Once daily',
        'Twice daily',
        '4 times daily (fasting + 3 postprandial)',
        'Only when feeling symptoms'
      ],
      correctAnswer: 2,
      explanation: 'Standard monitoring includes 4 checks per day: fasting (upon waking) plus 1 or 2 hours after the start of each meal (breakfast, lunch, dinner). This provides comprehensive data for management decisions.',
      category: 'Monitoring Frequency',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'What is the target fasting glucose level for GDM according to ACOG?',
      options: [
        '<80 mg/dL',
        '<95 mg/dL',
        '<110 mg/dL',
        '<126 mg/dL'
      ],
      correctAnswer: 1,
      explanation: 'ACOG recommends a fasting glucose target of <95 mg/dL for GDM management. This target balances maternal glucose control with prevention of fetal complications.',
      category: 'Target Values',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'When should 1-hour postprandial glucose be checked?',
      options: [
        '1 hour from the end of the meal',
        '1 hour from the start of the meal',
        '1 hour before the next meal',
        'Exactly at lunchtime'
      ],
      correctAnswer: 1,
      explanation: 'One-hour postprandial glucose should be checked 1 hour from the start (first bite) of the meal. This captures the peak glucose response to food intake.',
      category: 'Timing',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'What is the 1-hour postprandial glucose target for GDM?',
      options: [
        '<120 mg/dL',
        '<130 mg/dL',
        '<140 mg/dL',
        '<180 mg/dL'
      ],
      correctAnswer: 2,
      explanation: 'The 1-hour postprandial target is <140 mg/dL according to ACOG guidelines. Some protocols use <130 mg/dL. If 2-hour values are used instead, the target is <120 mg/dL.',
      category: 'Target Values',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'Where on the finger is the best place to obtain a blood sample?',
      options: [
        'Center of the fingertip',
        'Sides of the fingertip',
        'Base of the finger',
        'Fingernail area'
      ],
      correctAnswer: 1,
      explanation: 'The sides of the fingertip have fewer nerve endings than the center, making testing less painful while still providing adequate blood flow. Rotate fingers to prevent soreness.',
      category: 'Technique',
      difficulty: 'easy'
    }
  ]
};
