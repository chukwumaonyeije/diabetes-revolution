import { Quiz } from '@/types/quiz';

export const gdmFetalComplications: Quiz = {
  id: 'gdm-fetal-complications',
  title: 'GDM Fetal Complications',
  description: 'Understanding how GDM affects fetal development and outcomes',
  category: 'Complications',
  difficulty: 'medium',
  estimatedTime: 7,
  questions: [
    {
      id: 'q1',
      question: 'What is the most common fetal complication of poorly controlled GDM?',
      options: [
        'Growth restriction',
        'Macrosomia (large for gestational age)',
        'Congenital anomalies',
        'Preterm birth'
      ],
      correctAnswer: 1,
      explanation: 'Macrosomia (birth weight >4000g or >90th percentile) is the most common fetal complication of GDM, occurring in 15-45% of cases depending on control. Maternal hyperglycemia causes fetal hyperinsulinemia and excessive growth.',
      category: 'Growth Abnormalities',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Why do babies born to mothers with GDM have increased risk of neonatal hypoglycemia?',
      options: [
        'They are born with diabetes',
        'Fetal hyperinsulinemia persists after birth',
        'Their livers do not produce glucose',
        'They have low glycogen stores'
      ],
      correctAnswer: 1,
      explanation: 'In utero hyperglycemia causes fetal pancreatic hyperplasia and hyperinsulinemia. After delivery, when maternal glucose supply is cut off, the baby has persistent high insulin levels causing hypoglycemia in the first hours of life.',
      category: 'Neonatal Complications',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'Which fetal organ system is most affected by maternal hyperglycemia leading to respiratory distress?',
      options: [
        'Cardiovascular system',
        'Nervous system',
        'Respiratory system (delayed lung maturity)',
        'Renal system'
      ],
      correctAnswer: 2,
      explanation: 'Fetal hyperinsulinemia delays pulmonary maturation and surfactant production, increasing the risk of respiratory distress syndrome (RDS) even at term. This is why fetal lung maturity testing may be considered before 39 weeks delivery.',
      category: 'Respiratory Effects',
      difficulty: 'hard'
    },
    {
      id: 'q4',
      question: 'What long-term risk is increased in children born to mothers with GDM?',
      options: [
        'Asthma',
        'Obesity and metabolic syndrome',
        'Vision problems',
        'Hearing loss'
      ],
      correctAnswer: 1,
      explanation: 'Children exposed to maternal hyperglycemia in utero have increased risk of childhood and adult obesity, impaired glucose tolerance, and metabolic syndrome. This supports the concept of "fetal programming" of metabolic disease.',
      category: 'Long-term Effects',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'Does GDM (if controlled) increase the risk of major congenital anomalies?',
      options: [
        'Yes, significantly',
        'No, if glucose is controlled from the first trimester',
        'Only neural tube defects',
        'Only cardiac anomalies'
      ],
      correctAnswer: 1,
      explanation: 'GDM diagnosed at 24-28 weeks with good control does not increase congenital anomaly risk because organogenesis is complete by then. However, pre-existing diabetes with poor periconceptional control does increase this risk.',
      category: 'Congenital Anomalies',
      difficulty: 'hard'
    }
  ]
};
