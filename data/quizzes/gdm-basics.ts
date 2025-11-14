import { Quiz } from '@/types/quiz';

export const gdmBasics: Quiz = {
  id: 'gdm-basics',
  title: 'GDM Basics',
  description: 'Test your knowledge of Gestational Diabetes Mellitus fundamentals',
  category: 'Fundamentals',
  difficulty: 'easy',
  estimatedTime: 5,
  questions: [
    {
      id: 'q1',
      question: 'What is Gestational Diabetes Mellitus (GDM)?',
      options: [
        'Diabetes that develops before pregnancy',
        'Diabetes diagnosed during pregnancy in women without pre-existing diabetes',
        'Type 2 diabetes that occurs only in men',
        'A temporary condition that has no health implications'
      ],
      correctAnswer: 1,
      explanation: 'GDM is diabetes that is first diagnosed during pregnancy. It occurs when the body cannot produce enough insulin to meet the extra needs during pregnancy, leading to high blood sugar levels.',
      category: 'Definition',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'When is GDM typically diagnosed?',
      options: [
        'First trimester (weeks 1-13)',
        'Second trimester (weeks 24-28)',
        'Third trimester (weeks 32-36)',
        'After delivery'
      ],
      correctAnswer: 1,
      explanation: 'GDM is typically diagnosed between 24-28 weeks of pregnancy through glucose tolerance testing. This is when insulin resistance from pregnancy hormones is most pronounced.',
      category: 'Diagnosis',
      difficulty: 'easy'
    },
    {
      id: 'q3',
      question: 'What is the primary cause of GDM?',
      options: [
        'Eating too much sugar during pregnancy',
        'Hormonal changes that increase insulin resistance',
        'Lack of exercise before pregnancy',
        'Genetic mutation in the baby'
      ],
      correctAnswer: 1,
      explanation: 'During pregnancy, hormones produced by the placenta can make cells more resistant to insulin. When the pancreas cannot produce enough extra insulin to overcome this resistance, blood sugar levels rise, causing GDM.',
      category: 'Pathophysiology',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'Which of the following is a major risk factor for developing GDM?',
      options: [
        'Being underweight before pregnancy',
        'Having a family history of Type 2 diabetes',
        'Being under 25 years old',
        'Having only one previous pregnancy'
      ],
      correctAnswer: 1,
      explanation: 'A family history of Type 2 diabetes significantly increases the risk of GDM. Other risk factors include obesity, advanced maternal age (>35), previous GDM, and certain ethnic backgrounds (Hispanic, African American, Native American, Asian).',
      category: 'Risk Factors',
      difficulty: 'easy'
    },
    {
      id: 'q5',
      question: 'What typically happens to GDM after delivery?',
      options: [
        'It always becomes Type 1 diabetes',
        'It usually resolves but increases risk for Type 2 diabetes later',
        'It permanently damages the pancreas',
        'It has no long-term health implications'
      ],
      correctAnswer: 1,
      explanation: 'GDM typically resolves after delivery as pregnancy hormones decrease. However, women who had GDM have a 50% increased risk of developing Type 2 diabetes later in life. Postpartum glucose testing and lifestyle modifications are recommended.',
      category: 'Prognosis',
      difficulty: 'medium'
    }
  ]
};
