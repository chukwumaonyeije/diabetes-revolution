import { Quiz } from '@/types/quiz';

export const gdmInsulin: Quiz = {
  id: 'gdm-insulin',
  title: 'GDM Insulin Therapy',
  description: 'Understanding insulin treatment for gestational diabetes',
  category: 'Treatment',
  difficulty: 'medium',
  estimatedTime: 7,
  questions: [
    {
      id: 'q1',
      question: 'When is insulin therapy typically initiated in GDM?',
      options: [
        'Immediately at diagnosis',
        'When diet and exercise fail to achieve glucose targets',
        'Only in the third trimester',
        'Insulin is never used in GDM'
      ],
      correctAnswer: 1,
      explanation: 'Insulin is initiated when medical nutrition therapy and exercise do not achieve target glucose levels, typically after 1-2 weeks of attempting lifestyle modifications. About 15-30% of GDM patients require insulin.',
      category: 'Indications',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Which type of insulin is preferred for GDM during pregnancy?',
      options: [
        'Long-acting insulin analogs only',
        'Regular human insulin only',
        'Human insulin (NPH, regular) or rapid-acting analogs',
        'Oral insulin medications'
      ],
      correctAnswer: 2,
      explanation: 'Human insulin (NPH, regular) and rapid-acting analogs (lispro, aspart) are preferred as they do not cross the placenta. They have extensive safety data in pregnancy and effectively control glucose.',
      category: 'Insulin Types',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'What is the most common insulin regimen for GDM?',
      options: [
        'Basal insulin only',
        'Prandial (mealtime) insulin only',
        'Basal-bolus regimen',
        'Pre-mixed insulin only'
      ],
      correctAnswer: 2,
      explanation: 'A basal-bolus regimen is most common, using long-acting insulin (NPH or detemir) for basal coverage and rapid-acting insulin before meals. This mimics normal physiologic insulin secretion and provides flexibility.',
      category: 'Regimens',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'Which meal typically requires the highest insulin dose in GDM?',
      options: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'All meals require equal doses'
      ],
      correctAnswer: 0,
      explanation: 'Breakfast often requires the highest insulin-to-carbohydrate ratio due to elevated morning cortisol levels (dawn phenomenon) that increase insulin resistance. Some women may need twice as much insulin at breakfast.',
      category: 'Dosing',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'What should be done with insulin doses after delivery?',
      options: [
        'Continue the same doses',
        'Increase doses gradually',
        'Discontinue insulin immediately',
        'Switch to oral medications'
      ],
      correctAnswer: 2,
      explanation: 'Insulin should be discontinued immediately after delivery as placental hormones causing insulin resistance are rapidly cleared. Blood glucose typically returns to normal, though postpartum glucose testing is needed to rule out persistent diabetes.',
      category: 'Postpartum',
      difficulty: 'easy'
    }
  ]
};
