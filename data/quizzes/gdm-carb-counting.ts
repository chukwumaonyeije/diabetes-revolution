import { Quiz } from '@/types/quiz';

export const gdmCarbCounting: Quiz = {
  id: 'gdm-carb-counting',
  title: 'GDM Carbohydrate Counting',
  description: 'Master carb counting techniques for optimal glucose control',
  category: 'Nutrition',
  difficulty: 'medium',
  estimatedTime: 7,
  questions: [
    {
      id: 'q1',
      question: 'How many grams of carbohydrate are in one "carb choice" or "carb serving"?',
      options: [
        '10 grams',
        '15 grams',
        '20 grams',
        '25 grams'
      ],
      correctAnswer: 1,
      explanation: 'One carbohydrate choice or serving equals 15 grams of carbohydrate. This standardized unit makes it easier to track and distribute carbohydrates throughout the day.',
      category: 'Basic Concepts',
      difficulty: 'easy'
    },
    {
      id: 'q2',
      question: 'Which food component does NOT significantly affect blood glucose?',
      options: [
        'Simple sugars',
        'Complex carbohydrates',
        'Dietary fiber',
        'Protein'
      ],
      correctAnswer: 3,
      explanation: 'While protein is important for overall nutrition, it does not significantly raise blood glucose levels. Carbohydrates (both simple and complex) are the primary nutrient affecting blood glucose, though fiber can slow glucose absorption.',
      category: 'Macronutrient Effects',
      difficulty: 'medium'
    },
    {
      id: 'q3',
      question: 'What is the glycemic index (GI)?',
      options: [
        'The total amount of carbohydrates in a food',
        'A measure of how quickly a food raises blood glucose',
        'The fiber content of a food',
        'The calorie content per serving'
      ],
      correctAnswer: 1,
      explanation: 'Glycemic index measures how quickly a carbohydrate-containing food raises blood glucose compared to pure glucose. Low GI foods (<55) cause slower, smaller increases in blood glucose.',
      category: 'Advanced Concepts',
      difficulty: 'medium'
    },
    {
      id: 'q4',
      question: 'One medium apple contains approximately how many carb choices?',
      options: [
        '1 choice (15g)',
        '2 choices (30g)',
        '3 choices (45g)',
        '4 choices (60g)'
      ],
      correctAnswer: 1,
      explanation: 'A medium apple contains approximately 15-20 grams of carbohydrate, or about 1 carb choice. Fruits vary in carbohydrate content, so portion control is important in GDM management.',
      category: 'Practical Application',
      difficulty: 'medium'
    },
    {
      id: 'q5',
      question: 'What is the "plate method" for carbohydrate distribution?',
      options: [
        'Half plate carbs, quarter protein, quarter vegetables',
        'Half plate non-starchy vegetables, quarter protein, quarter carbs',
        'All carbohydrates should be avoided',
        'Equal portions of all food groups'
      ],
      correctAnswer: 1,
      explanation: 'The plate method recommends filling half your plate with non-starchy vegetables, one quarter with lean protein, and one quarter with carbohydrates. This helps control portions and carb intake while ensuring balanced nutrition.',
      category: 'Meal Planning',
      difficulty: 'easy'
    }
  ]
};
