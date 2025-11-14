import { Quiz } from '@/types/quiz';

export const gdmAdvanced: Quiz = {
  id: 'gdm-advanced',
  title: 'GDM Advanced Management',
  description: 'Complex scenarios and advanced concepts in GDM care',
  category: 'Advanced',
  difficulty: 'hard',
  estimatedTime: 8,
  questions: [
    {
      id: 'q1',
      question: 'What is "steroid-induced hyperglycemia" in pregnancy?',
      options: [
        'GDM caused by anabolic steroids',
        'Hyperglycemia after corticosteroids for fetal lung maturity',
        'A form of Cushing syndrome',
        'Hyperglycemia from topical steroids'
      ],
      correctAnswer: 1,
      explanation: 'Betamethasone or dexamethasone given for fetal lung maturity can cause significant hyperglycemia peaking 2-3 days after administration. Close monitoring and increased insulin are often needed during this period.',
      category: 'Special Situations',
      difficulty: 'hard'
    },
    {
      id: 'q2',
      question: 'What is the "Pedersen hypothesis" regarding fetal effects of maternal hyperglycemia?',
      options: [
        'Maternal glucose crosses placenta causing fetal hyperinsulinemia and macrosomia',
        'Maternal insulin crosses placenta directly',
        'Fetal diabetes develops in utero',
        'Hyperglycemia causes placental insufficiency'
      ],
      correctAnswer: 0,
      explanation: 'The Pedersen hypothesis explains that maternal glucose crosses the placenta but insulin does not. Fetal pancreas responds to hyperglycemia with increased insulin secretion, leading to accelerated growth (macrosomia) and metabolic complications.',
      category: 'Pathophysiology',
      difficulty: 'hard'
    },
    {
      id: 'q3',
      question: 'What is asymmetric growth in GDM-affected fetuses?',
      options: [
        'Proportional growth of all body parts',
        'Excessive growth of insulin-sensitive tissues (abdomen, shoulders)',
        'Small head with normal body',
        'Growth restriction'
      ],
      correctAnswer: 1,
      explanation: 'Fetal hyperinsulinemia causes preferential growth of insulin-sensitive tissues (subcutaneous fat, liver, heart, abdomen, shoulders) while brain and head circumference grow normally, leading to asymmetric macrosomia and increased shoulder dystocia risk.',
      category: 'Fetal Growth Patterns',
      difficulty: 'hard'
    },
    {
      id: 'q4',
      question: 'How should GDM be managed in women with eating disorders?',
      options: [
        'Standard management only',
        'Multidisciplinary team including mental health support',
        'Avoid dietary restrictions entirely',
        'Always require insulin'
      ],
      correctAnswer: 1,
      explanation: 'Women with eating disorders and GDM require specialized multidisciplinary care including maternal-fetal medicine, nutrition, and mental health professionals. Flexible meal plans and avoiding restrictive language are important to prevent triggering disordered eating.',
      category: 'Special Populations',
      difficulty: 'hard'
    },
    {
      id: 'q5',
      question: 'What is the "dawn phenomenon" and how is it managed in GDM?',
      options: [
        'Morning hypoglycemia requiring glucose',
        'Early morning hyperglycemia from cortisol surge',
        'Nausea in early pregnancy',
        'A complication of insulin therapy'
      ],
      correctAnswer: 1,
      explanation: 'Dawn phenomenon is elevated fasting glucose due to early morning cortisol and growth hormone secretion increasing hepatic glucose output. Management includes bedtime snack with protein, evening NPH insulin, or basal insulin adjustment.',
      category: 'Glucose Patterns',
      difficulty: 'hard'
    }
  ]
};
