import { Quiz } from '@/types/quiz';

export const gdmNutrition: Quiz = {
  id: 'gdm-nutrition',
  title: 'GDM Nutrition Fundamentals',
  description: 'Essential nutrition principles for managing gestational diabetes',
  category: 'Management',
  difficulty: 'easy',
  estimatedTime: 6,
  questions: [
    {
      id: 'q1',
      question: 'What percentage of calories should come from carbohydrates in a GDM diet?',
      options: [
        '20-30%',
        '35-45%',
        '50-60%',
        '65-75%'
      ],
      correctAnswer: 1,
      explanation: 'For GDM management, carbohydrates should comprise 35-45% of total calories, which is lower than general pregnancy recommendations. This helps minimize postprandial glucose excursions while ensuring adequate energy.',
      category: 'Macronutrients',
      difficulty: 'medium'
    },
    {
      id: 'q2',
      question: 'Which meal typically requires the greatest carbohydrate restriction in GDM?',
      options: [
        'Breakfast',
        'Lunch',
        'Dinner',
        'All meals equally'
      ],
      correctAnswer: 0,
      explanation: 'Breakfast typically requires the most carbohydrate restriction (15-30g) because morning cortisol levels are highest, leading to increased insulin resistance and greater difficulty controlling blood glucose.',
      category: 'Meal Planning',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'How many meals and snacks are typically recommended per day for GDM?',
      options: [
        '3 meals only',
        '3 meals + 1 snack',
        '3 meals + 2-3 snacks',
        '6 small meals'
      ],
      correctAnswer: 2,
      explanation: 'The recommended pattern is 3 moderate meals plus 2-3 snacks throughout the day. This helps maintain stable blood glucose levels, prevents ketosis from prolonged fasting, and controls portion sizes.',
      category: 'Meal Frequency',
      difficulty: 'easy'
    },
    {
      id: 'q4',
      question: 'Why is a bedtime snack important in GDM management?',
      options: [
        'To prevent morning nausea',
        'To prevent overnight hypoglycemia and fasting ketosis',
        'To ensure adequate weight gain',
        'It is not important'
      ],
      correctAnswer: 1,
      explanation: 'A bedtime snack (15-30g carbohydrate with protein) helps prevent prolonged overnight fasting, which can lead to fasting ketosis and morning hyperglycemia (dawn phenomenon).',
      category: 'Meal Timing',
      difficulty: 'easy'
    },
    {
      id: 'q5',
      question: 'Which type of carbohydrate is preferred for GDM management?',
      options: [
        'Simple sugars for quick energy',
        'Complex carbohydrates with high fiber',
        'Refined grains for easy digestion',
        'Type of carbohydrate does not matter'
      ],
      correctAnswer: 1,
      explanation: 'Complex carbohydrates with high fiber are preferred because they are digested more slowly, leading to gradual glucose release and better postprandial glucose control. They also provide essential nutrients and promote satiety.',
      category: 'Carbohydrate Quality',
      difficulty: 'easy'
    }
  ]
};
