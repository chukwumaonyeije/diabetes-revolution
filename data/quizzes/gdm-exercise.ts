import { Quiz } from '@/types/quiz';

export const gdmExercise: Quiz = {
  id: 'gdm-exercise',
  title: 'GDM Exercise & Lifestyle',
  description: 'Physical activity guidelines for gestational diabetes management',
  category: 'Lifestyle',
  difficulty: 'easy',
  estimatedTime: 5,
  questions: [
    {
      id: 'q1',
      question: 'How much exercise is recommended per day for women with GDM?',
      options: [
        '10-15 minutes',
        '20-30 minutes',
        '45-60 minutes',
        '90 minutes or more'
      ],
      correctAnswer: 1,
      explanation: 'At least 20-30 minutes of moderate exercise most days of the week is recommended for GDM management. Exercise improves insulin sensitivity and helps control blood glucose levels.',
      category: 'Exercise Duration',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'What is the best time to exercise to help control postprandial glucose?',
      options: [
        'Before meals',
        'During meals',
        'After meals (10-15 minutes)',
        'Right before bedtime'
      ],
      correctAnswer: 2,
      explanation: 'Exercising 10-15 minutes after meals, particularly after breakfast, can significantly reduce postprandial glucose spikes by increasing glucose uptake by muscles.',
      category: 'Exercise Timing',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'Which type of exercise is generally safest during pregnancy with GDM?',
      options: [
        'High-intensity interval training',
        'Contact sports',
        'Low-impact activities like walking or swimming',
        'Marathon running'
      ],
      correctAnswer: 2,
      explanation: 'Low-impact activities such as brisk walking, swimming, stationary cycling, and prenatal yoga are safe and effective for most pregnant women with GDM. These activities minimize injury risk while providing cardiovascular benefits.',
      category: 'Exercise Types',
      difficulty: 'easy'
    },
    {
      id: 'q4',
      question: 'What should you avoid during exercise in pregnancy?',
      options: [
        'Drinking water',
        'Lying flat on your back after 20 weeks',
        'Moderate intensity activities',
        'Warming up before exercise'
      ],
      correctAnswer: 1,
      explanation: 'After 20 weeks gestation, exercises performed lying flat on the back should be avoided as the uterus can compress the vena cava, reducing blood return to the heart and potentially causing hypotension.',
      category: 'Exercise Safety',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'How does exercise help manage GDM?',
      options: [
        'It increases insulin production by the pancreas',
        'It increases insulin sensitivity and glucose uptake by muscles',
        'It eliminates the need for dietary changes',
        'It cures GDM permanently'
      ],
      correctAnswer: 1,
      explanation: 'Exercise enhances insulin sensitivity and promotes glucose uptake by skeletal muscles through insulin-independent mechanisms. This helps lower blood glucose levels both during and after physical activity.',
      category: 'Exercise Benefits',
      difficulty: 'medium'
    }
  ]
};
