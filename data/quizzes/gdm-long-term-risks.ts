import { Quiz } from '@/types/quiz';

export const gdmLongTermRisks: Quiz = {
  id: 'gdm-long-term-risks',
  title: 'GDM Long-term Risks',
  description: 'Understanding lifelong health implications after GDM',
  category: 'Prevention',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'What is the lifetime risk of developing Type 2 diabetes after GDM?',
      options: [
        '10-20%',
        '30-40%',
        '50-70%',
        '80-90%'
      ],
      correctAnswer: 2,
      explanation: 'Women with a history of GDM have a 50-70% lifetime risk of developing Type 2 diabetes, with most cases occurring within 5-10 years postpartum. This makes GDM an important marker of future diabetes risk.',
      category: 'Diabetes Risk',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Besides diabetes, what cardiovascular risk is increased after GDM?',
      options: [
        'No increased cardiovascular risk',
        'Twice the risk of future cardiovascular disease',
        'Only hypertension risk',
        'Only stroke risk'
      ],
      correctAnswer: 1,
      explanation: 'Women with previous GDM have approximately twice the risk of future cardiovascular disease, including coronary artery disease and stroke, independent of whether they develop diabetes. This highlights the need for cardiovascular risk reduction.',
      category: 'Cardiovascular Risk',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'How does subsequent pregnancy affect diabetes risk after GDM?',
      options: [
        'Pregnancy protects against diabetes',
        'Pregnancy has no effect on diabetes risk',
        'Additional pregnancies increase diabetes risk',
        'Only if GDM recurs'
      ],
      correctAnswer: 2,
      explanation: 'Each additional pregnancy, especially if complicated by recurrent GDM, further increases the long-term risk of Type 2 diabetes. This emphasizes the importance of lifestyle modification between pregnancies.',
      category: 'Reproductive Health',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'What metabolic syndrome features are common after GDM?',
      options: [
        'Only abdominal obesity',
        'Only dyslipidemia',
        'Central obesity, dyslipidemia, and hypertension',
        'GDM does not affect metabolic syndrome risk'
      ],
      correctAnswer: 2,
      explanation: 'Women with previous GDM have higher rates of metabolic syndrome, characterized by central obesity, dyslipidemia (high triglycerides, low HDL), hypertension, and insulin resistance. This cluster of conditions increases cardiovascular disease risk.',
      category: 'Metabolic Health',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'Can lifestyle intervention reduce the risk of Type 2 diabetes after GDM?',
      options: [
        'No, diabetes is inevitable',
        'Yes, by up to 50-60% with diet and exercise',
        'Only medication can reduce risk',
        'Only if weight loss exceeds 20%'
      ],
      correctAnswer: 1,
      explanation: 'The Diabetes Prevention Program showed that lifestyle intervention (150 minutes/week exercise, 7% weight loss) reduces diabetes risk by 50-60% in women with previous GDM, making prevention through lifestyle modification highly effective.',
      category: 'Prevention Strategies',
      difficulty: 'medium'
    }
  ]
};
