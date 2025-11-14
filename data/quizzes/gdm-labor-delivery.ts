import { Quiz } from '@/types/quiz';

export const gdmLaborDelivery: Quiz = {
  id: 'gdm-labor-delivery',
  title: 'GDM Labor & Delivery',
  description: 'Management of labor and delivery in women with GDM',
  category: 'Obstetrics',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'What is the recommended timing of delivery for well-controlled GDM?',
      options: [
        '37 weeks',
        '38 weeks',
        '39-40 weeks',
        '41-42 weeks'
      ],
      correctAnswer: 2,
      explanation: 'For well-controlled GDM without complications, delivery at 39-40 weeks is recommended. This balances the risk of stillbirth with neonatal complications from prematurity. Earlier delivery may be indicated for poor control or complications.',
      category: 'Timing',
      difficulty: 'medium'
    },
    {
      id: 'q2',
      question: 'What is the target maternal glucose range during labor?',
      options: [
        '40-70 mg/dL',
        '70-110 mg/dL',
        '120-160 mg/dL',
        '160-200 mg/dL'
      ],
      correctAnswer: 1,
      explanation: 'Maternal glucose should be maintained between 70-110 mg/dL during labor to minimize the risk of neonatal hypoglycemia. This may require insulin infusion and glucose monitoring every 1-2 hours.',
      category: 'Intrapartum Management',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'At what estimated fetal weight is elective cesarean delivery typically recommended to reduce shoulder dystocia risk?',
      options: [
        '>3500g',
        '>4000g',
        '>4500g',
        '>5000g'
      ],
      correctAnswer: 2,
      explanation: 'ACOG recommends considering elective cesarean delivery for estimated fetal weight >4500g in women with diabetes due to the significantly increased risk of shoulder dystocia and birth trauma.',
      category: 'Mode of Delivery',
      difficulty: 'hard'
    },
    {
      id: 'q4',
      question: 'Should insulin be continued during active labor?',
      options: [
        'Yes, at full dose',
        'Yes, but dose should be reduced or held',
        'No, always discontinue',
        'Only if glucose is high'
      ],
      correctAnswer: 1,
      explanation: 'Long-acting insulin is typically held on the day of delivery, and short-acting insulin is reduced or held during active labor due to decreased caloric intake and increased energy expenditure, which can cause hypoglycemia.',
      category: 'Medication Management',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'Why is close monitoring of the neonate recommended immediately after birth?',
      options: [
        'To check for congenital anomalies',
        'To monitor for hypoglycemia and other metabolic disturbances',
        'To assess gestational age',
        'Monitoring is not necessary if mother is controlled'
      ],
      correctAnswer: 1,
      explanation: 'Neonates of mothers with GDM are at risk for hypoglycemia, hypocalcemia, hypomagnesemia, polycythemia, and hyperbilirubinemia. Glucose should be checked within 1-2 hours of birth and regularly thereafter.',
      category: 'Neonatal Care',
      difficulty: 'easy'
    }
  ]
};
