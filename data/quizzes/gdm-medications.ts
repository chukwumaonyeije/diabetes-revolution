import { Quiz } from '@/types/quiz';

export const gdmMedications: Quiz = {
  id: 'gdm-medications',
  title: 'GDM Oral Medications',
  description: 'Understanding oral medication options for GDM management',
  category: 'Treatment',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'Which oral medication is most commonly used for GDM when diet fails?',
      options: [
        'Metformin',
        'Glipizide',
        'Sitagliptin',
        'Pioglitazone'
      ],
      correctAnswer: 0,
      explanation: 'Metformin is the most commonly used oral agent for GDM. It reduces hepatic glucose production and improves insulin sensitivity. However, it is not FDA-approved for this indication and insulin remains first-line pharmacotherapy.',
      category: 'Medication Types',
      difficulty: 'medium'
    },
    {
      id: 'q2',
      question: 'What is a major concern with metformin use in pregnancy?',
      options: [
        'It causes severe hypoglycemia',
        'It crosses the placenta',
        'It increases birth defects',
        'It causes maternal weight gain'
      ],
      correctAnswer: 1,
      explanation: 'Metformin freely crosses the placenta, exposing the fetus to the medication. While studies show it is generally safe, long-term effects on the child are still being studied. Insulin does not cross the placenta.',
      category: 'Safety',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'Which oral medication has been used off-label for GDM but is less common than metformin?',
      options: [
        'Empagliflozin',
        'Glyburide (glibenclamide)',
        'Acarbose',
        'Canagliflozin'
      ],
      correctAnswer: 1,
      explanation: 'Glyburide, a second-generation sulfonylurea, was previously used for GDM but is now less favored due to concerns about neonatal hypoglycemia and higher failure rates compared to insulin.',
      category: 'Alternative Medications',
      difficulty: 'hard'
    },
    {
      id: 'q4',
      question: 'What percentage of GDM patients typically fail metformin therapy and require insulin?',
      options: [
        '5-10%',
        '20-30%',
        '40-50%',
        '70-80%'
      ],
      correctAnswer: 2,
      explanation: 'Approximately 40-50% of GDM patients started on metformin will require supplemental or complete switch to insulin therapy due to inadequate glucose control. Factors predicting failure include higher fasting glucose at diagnosis.',
      category: 'Treatment Efficacy',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'What is the main advantage of metformin over insulin?',
      options: [
        'Better glucose control',
        'No placental transfer',
        'Oral administration convenience',
        'FDA approved for GDM'
      ],
      correctAnswer: 2,
      explanation: 'The primary advantage is patient convenience - oral administration versus injections. However, insulin provides better titratability, does not cross the placenta, and is the gold standard with the most safety data.',
      category: 'Clinical Considerations',
      difficulty: 'easy'
    }
  ]
};
