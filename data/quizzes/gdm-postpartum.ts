import { Quiz } from '@/types/quiz';

export const gdmPostpartum: Quiz = {
  id: 'gdm-postpartum',
  title: 'GDM Postpartum Care',
  description: 'Essential postpartum management and follow-up after GDM',
  category: 'Follow-up',
  difficulty: 'easy',
  estimatedTime: 5,
  questions: [
    {
      id: 'q1',
      question: 'When should postpartum diabetes screening occur after GDM?',
      options: [
        'Within 1 week',
        'At 2 weeks',
        'At 6-12 weeks',
        'At 6 months'
      ],
      correctAnswer: 2,
      explanation: 'All women with GDM should have a 75g 2-hour OGTT at 6-12 weeks postpartum to screen for persistent diabetes or prediabetes. This timing allows resolution of pregnancy-related metabolic changes.',
      category: 'Screening',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Is breastfeeding recommended for women who had GDM?',
      options: [
        'No, it is contraindicated',
        'Yes, it may reduce future diabetes risk',
        'Only if not on insulin',
        'Only for 6 weeks'
      ],
      correctAnswer: 1,
      explanation: 'Breastfeeding is strongly encouraged as it may reduce the mother\'s risk of developing Type 2 diabetes later, promotes maternal weight loss, and benefits the infant. It also improves infant metabolic outcomes.',
      category: 'Lifestyle',
      difficulty: 'easy'
    },
    {
      id: 'q3',
      question: 'How often should women with a history of GDM be screened for diabetes?',
      options: [
        'Once at 6 weeks, then no further screening',
        'Every 6 months',
        'Every 1-3 years lifelong',
        'Only if symptoms develop'
      ],
      correctAnswer: 2,
      explanation: 'Women with previous GDM should have lifelong screening for diabetes every 1-3 years, as they have a 50-70% lifetime risk of developing Type 2 diabetes. Earlier or more frequent screening may be needed with risk factors.',
      category: 'Long-term Follow-up',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'What is the most effective way to reduce the risk of developing Type 2 diabetes after GDM?',
      options: [
        'Medication only',
        'Weight loss through diet and exercise',
        'Avoiding future pregnancies',
        'Regular vitamin supplementation'
      ],
      correctAnswer: 1,
      explanation: 'Lifestyle modification with 7% weight loss through diet and regular physical activity can reduce the risk of Type 2 diabetes by 50-60%. This is more effective than metformin alone and should be first-line prevention.',
      category: 'Prevention',
      difficulty: 'easy'
    },
    {
      id: 'q5',
      question: 'When can women with previous GDM safely use hormonal contraception?',
      options: [
        'Never, it is contraindicated',
        'After diabetes is ruled out postpartum',
        'Only progesterone-only methods',
        'Only after 6 months'
      ],
      correctAnswer: 1,
      explanation: 'Once diabetes is ruled out at the postpartum screening, all forms of contraception can be safely used. Women should be counseled on contraception to allow optimal interpregnancy interval and preconception care for future pregnancies.',
      category: 'Contraception',
      difficulty: 'medium'
    }
  ]
};
