import { Quiz } from '@/types/quiz';

export const gdmRiskFactors: Quiz = {
  id: 'gdm-risk-factors',
  title: 'GDM Risk Factors',
  description: 'Understanding who is at risk for developing gestational diabetes',
  category: 'Risk Assessment',
  difficulty: 'easy',
  estimatedTime: 5,
  questions: [
    {
      id: 'q1',
      question: 'Which BMI category has the highest risk for GDM?',
      options: [
        'Normal weight (BMI 18.5-24.9)',
        'Overweight (BMI 25-29.9)',
        'Obese (BMI ≥30)',
        'Underweight (BMI <18.5)'
      ],
      correctAnswer: 2,
      explanation: 'Obesity (BMI ≥30) is one of the strongest risk factors for GDM. The risk increases progressively with higher BMI categories, with morbid obesity (BMI ≥40) having the highest risk.',
      category: 'Maternal Factors',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'At what maternal age does the risk of GDM significantly increase?',
      options: [
        'Over 25 years',
        'Over 30 years',
        'Over 35 years',
        'Over 40 years'
      ],
      correctAnswer: 2,
      explanation: 'Maternal age ≥35 years is considered a significant risk factor for GDM. The risk continues to increase with advancing maternal age, particularly over 40 years.',
      category: 'Maternal Factors',
      difficulty: 'easy'
    },
    {
      id: 'q3',
      question: 'Which ethnic group has the LOWEST risk for GDM?',
      options: [
        'Hispanic/Latina',
        'African American',
        'Non-Hispanic White',
        'Asian/Pacific Islander'
      ],
      correctAnswer: 2,
      explanation: 'Non-Hispanic White women have the lowest risk for GDM among major ethnic groups. Hispanic, African American, Native American, and Asian/Pacific Islander women all have significantly higher rates of GDM.',
      category: 'Demographics',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'If a woman had GDM in a previous pregnancy, what is her approximate risk of recurrence?',
      options: [
        '10-20%',
        '30-50%',
        '50-70%',
        '80-90%'
      ],
      correctAnswer: 2,
      explanation: 'Women with previous GDM have a 50-70% risk of recurrence in subsequent pregnancies. This makes previous GDM one of the strongest predictors of GDM in future pregnancies.',
      category: 'Obstetric History',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'Which of the following is NOT typically considered a risk factor for GDM?',
      options: [
        'Polycystic ovary syndrome (PCOS)',
        'Previous macrosomic baby (>9 lbs)',
        'Multiparity (having multiple previous pregnancies)',
        'Family history of diabetes in first-degree relatives'
      ],
      correctAnswer: 2,
      explanation: 'While PCOS, previous macrosomia, and family history are all established risk factors for GDM, multiparity alone is not a strong independent risk factor. However, advanced maternal age and obesity, which often accompany multiparity, are risk factors.',
      category: 'Risk Factors',
      difficulty: 'hard'
    }
  ]
};
