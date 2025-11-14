import { Quiz } from '@/types/quiz';

export const gdmMaternalComplications: Quiz = {
  id: 'gdm-maternal-complications',
  title: 'GDM Maternal Complications',
  description: 'Understanding risks and complications for mothers with GDM',
  category: 'Complications',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'What is the most common maternal complication associated with GDM?',
      options: [
        'Preeclampsia',
        'Cesarean delivery',
        'Diabetic ketoacidosis',
        'Retinopathy'
      ],
      correctAnswer: 1,
      explanation: 'Cesarean delivery is the most common maternal complication, with rates 20-50% higher in GDM compared to non-diabetic pregnancies, often due to fetal macrosomia or failed induction.',
      category: 'Obstetric Outcomes',
      difficulty: 'medium'
    },
    {
      id: 'q2',
      question: 'By how much does GDM increase the risk of developing preeclampsia?',
      options: [
        'No increased risk',
        '1.5-2 times higher',
        '2-4 times higher',
        '10 times higher'
      ],
      correctAnswer: 2,
      explanation: 'Women with GDM have a 2-4 fold increased risk of developing preeclampsia. The risk is higher with poor glycemic control and coexisting obesity.',
      category: 'Hypertensive Disorders',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'What is the risk of developing Type 2 diabetes within 5-10 years after GDM?',
      options: [
        '5-10%',
        '15-25%',
        '35-60%',
        '75-90%'
      ],
      correctAnswer: 2,
      explanation: 'Approximately 35-60% of women with GDM will develop Type 2 diabetes within 5-10 years postpartum. The risk increases with obesity, need for insulin during pregnancy, and family history.',
      category: 'Long-term Risks',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'Which maternal complication is NOT directly associated with GDM?',
      options: [
        'Polyhydramnios',
        'Postpartum hemorrhage',
        'Ectopic pregnancy',
        'Shoulder dystocia'
      ],
      correctAnswer: 2,
      explanation: 'Ectopic pregnancy is not associated with GDM. However, GDM increases risks of polyhydramnios (excess amniotic fluid), postpartum hemorrhage (due to uterine overdistension), and shoulder dystocia (from fetal macrosomia).',
      category: 'Associated Complications',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'What is the recommended postpartum screening for diabetes after GDM?',
      options: [
        'No screening needed',
        'Fasting glucose at 1 week postpartum',
        '75g 2-hour OGTT at 6-12 weeks postpartum',
        'A1C only at 6 months'
      ],
      correctAnswer: 2,
      explanation: 'A 75g 2-hour oral glucose tolerance test should be performed at 6-12 weeks postpartum to screen for persistent diabetes or prediabetes. Lifelong screening every 1-3 years is then recommended.',
      category: 'Postpartum Care',
      difficulty: 'medium'
    }
  ]
};
