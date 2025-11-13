import { Quiz } from '@/types/quiz';

export const gdmBasicsQuiz: Quiz = {
  id: 'gdm-basics-101',
  title: 'GDM Basics: What is Gestational Diabetes?',
  description: 'Learn the fundamentals of gestational diabetes mellitus and why it matters for you and your baby.',
  category: 'basics',
  difficulty: 'beginner',
  estimatedMinutes: 5,
  coverImage: '/images/quizzes/gdm-basics-cover.jpg',
  questions: [
    {
      id: 'q1',
      question: 'What is Gestational Diabetes Mellitus (GDM)?',
      options: [
        {
          id: 'a',
          text: 'Diabetes that only occurs during pregnancy',
        },
        {
          id: 'b',
          text: 'A permanent form of diabetes',
        },
        {
          id: 'c',
          text: 'Diabetes caused by eating too much sugar',
        },
        {
          id: 'd',
          text: 'A genetic disorder passed from parents',
        },
      ],
      correctAnswer: 'a',
      explanation:
        'Gestational Diabetes Mellitus (GDM) is a type of diabetes that develops during pregnancy in women who did not have diabetes before becoming pregnant. It typically appears in the second or third trimester and usually resolves after delivery. However, women with GDM have an increased risk of developing type 2 diabetes later in life.',
      tags: ['basics', 'definition'],
    },
    {
      id: 'q2',
      question: 'When is GDM typically diagnosed during pregnancy?',
      options: [
        {
          id: 'a',
          text: 'First trimester (weeks 1-12)',
        },
        {
          id: 'b',
          text: 'Second trimester (weeks 13-26)',
        },
        {
          id: 'c',
          text: 'Third trimester (weeks 27-40)',
        },
        {
          id: 'd',
          text: 'Before pregnancy',
        },
      ],
      correctAnswer: 'b',
      explanation:
        'GDM is most commonly diagnosed between 24-28 weeks of pregnancy. This is when pregnancy hormones that can cause insulin resistance are at their peak. Healthcare providers typically screen for GDM during this timeframe using an oral glucose tolerance test (OGTT). Some high-risk women may be screened earlier in pregnancy.',
      tags: ['basics', 'diagnosis', 'timing'],
    },
    {
      id: 'q3',
      question: 'What causes GDM?',
      image: '/images/quizzes/insulin-resistance.svg',
      options: [
        {
          id: 'a',
          text: 'Eating too many sweets during pregnancy',
        },
        {
          id: 'b',
          text: 'Pregnancy hormones affecting insulin function',
        },
        {
          id: 'c',
          text: 'Not exercising enough before pregnancy',
        },
        {
          id: 'd',
          text: 'Stress during pregnancy',
        },
      ],
      correctAnswer: 'b',
      explanation:
        'GDM occurs when pregnancy hormones (especially from the placenta) interfere with how insulin works in your body. Insulin is the hormone that helps glucose (sugar) enter your cells for energy. When insulin doesn\'t work as well (called "insulin resistance"), glucose builds up in your blood instead. While diet and exercise matter, GDM is primarily caused by hormonal changes that are a normal part of pregnancy, not by something you did wrong.',
      tags: ['basics', 'causes', 'physiology'],
    },
    {
      id: 'q4',
      question: 'Who is at higher risk for developing GDM?',
      options: [
        {
          id: 'a',
          text: 'Women with a family history of diabetes',
        },
        {
          id: 'b',
          text: 'Women who are overweight or obese',
        },
        {
          id: 'c',
          text: 'Women over age 25',
        },
        {
          id: 'd',
          text: 'All of the above',
        },
      ],
      correctAnswer: 'd',
      explanation:
        'Multiple factors increase the risk of GDM including: family history of diabetes, being overweight or obese, age over 25, certain ethnicities (Hispanic, African American, Native American, Asian, Pacific Islander), previous GDM, having polycystic ovary syndrome (PCOS), and previously delivering a baby weighing over 9 pounds. However, many women with no risk factors still develop GDM, which is why universal screening is recommended.',
      tags: ['basics', 'risk-factors'],
    },
    {
      id: 'q5',
      question: 'What happens to GDM after the baby is born?',
      options: [
        {
          id: 'a',
          text: 'It always becomes permanent type 2 diabetes',
        },
        {
          id: 'b',
          text: 'It usually goes away, but increases future diabetes risk',
        },
        {
          id: 'c',
          text: 'It completely disappears with no future concerns',
        },
        {
          id: 'd',
          text: 'It transforms into type 1 diabetes',
        },
      ],
      correctAnswer: 'b',
      explanation:
        'In most cases, GDM resolves after delivery once pregnancy hormones return to normal levels. However, having GDM significantly increases your risk (up to 50%) of developing type 2 diabetes later in life. This is why postpartum follow-up is crucial. You should have your blood sugar tested 6-12 weeks after delivery and continue screening every 1-3 years. Maintaining a healthy lifestyle with proper diet and exercise can substantially reduce this risk.',
      tags: ['basics', 'postpartum', 'prognosis'],
    },
  ],
};
