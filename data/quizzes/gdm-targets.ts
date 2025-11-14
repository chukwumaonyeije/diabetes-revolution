import { Quiz } from '@/types/quiz';

export const gdmTargets: Quiz = {
  id: 'gdm-targets',
  title: 'GDM Blood Glucose Targets',
  description: 'Understanding optimal glucose targets and A1C goals in GDM',
  category: 'Monitoring',
  difficulty: 'easy',
  estimatedTime: 5,
  questions: [
    {
      id: 'q1',
      question: 'What is the target 2-hour postprandial glucose for GDM?',
      options: [
        '<100 mg/dL',
        '<110 mg/dL',
        '<120 mg/dL',
        '<140 mg/dL'
      ],
      correctAnswer: 2,
      explanation: 'The 2-hour postprandial target is <120 mg/dL. This is lower than the 1-hour target (<140 mg/dL) because glucose levels peak around 60-90 minutes after eating in pregnancy.',
      category: 'Postprandial Targets',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'What percentage of glucose values should be within target to consider GDM well-controlled?',
      options: [
        '50% or more',
        '70% or more',
        '80% or more',
        '100%'
      ],
      correctAnswer: 2,
      explanation: 'At least 80% of glucose values should be within target ranges for GDM to be considered well-controlled. This allows for occasional excursions while maintaining overall good control.',
      category: 'Control Standards',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'What is the A1C target during pregnancy with GDM?',
      options: [
        '<5.0%',
        '<6.0%',
        '<7.0%',
        '<8.0%'
      ],
      correctAnswer: 1,
      explanation: 'The A1C target during pregnancy is <6.0% if achievable without significant hypoglycemia. However, A1C is less useful in pregnancy due to physiologic changes and is primarily used to assess pre-existing diabetes.',
      category: 'A1C Goals',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'Why are glucose targets stricter in pregnancy than in non-pregnant diabetes?',
      options: [
        'To prevent maternal complications only',
        'To reduce risks of fetal macrosomia and complications',
        'Because pregnant women metabolize glucose faster',
        'Targets are actually the same'
      ],
      correctAnswer: 1,
      explanation: 'Stricter targets in pregnancy aim to reduce risks of fetal complications including macrosomia, neonatal hypoglycemia, birth trauma, and long-term metabolic effects on the child.',
      category: 'Rationale',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'What should prompt adjustment of the treatment plan in GDM?',
      options: [
        'One high value',
        'Multiple values (>20%) above target over 1-2 weeks',
        'Any value above 200 mg/dL',
        'Only if A1C is elevated'
      ],
      correctAnswer: 1,
      explanation: 'Treatment adjustment is typically warranted when more than 20% of glucose values are above target over a 1-2 week period. This suggests inadequate control with current management.',
      category: 'Treatment Decisions',
      difficulty: 'medium'
    }
  ]
};
