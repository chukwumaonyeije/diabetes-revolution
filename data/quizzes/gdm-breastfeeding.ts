import { Quiz } from '@/types/quiz';

export const gdmBreastfeeding: Quiz = {
  id: 'gdm-breastfeeding',
  title: 'GDM and Breastfeeding',
  description: 'Benefits and management of breastfeeding after GDM',
  category: 'Postpartum',
  difficulty: 'easy',
  estimatedTime: 5,
  questions: [
    {
      id: 'q1',
      question: 'How does breastfeeding affect the mother\'s future diabetes risk?',
      options: [
        'Increases risk',
        'No effect',
        'Reduces risk by 15-30%',
        'Only affects if exclusive breastfeeding'
      ],
      correctAnswer: 2,
      explanation: 'Breastfeeding reduces the risk of developing Type 2 diabetes by 15-30% in women with previous GDM. The benefit increases with duration and exclusivity of breastfeeding, likely due to improved glucose metabolism and weight loss.',
      category: 'Maternal Benefits',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Can women who used insulin during pregnancy breastfeed?',
      options: [
        'No, it is contraindicated',
        'Yes, insulin does not pass into breast milk',
        'Only after stopping insulin',
        'Only with special precautions'
      ],
      correctAnswer: 1,
      explanation: 'Insulin is a large protein molecule that does not pass into breast milk in significant amounts. Even if trace amounts were present, it would be digested in the baby\'s stomach. Breastfeeding is safe and encouraged.',
      category: 'Safety',
      difficulty: 'easy'
    },
    {
      id: 'q3',
      question: 'What effect does breastfeeding have on maternal glucose levels?',
      options: [
        'Significantly raises glucose',
        'May lower glucose, requiring snacks',
        'No effect on glucose',
        'Only affects fasting glucose'
      ],
      correctAnswer: 1,
      explanation: 'Breastfeeding uses maternal glucose and can lower blood sugar levels. Nursing mothers may need additional snacks before or during feeding to prevent hypoglycemia, especially if on glucose-lowering medications.',
      category: 'Glucose Effects',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'How does GDM history affect breast milk composition?',
      options: [
        'Milk has higher glucose content',
        'Milk is nutritionally inadequate',
        'Generally normal composition',
        'Cannot produce colostrum'
      ],
      correctAnswer: 2,
      explanation: 'Women with well-controlled GDM produce breast milk with normal composition. However, poorly controlled diabetes at delivery may delay lactogenesis (milk production onset) and affect early milk volume.',
      category: 'Milk Composition',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'What is the recommended duration of breastfeeding after GDM?',
      options: [
        '2 weeks minimum',
        '6 weeks minimum',
        '6 months minimum (exclusive)',
        'No specific recommendation'
      ],
      correctAnswer: 2,
      explanation: 'WHO and AAP recommend exclusive breastfeeding for 6 months, then continued with complementary foods for at least 1 year. Longer duration provides greater metabolic benefits for both mother and infant.',
      category: 'Duration',
      difficulty: 'easy'
    }
  ]
};
