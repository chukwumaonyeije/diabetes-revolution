import { Quiz } from '@/types/quiz';

export const gdmOutcomes: Quiz = {
  id: 'gdm-outcomes',
  title: 'GDM Pregnancy Outcomes',
  description: 'Understanding outcomes and prognosis with proper GDM management',
  category: 'Outcomes',
  difficulty: 'medium',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'With optimal glucose control, can women with GDM achieve outcomes similar to non-diabetic pregnancies?',
      options: [
        'No, outcomes are always worse',
        'Yes, outcomes can approach those of general population',
        'Only if diet-controlled',
        'Only for maternal outcomes'
      ],
      correctAnswer: 1,
      explanation: 'With optimal glucose control (80%+ of values in target), pregnancy outcomes in GDM can closely approximate those of the general pregnant population. This emphasizes the critical importance of glucose management.',
      category: 'Overall Prognosis',
      difficulty: 'medium'
    },
    {
      id: 'q2',
      question: 'What percentage of GDM pregnancies can be managed with diet and exercise alone?',
      options: [
        '10-20%',
        '30-40%',
        '70-85%',
        '95-100%'
      ],
      correctAnswer: 2,
      explanation: 'Approximately 70-85% of women with GDM can achieve target glucose levels with medical nutrition therapy and exercise alone. The remaining 15-30% require pharmacologic therapy (insulin or metformin).',
      category: 'Treatment Success',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'How does GDM affect stillbirth risk with good control?',
      options: [
        'Significantly increases risk regardless of control',
        'Minimal increase with good glucose control',
        'Eliminates stillbirth risk completely',
        'Only increases risk in third trimester'
      ],
      correctAnswer: 1,
      explanation: 'With good glucose control, stillbirth risk in GDM is only minimally elevated compared to non-diabetic pregnancies. However, poor control significantly increases this risk, particularly in the third trimester.',
      category: 'Fetal Outcomes',
      difficulty: 'hard'
    },
    {
      id: 'q4',
      question: 'What is the average birth weight reduction achieved with proper GDM treatment?',
      options: [
        '50-100g',
        '100-200g',
        '200-400g',
        '500-700g'
      ],
      correctAnswer: 2,
      explanation: 'Effective GDM treatment typically reduces average birth weight by 200-400g and significantly decreases the rate of large for gestational age infants, thereby reducing birth trauma and cesarean delivery rates.',
      category: 'Growth Outcomes',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'Does treating mild GDM (borderline values) improve outcomes?',
      options: [
        'No benefit shown',
        'Yes, reduces macrosomia and preeclampsia',
        'Only benefits maternal outcomes',
        'Only benefits if on insulin'
      ],
      correctAnswer: 1,
      explanation: 'Landmark studies (MFMU, ACHOIS) demonstrated that treating even mild GDM reduces shoulder dystocia, cesarean delivery, preeclampsia, and large for gestational age infants, supporting universal screening and treatment.',
      category: 'Treatment Evidence',
      difficulty: 'hard'
    }
  ]
};
